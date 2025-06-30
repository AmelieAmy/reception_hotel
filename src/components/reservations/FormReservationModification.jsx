'use client'
import BasicCard from "@/components/utils/cards/BasicCard";
import Header from "@/components/utils/header-footer/Header";
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Separator from "../utils/separator/Separator";
import { ROOM_SELECTION } from "@/utils/constants/urls/urls_front";
import { SelectionButtonToPage, BackButton } from "../utils/buttons/AllButtons";

const FormReservationModification = ({ reservation }) => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        defaultValues: {
        }
    });

    const onSubmit = (data) => {
        console.log('Form data:', data);
    };

    return (
        <div className="p-10">
            <Header>
                <h1 className="text-lg">Modification de la réservation : <span className="text-2xl">{reservation.lastname} {reservation.firstname}</span></h1>
            </Header>
            <BackButton onClick={() => router.back()} />
            <div className="w-1/2 mx-auto mt-10">
                <BasicCard>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col justify-between items-center space-y-4 text-dark-900 py-2">
                        <Separator libelle="Informations service" />
                        <p>Liste des services + bouton vers une modal pour ajouter des servcies</p>
                        <Separator libelle="Informations chambre" />
                        <div className="w-full flex flex-row justify-between items-start space-x-6 mb-6">
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Nom de la chambre</label>
                                    <input
                                        readOnly
                                        {...register('roomName')}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                </div>
                                <div className="w-full">
                                    <label>Type de chambre</label>
                                    <input
                                        readOnly
                                        {...register('roomType')}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
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
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                </div>
                                <div className="w-full">
                                    <label>Capacité lit</label>
                                    <input
                                        readOnly
                                        {...register('bedCapacity')}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                </div>
                            </div>
                        </div>
                        <SelectionButtonToPage linkPath={ROOM_SELECTION} libelle="Sélectionner une autre chambre" />
                        <Separator libelle="Informations clients" />
                        <div className="w-full">
                            <label>E-mail</label>
                            <input
                                {...register('email', { required: 'E-mail requis' })}
                                className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div className="w-full flex flex-row justify-between items-start space-x-6">
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Nom de famille</label>
                                    <input
                                        {...register('lastname', { required: 'Nom de famille requis' })}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname.message}</p>}
                                </div>
                                <div className="w-full">
                                    <label>Prénom</label>
                                    <input
                                        {...register('firstname', { required: 'Prénom requis' })}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname.message}</p>}
                                </div>
                            </div>
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Téléphone</label>
                                    <input
                                        type="number"
                                        {...register('number', { required: 'Téléphone requis' })}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
                                </div>
                                <div className="w-full">
                                    <label>Date de naissance</label>
                                    <input
                                        type="date"
                                        {...register('birthday', { required: 'Date de naissance requis' })}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.birthday && <p className="text-red-500 text-sm">{errors.birthday.message}</p>}
                                </div>
                            </div>
                        </div>
                        <Separator libelle="Informations réservations" />
                        <div className="w-full flex flex-row justify-between items-start space-x-6">
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Date d'arrivée</label>
                                    <input
                                        type="date"
                                        {...register('arrival', { required: "Date d'arrivée requise" })}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.arrival && <p className="text-red-500 text-sm">{errors.arrival.message}</p>}
                                </div>
                                <div className="w-full">
                                    <label>Nombre de personne</label>
                                    <input
                                        type='number'
                                        {...register('expectedNumberOfPeople', { required: 'Nombre de personne requis' })}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.expectedNumberOfPeople && <p className="text-red-500 text-sm">{errors.expectedNumberOfPeople.message}</p>}
                                </div>
                            </div>
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Date de départ</label>
                                    <input
                                        type="date"
                                        {...register('departure', { required: 'Date de départ requise' })}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.departure && <p className="text-red-500 text-sm">{errors.departure.message}</p>}
                                </div>
                            </div>
                        </div>
                        <Separator libelle="Informations paiement" />
                        <div className="w-full flex flex-row justify-between items-start space-x-6">
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Acompte</label>
                                    <input
                                        readOnly
                                        {...register('depositAmount', { required: 'Acompte requis' })}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.deposit && <p className="text-red-500 text-sm">{errors.deposit.message}</p>}
                                </div>
                                <div className="w-full">
                                    <label>Déjà réglé</label>
                                    <input
                                        readOnly
                                        {...register('paidAmount')}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                </div>
                            </div>
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Reste à régler</label>
                                    <input
                                        readOnly
                                        {...register('dueAmount')}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                </div>
                                <div className="w-full">
                                    <label>Total des services</label>
                                    <input
                                        readOnly
                                        {...register('totalServices')}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                </div>
                                <div className="w-full">
                                    <label>Total TTC</label>
                                    <input
                                        readOnly
                                        {...register('totalAmount')}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="hidden">
                            <Separator libelle="Nouvelles Informations paiement" />
                            <div className="w-full flex flex-row justify-between items-start space-x-6">
                                <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                    <div className="w-full">
                                        <label>Nouvel Acompte</label>
                                        <input
                                            readOnly
                                            {...register('depositAmount', { required: 'Acompte requis' })}
                                            className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                        />
                                        {errors.deposit && <p className="text-red-500 text-sm">{errors.deposit.message}</p>}
                                    </div>
                                    <div className="w-full">
                                        <label>Déjà réglé</label>
                                        <input
                                            readOnly
                                            {...register('paidAmount')}
                                            className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                        />
                                    </div>
                                </div>
                                <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                    <div className="w-full">
                                        <label>Nouveau Reste à régler</label>
                                        <input
                                            readOnly
                                            {...register('dueAmount')}
                                            className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label>Total des services</label>
                                        <input
                                            readOnly
                                            {...register('totalServices')}
                                            className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label>Nouveau Total TTC</label>
                                        <input
                                            readOnly
                                            {...register('totalAmount')}
                                            className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-teal-700 text-white rounded px-4 py-2 hover:bg-teal-600">
                            Modifier
                        </button>
                    </form>
                </BasicCard>
            </div>
        </div >
    )
}

export default FormReservationModification;