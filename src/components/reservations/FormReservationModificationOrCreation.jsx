'use client'
import { calculateAcompte, calculateResaPriceWithoutServices } from '@/utils/calculatePrices';
import { GET_CLIENT_BY_EMAIL } from '@/utils/constants/urls/urls_api';
import { calculateNightsAmount, getTodaySDate } from '@/utils/dateFormat';
import { RotateCw, SquarePen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import ServiceMiniCard from '../services/ServiceMiniCard';
import { BackButton, SelectionButtonToModal, ValidationButton } from '../utils/buttons/AllButtons';
import BasicCard from '../utils/cards/BasicCard';
import Separator from '../utils/separator/Separator';
import RoomSelectionModal from './RoomSelectionModal';
import ServiceSelectionModal from './ServiceSelectionModal';

const FormReservationModificationOrCreation = ({ reservation, services, creation }) => {
    const router = useRouter();
    // Modals
    const [serviceSelectionModalOpen, setServiceSelectionModalOpen] = useState(false);
    const [roomSelectionModalOpen, setRoomSelectionModalOpen] = useState(false);
    // Services list
    const [resaServices, setResaServices] = useState(creation ? [] : reservation.services);
    // Empty room'infos if reservation's infos have changed
    const [showRoomHasToBeSelected, setShowRoomHasToBeSelected] = useState(creation ? true : false);
    // Calculate nights amount during the stay in the hotel
    const [nightsAmount, setNightsAmount] = useState(creation ? 0 :
        calculateNightsAmount(reservation.arrival, reservation.departure)
    );
    // Check client Email
    const [emailCheckResult, setEmailCheckResult] = useState(null);
    const [checkingEmail, setCheckingEmail] = useState(false);
    // Recalculate the prices and totals
    const [finalDepositAmount, setFinalDepositAmount] = useState(creation ? 0 :
        reservation.payment?.[0]?.depositAmount
    );
    const originalPaidAmount = creation ? 0 : reservation?.payment[0]?.paidAmount;
    const [finalPaidAmount, setPaidAmount] = useState(originalPaidAmount);
    const originalDueAmount = creation ? 0 : reservation.payment?.[0]?.dueAmount;
    const [finalDueAmount, setFinalDueAmount] = useState(originalDueAmount);
    const originalTotalAmount = creation ? 0 : reservation.payment?.[0]?.totalAmount;
    const [totalAmount, setTotalAmount] = useState(originalTotalAmount);
    const [finalRoomPrice, setFinalRoomPrice] = useState(creation ? 0 : reservation.roomPrice);
    const [resaTotalWithoutServices, setResaTotalWithoutServices] = useState(creation ? 0 :
        calculateResaPriceWithoutServices(reservation.roomPrice,
            calculateNightsAmount(reservation.arrival, reservation.departure)
        )
    );
    const [totalServices, setTotalServices] = useState(creation ? 0 :
        resaServices.reduce(
            (sum, service) => sum + parseFloat(service.price) * (service.quantity || 1),
            0
        ));
    const reservationServiceIds = creation ? [] : resaServices.map(s => s.id);
    const servicesToSelectFrom = services.filter(service =>
        !reservationServiceIds.includes(service.id)
    );

    const handleDeleteService = (serviceToRemove) => {
        setResaServices(prevServices =>
            prevServices.filter(service => service.id !== serviceToRemove?.id)
        );
        const serviceToRemovePrice = parseFloat(serviceToRemove.price) * (serviceToRemove.quantity);
        setTotalServices(totalServices - serviceToRemovePrice)
    };

    const handleSelectedServices = (selected) => {
        const selectedWithQuantities = selected.map(service => ({
            ...service,
            quantity: 1,
        }));
        setResaServices(prev => {
            const updated = [...prev, ...selectedWithQuantities];
            selectedWithQuantities.forEach(srv => {
                setValue(`quantities.${srv.id}`, 1);
            });
            return updated;
        });
        const addedServicesPrice = selectedWithQuantities.reduce(
            (sum, service) => sum + parseFloat(service.price) * (service.quantity || 1),
            0
        );
        setTotalServices(totalServices + addedServicesPrice)
    };
    console.log('resaServices', resaServices)

    const {
        register,
        handleSubmit,
        control,
        trigger,
        getValues,
        setValue,
        formState: { errors }
    } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: creation ? {
            paidAmount: finalPaidAmount,
            quantities: resaServices.reduce((acc, service, idx) => {
                acc[service.id] = service.quantity || 1;
                return acc;
            }, {}),
        } :
            {
                roomName: reservation?.roomName,
                roomType: reservation?.roomType,
                roomNumber: reservation?.roomNumber,
                roomBedCapacity: reservation?.roomBedCapacity,
                roomPrice: reservation?.roomPrice,
                email: reservation?.email,
                lastname: reservation?.lastname,
                firstname: reservation?.firstname,
                phoneNumber: reservation?.phoneNumber,
                birthday: reservation?.birthday,
                arrival: reservation?.arrival,
                departure: reservation?.departure,
                sleepersAmount: reservation?.sleepersAmount,
                paidAmount: finalPaidAmount,
                quantities: resaServices.reduce((acc, service, idx) => {
                    acc[service.id] = service.quantity || 1;
                    return acc;
                }, {}),
            }
    })

    // Check email
    const checkEmail = async () => {
        const email = getValues('email');
        const isValid = await trigger('email');

        if (!isValid || !email) {
            console.log('Email invalide, requête non envoyée.');
            return;
        }

        try {
            setCheckingEmail(true);
            const response = await fetch(GET_CLIENT_BY_EMAIL(email));
            const data = await response.json();
            const clientData = data[0];
            setEmailCheckResult(clientData);
            if (clientData?.existInDatabase === 1) {
                setValue('lastname', clientData.lastname);
                setValue('firstname', clientData.firstname);
                setValue('phoneNumber', clientData.phoneNumber);
                setValue('birthday', clientData.birthday);
            }
        } catch (error) {
            console.error("Erreur lors de la vérification de l'email :", error);
        } finally {
            setCheckingEmail(false);
        }
    };

    // check changes
    const arrival = useWatch({ control, name: 'arrival' });
    const departure = useWatch({ control, name: 'departure' });
    const sleepersAmount = useWatch({ control, name: 'sleepersAmount' });
    const watchedQuantities = useWatch({ control, name: 'quantities', defaultValue: {} });
    const newPaidAmount = useWatch({ control, name: 'paidAmount' });
    const newRoomPrice = useWatch({ control, name: 'roomPrice' });

    // When roomPrice is updated
    useEffect(() => {
        if (arrival !== undefined && departure !== undefined) {
            const newNightsAmount = calculateNightsAmount(arrival, departure);
            const newResaPriceWithoutServices = calculateResaPriceWithoutServices(finalRoomPrice, newNightsAmount);
            const newTotalAmount = newResaPriceWithoutServices + totalServices;
            setResaTotalWithoutServices(newResaPriceWithoutServices)
            setFinalDepositAmount(
                calculateAcompte(finalRoomPrice, newNightsAmount)
            );
            setResaTotalWithoutServices(newResaPriceWithoutServices)
            setTotalAmount(newTotalAmount);
            setFinalDueAmount(newTotalAmount - finalPaidAmount);
        }
    }, [newRoomPrice]);

    // If there's a change, room section is being emptied
    useEffect(() => {
        if (arrival !== undefined && departure !== undefined) {
            const newNightsAmount = calculateNightsAmount(arrival, departure);
            setNightsAmount(newNightsAmount);
            setShowRoomHasToBeSelected(true);
            setValue('roomName', null);
            setValue('roomType', null);
            setValue('roomNumber', null);
            setValue('roomBedCapacity', null);
            setValue('roomPrice', null);
        }
    }, [arrival, departure, sleepersAmount]);

    useEffect(() => {
        const total = resaServices.reduce((sum, service) => {
            const quantity = parseInt(watchedQuantities?.[service.id] || service.quantity || 1, 10);
            const unitPrice = parseFloat(service.price.toString().replace(',', '.'));
            return sum + quantity * unitPrice;
        }, 0);
        const newTotalServices = Number(total.toFixed(2))

        setTotalServices(newTotalServices);
        setTotalAmount((totalAmount - totalServices) + newTotalServices);
        setFinalDueAmount((finalDueAmount - totalServices) + newTotalServices);
    }, [watchedQuantities, resaServices]);

    useEffect(() => {
        setPaidAmount(newPaidAmount)
        setFinalDueAmount(totalAmount - newPaidAmount);
    }, [newPaidAmount]);

    const onSubmit = (data) => {
        // get only quantities from form
        const { quantities, ...rest } = data;
        // Build services list with corresponding quantity (1 by default)
        const selectedServicesWithQuantities = resaServices?.map(service => ({
            ...service,
            quantity: Number(quantities?.[service.id]) || 1,
        }));
        // Combine leftover data with new service list
        const fullFormData = {
            ...rest,
            paidAmount: Number(finalPaidAmount),
            depositAmount: finalDepositAmount,
            dueAmount: finalDueAmount,
            totalAmount: totalAmount,
            services: selectedServicesWithQuantities,
        };

        console.log('Formulaire complet :', fullFormData);
    };

    return (
        <div>
            <BackButton onClick={() => router.back()} />
            <div className="w-1/2 mx-auto mt-10">
                <BasicCard>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col justify-between items-center space-y-4 text-dark-900">
                        <Separator libelle="Informations clients" />
                        <div className="w-full">
                            <label>E-mail</label>
                            <input
                                maxLength={50}
                                type='email'
                                {...register('email', {
                                    required: 'E-mail requis',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Adresse email invalide'
                                    }
                                })}
                                className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault(); // avoid submitting form
                                        checkEmail(); // trigger checkEmail button
                                        e.target.blur(); // trigger validation controle
                                    }
                                }}
                            />
                            {errors.email && <p className="text-red-700 text-sm">{errors.email.message}</p>}
                        </div>
                        <div className="w-full">
                            <SelectionButtonToModal
                                wfull
                                onClick={checkEmail}
                                disabled={checkingEmail}
                                libelle={checkingEmail ? "Vérification en cours..." : "Actualiser les informations client"}
                                icon={<RotateCw className="w-5 h-5" />}
                            />
                            {emailCheckResult?.existInDatabase === 0 &&
                                <p className="mt-2 text-sm text-gold-800">Ce client n'est pas encore enregistré. Veuillez saisir manuellement ses données.</p>
                            }
                        </div>
                        <div className="w-full flex flex-row justify-between items-start space-x-6">
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Nom de famille</label>
                                    <input
                                        maxLength={30}
                                        {...register('lastname',
                                            {
                                                required: 'Nom de famille requis',
                                                pattern: {
                                                    value: /^[A-Za-zÀ-ÿ\s'-]+$/,
                                                    message: "Seules les lettres sont autorisées"
                                                },
                                                validate: (value) =>
                                                    /^[A-Za-zÀ-ÿ\s'-]+$/.test(value) || "Aucun chiffre ni caractère spécial autorisé"
                                            }
                                        )}
                                        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault() } }}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.lastname && <p className="text-red-700 text-sm">{errors.lastname.message}</p>}
                                </div>
                                <div className="w-full">
                                    <label>Prénom</label>
                                    <input
                                        maxLength={30}
                                        {...register('firstname',
                                            {
                                                required: 'Prénom requis',
                                                pattern: {
                                                    value: /^[A-Za-zÀ-ÿ\s'-]+$/,
                                                    message: "Seules les lettres sont autorisées"
                                                },
                                                validate: (value) =>
                                                    /^[A-Za-zÀ-ÿ\s'-]+$/.test(value) || "Aucun chiffre ni caractère spécial autorisé"
                                            }
                                        )}
                                        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault() } }}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.firstname && <p className="text-red-700 text-sm">{errors.firstname.message}</p>}
                                </div>
                            </div>
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Téléphone</label>
                                    <input
                                        maxLength={10}
                                        type="number"
                                        {...register("phoneNumber", {
                                            required: "Téléphone requis",
                                            pattern: {
                                                value: /^\d+$/,
                                                message: "Seuls les chiffres sont autorisés"
                                            }
                                        })}
                                        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault() } }}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.phoneNumber && <p className="text-red-700 text-sm">{errors.phoneNumber.message}</p>}
                                </div>
                                <div className="w-full">
                                    <label>Date de naissance</label>
                                    <input
                                        type="date"
                                        {...register('birthday', { required: 'Date de naissance valide requise' })}
                                        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault() } }}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.birthday && <p className="text-red-700 text-sm">{errors.birthday.message}</p>}
                                </div>
                            </div>
                        </div>
                        <Separator libelle="Informations réservations" />
                        <div className="w-full flex flex-row justify-between items-start space-x-6">
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Date d'arrivée</label>
                                    {creation ?
                                        <input
                                            type="date"
                                            {...register('arrival',
                                                {
                                                    required: "Date d'arrivée requise",
                                                    validate: value =>
                                                        value >= getTodaySDate() || "L'arrivée doit être postérieure ou égale à aujourd'hui"
                                                }
                                            )}
                                            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault() } }}
                                            className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                        /> :
                                        <input
                                            type="date"
                                            {...register('arrival', { required: "Date d'arrivée requise" })}
                                            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault() } }}
                                            className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                        />
                                    }
                                    {errors.arrival && <p className="text-red-700 text-sm">{errors.arrival.message}</p>}
                                </div>
                                <div className="w-full">
                                    <label>Nombre de personne</label>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        pattern="\d*"
                                        maxLength={3}
                                        {...register("sleepersAmount", {
                                            required: "Nombre de personne requis",
                                            pattern: {
                                                value: /^\d+$/,
                                                message: "Seuls les chiffres sont autorisés"
                                            },
                                            maxLength: {
                                                value: 3,
                                                message: "Maximum 3 chiffres",
                                            }
                                        })}
                                        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault() } }}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.sleepersAmount && <p className="text-red-700 text-sm">{errors.sleepersAmount.message}</p>}
                                </div>
                            </div>
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Date de départ</label>
                                    <input
                                        type="date"
                                        {...register('departure',
                                            {
                                                required: 'Date de départ requise',
                                                validate: value =>
                                                    !arrival || value > arrival || "La date de départ doit être postérieure à celle d'arrivée"
                                            }
                                        )}
                                        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault() } }}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.departure && <p className="text-red-700 text-sm">{errors.departure.message}</p>}
                                </div>
                            </div>
                        </div>
                        <Separator libelle="Informations chambre" />
                        <SelectionButtonToModal
                            wfull
                            onClick={() => setRoomSelectionModalOpen(true)}
                            libelle="Sélectionner une autre chambre"
                            icon={<SquarePen className="w-5 h-5" />}
                        />
                        <div className='w-full flex flex-row justify-between items-start space-x-6 mb-6'>
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Nom de la chambre</label>
                                    <input
                                        readOnly
                                        {...register('roomName')}
                                        className={`${showRoomHasToBeSelected && 'border border-red-700'} focus:outline-none focus:ring-0 w-full bg-stone-200 border border-dark-900/20 text-dark-900/60 rounded px-3 py-2 mt-1`}
                                    />
                                </div>
                                <div className="w-full">
                                    <label>Type de chambre</label>
                                    <input
                                        readOnly
                                        {...register('roomType')}
                                        className={`${showRoomHasToBeSelected && 'border border-red-700'} focus:outline-none focus:ring-0 w-full bg-stone-200 border border-dark-900/20 text-dark-900/60 rounded px-3 py-2 mt-1`}
                                    />
                                </div>
                            </div>
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Numéro de chambre</label>
                                    <input
                                        type="number"
                                        readOnly
                                        {...register('roomNumber')}
                                        className={`${showRoomHasToBeSelected && 'border border-red-700'} focus:outline-none focus:ring-0 w-full bg-stone-200 border border-dark-900/20 text-dark-900/60 rounded px-3 py-2 mt-1`}
                                    />
                                </div>
                                <div className="w-full">
                                    <label>Capacité lit</label>
                                    <input
                                        readOnly
                                        {...register('roomBedCapacity')}
                                        className={`${showRoomHasToBeSelected && 'border border-red-700'} focus:outline-none focus:ring-0 w-full bg-stone-200 border border-dark-900/20 text-dark-900/60 rounded px-3 py-2 mt-1`}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-gold-600/50 rounded py-2 px-6 flex flex-row justify-around items-center space-x-4">
                            <p className="">Prix de la chambre :</p>
                            {showRoomHasToBeSelected ?
                                <div className="bg-stone-200 w-21 h-9 rounded border border-red-700"></div>
                                :
                                <p className="bg-stone-200 border border-dark-900/20 text-dark-900/60 px-4 py-1 text-lg rounded">{finalRoomPrice.toFixed(2)}</p>
                            }
                            <p className={`${showRoomHasToBeSelected && "flex-1 text-right"}`}>€</p>
                        </div>
                        <Separator libelle="Informations service" />
                        <SelectionButtonToModal
                            wfull
                            onClick={() => setServiceSelectionModalOpen(true)}
                            libelle="Ajouter d'autres services"
                            icon={<SquarePen className="w-5 h-5" />}
                        />
                        {resaServices?.map(service =>
                            <ServiceMiniCard
                                key={service.id}
                                service={service}
                                onDelete={handleDeleteService}
                                quantityInput={
                                    <div>
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            pattern="\d*"
                                            min={1}
                                            maxLength={2}
                                            {...register(`quantities.${service.id}`, {
                                                required: 'Quantité requise',
                                                min: { value: 1, message: 'Minimum 1' },
                                                pattern: {
                                                    value: /^\d+$/,
                                                    message: "Seuls les chiffres sont autorisés"
                                                },
                                                maxLength: {
                                                    value: 2,
                                                    message: "Maximum 2 chiffres",
                                                }
                                            })}
                                            defaultValue={service.quantity}
                                            className="w-14 bg-stone-100 rounded px-3 py-3"
                                        />
                                        {errors.quantities?.[service.id] && (
                                            <p className="text-red-700 text-sm">
                                                {errors.quantities[service.id].message}
                                            </p>
                                        )}
                                    </div>
                                }
                            />
                        )}
                        <div className="bg-gold-600/50 rounded py-2 px-6 flex flex-row justify-around items-center space-x-4">
                            <p className="">Total des services :</p>
                            <p className="bg-stone-200 border border-dark-900/20 text-dark-900/60 px-4 py-1 text-lg rounded">{totalServices.toFixed(2)}</p>
                            <p className="">€</p>
                        </div>
                        <Separator libelle="Informations paiement" />
                        <Separator subSeparator libelle="Chambre" />
                        <div className="w-full flex flex-row justify-between items-start space-x-6">
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Nombre de nuit</label>
                                    <div className="w-full px-3 py-2 mt-1 bg-stone-200 border border-dark-900/20 text-dark-900/60 rounded flex flex-row justify-between items-baseline">
                                        <p>{nightsAmount}</p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label>Prix de la chambre</label>
                                    <div className={`${showRoomHasToBeSelected ? "border border-red-700" : "border border-dark-900/20 text-dark-900/60"} w-full px-3 py-2 mt-1 bg-stone-200 rounded flex flex-row justify-between items-baseline`}>
                                        <p className={`${showRoomHasToBeSelected && "hidden"}`}>{finalRoomPrice.toFixed(2)}</p>
                                        <p className={`${showRoomHasToBeSelected && "flex-1 text-right"}`}>€</p>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Acompte</label>
                                    <div className={`${showRoomHasToBeSelected ? "border border-red-700" : "border border-dark-900/20 text-dark-900/60"} w-full px-3 py-2 mt-1 bg-stone-200 rounded flex flex-row justify-between items-baseline`}>
                                        <p className={`${showRoomHasToBeSelected && "hidden"}`}>{finalDepositAmount.toFixed(2)}</p>
                                        <p className={`${showRoomHasToBeSelected && "flex-1 text-right"}`}>€</p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label>Total séjour sans services</label>
                                    <div className={`${showRoomHasToBeSelected ? "border border-red-700" : "border border-dark-900/20 text-dark-900/60"} w-full px-3 py-2 mt-1 bg-stone-200 rounded flex flex-row justify-between items-baseline`}>
                                        <p className={`${showRoomHasToBeSelected && "hidden"}`}>{resaTotalWithoutServices.toFixed(2)}</p>
                                        <p className={`${showRoomHasToBeSelected && "flex-1 text-right"}`}>€</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Separator subSeparator libelle="Services" />
                        <div className="self-end w-1/2 flex flex-row justify-between items-start pl-3">
                            <div className="w-full flex flex-col justify-between space-y-4">
                                <label>Total des services</label>
                                <div className="w-full px-3 py-2 mt-1 bg-stone-200 border border-dark-900/20 text-dark-900/60 rounded flex flex-row justify-between items-baseline">
                                    <p>{totalServices.toFixed(2)}</p>
                                    <p>€</p>
                                </div>
                            </div>
                        </div>
                        <Separator subSeparator libelle="Totaux" />
                        <div className="w-full flex flex-row justify-between items-start space-x-6">
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Déjà réglé</label>
                                    <div className="w-full px-3 py-2 mt-1 bg-stone-100 rounded flex flex-row justify-between items-baseline">
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            pattern="\d*"
                                            maxLength={8}
                                            {...register("paidAmount", {
                                                pattern: {
                                                    value: /^\d+$/,
                                                    message: "Seuls les chiffres sont autorisés"
                                                },
                                                maxLength: {
                                                    value: 8,
                                                    message: "Maximum 8 chiffres",
                                                }
                                            })}
                                            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault() } }}
                                            className="w-full"
                                        />
                                        <p>€</p>
                                    </div>
                                    {errors.paidAmount && <p className="text-red-700 text-sm">{errors.paidAmount.message}</p>}
                                </div>
                            </div>
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Total TTC</label>
                                    <div className={`${showRoomHasToBeSelected ? "border border-red-700" : "border border-dark-900/20 text-dark-900/60"} w-full px-3 py-2 mt-1 bg-stone-200 rounded flex flex-row justify-between items-baseline`}>
                                        <p className={`${showRoomHasToBeSelected && "hidden"}`}>{totalAmount.toFixed(2)}</p>
                                        <p className={`${showRoomHasToBeSelected && "flex-1 text-right"}`}>€</p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label>Reste à réglé</label>
                                    <div className={`${showRoomHasToBeSelected ? "border border-red-700" : "border border-dark-900/20 text-dark-900/60"} w-full px-3 py-2 mt-1 bg-stone-200 rounded flex flex-row justify-between items-baseline`}>
                                        <p className={`${showRoomHasToBeSelected && "hidden"}`}>{finalDueAmount.toFixed(2)}</p>
                                        <p className={`${showRoomHasToBeSelected && "flex-1 text-right"}`}>€</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {showRoomHasToBeSelected && <p className="text-red-700">Une chambre doit être choisie</p>}
                        <ValidationButton libelle="Modifier" />
                    </form>
                </BasicCard>

                <ServiceSelectionModal
                    isOpen={serviceSelectionModalOpen}
                    onClose={() => setServiceSelectionModalOpen(false)}
                    onSubmit={handleSelectedServices}
                    services={servicesToSelectFrom}
                />

                <RoomSelectionModal
                    isOpen={roomSelectionModalOpen}
                    onClose={() => setRoomSelectionModalOpen(false)}
                    arrival={arrival}
                    departure={departure}
                    sleepersAmount={sleepersAmount}
                    onSelect={(room) => {
                        setValue('roomName', room.name);
                        setValue('roomType', room.type);
                        setValue('roomNumber', room.number);
                        setValue('roomBedCapacity', room.bedCapacity);
                        setValue('roomPrice', room.price);
                        setFinalRoomPrice(room.price);
                        setFinalDepositAmount(calculateAcompte(room.price, nightsAmount));
                        setShowRoomHasToBeSelected(false);
                        setRoomSelectionModalOpen(false);
                    }}
                />
            </div >
        </div>
    )
}

export default FormReservationModificationOrCreation