'use client'
import BasicCard from "@/components/utils/cards/BasicCard";
import { CREATE_SERVICE, UPDATE_SERVICE_BY_ID } from "@/utils/constants/urls/urls_api";
import { SERVICES } from "@/utils/constants/urls/urls_front";
import { SquarePen } from "lucide-react";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BackButton, SelectionButtonToModal, ValidationButton } from "../utils/buttons/AllButtons";
import ServiceTypeModal from "./ServiceTypeModal";

const FormServiceModificationOrCreation = ({ service, serviceTypes, creation }) => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        defaultValues: !creation && {
            name: service.name,
            type: service.type,
            duration: service.duration,
            openingHour: service.openingHour,
            price: service.price,
            description: service.description
        }
    });

    const onSubmit = async (data) => {
        try {
            const url = creation ? CREATE_SERVICE : UPDATE_SERVICE_BY_ID(service.id)
            const method = creation ? 'POST' : 'PUT';
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            console.log('response:', response);
            if (!response.ok) throw new Error("Erreur lors de l'envoi");
            if (response.status === 200) {
                creation ?
                router.push(SERVICES+'?success=1'):
                router.push(SERVICES+'?success=2');
            }
        } catch (err) {
            console.error('Erreur:', err.message);
        }
    };

    return (
        <div className="m-0">
            <BackButton onClick={() => router.back()} />
            <div className="w-1/2 mx-auto">
                <BasicCard>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col justify-between items-start space-y-4 text-dark-900 py-2">
                        <div className="w-full flex flex-row justify-between items-start space-x-6">
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Nom</label>
                                    <input
                                        maxLength={30}
                                        {...register('name', { required: 'Nom requis' })}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.name && <p className="text-red-700 text-sm">{errors.name.message}</p>}
                                </div>
                                <div className="w-full">
                                    <label>Durée (en minutes)</label>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        pattern="\d*"
                                        maxLength={3}
                                        {...register("duration", {
                                            pattern: {
                                                value: /^\d+$/,
                                                message: "Seuls les chiffres sont autorisés"
                                            },
                                            maxLength: {
                                                value: 3,
                                                message: "Maximum 3 chiffres",
                                            }
                                        })}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.duration && <p className="text-red-700 text-sm">{errors.duration.message}</p>}
                                </div>
                                <div className="w-full">
                                    <label>Heure d&apos;ouverture</label>
                                    <input
                                        maxLength={60}
                                        {...register('openingHour')}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.openingHour && <p className="text-red-700 text-sm">{errors.openingHour.message}</p>}
                                </div>
                            </div>

                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full flex flex-col justify-between items-start space-y-1">
                                    <label>Définir un type de service</label>
                                    <SelectionButtonToModal
                                        onClick={() => setModalOpen(true)}
                                        libelle="Choisir"
                                        icon={<SquarePen className="w-6 h-6" />}
                                    />
                                </div>
                                <div className="w-full">
                                    <label>Type de service</label>
                                    <div className="flex gap-2">
                                        <input
                                            readOnly
                                            {...register('type')}
                                            placeholder="Sélectionnez un type"
                                            className="focus:outline-none focus:ring-0 w-full bg-stone-100 border-t-2 border-gold-600 rounded px-3 py-2 mt-1"
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label>Prix</label>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        pattern="\d*"
                                        maxLength={6}
                                        {...register("price", {
                                            required: "Prix de la chambre requis",
                                            pattern: {
                                                value: /^\d+$/,
                                                message: "Seuls les chiffres sont autorisés"
                                            },
                                            maxLength: {
                                                value: 6,
                                                message: "Maximum 6 chiffres",
                                            }
                                        })}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.price && <p className="text-red-700 text-sm">{errors.price.message}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <label>Description</label>
                            <textarea
                                maxLength={150}
                                {...register('description')}
                                className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                            ></textarea>
                            {errors.description && <p className="text-red-700 text-sm">{errors.description.message}</p>}
                        </div>

                        <ValidationButton libelle={creation ? 'Créer' : 'Modifier'} />

                        <ServiceTypeModal
                            isOpen={modalOpen}
                            onClose={() => setModalOpen(false)}
                            onSelect={(type) => {
                                setValue('type', type.typeName);
                            }}
                            serviceTypes={serviceTypes}
                        />
                    </form>
                </BasicCard>
            </div>
        </div>
    )
}

export default FormServiceModificationOrCreation;