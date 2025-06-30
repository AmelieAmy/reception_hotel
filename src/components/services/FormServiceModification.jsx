'use client'
import BasicCard from "@/components/utils/cards/BasicCard";
import Header from "@/components/utils/header-footer/Header";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BackButton, SelectionButtonToModal } from "../utils/buttons/AllButtons";
import ServiceTypeModal from "./ServiceTypeModal";

const FormServiceModification = ({ service, serviceTypes }) => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: service.name,
            type: service.type,
            duration: service.duration,
            openingHour: service.openingHour,
            price: service.price,
            description: service.description
        }
    });

    const onSubmit = (data) => {
        console.log('Form data:', data);
    };

    return (
        <div className="p-10">
            <Header>
                <h1 className="text-lg">Modification du service : <span className="text-2xl">{service.name}</span></h1>
            </Header>
            <BackButton onClick={() => router.back()} />
            <div className="w-1/2 mx-auto">
                <BasicCard>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col justify-between items-start space-y-4 text-dark-900 py-2">
                        <div className="w-full flex flex-row justify-between items-start space-x-6">
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Nom</label>
                                    <input
                                        {...register('name', { required: 'Nom requis' })}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                </div>
                                <div className="w-full">
                                    <label>Durée</label>
                                    <input
                                        type="duration"
                                        {...register('duration')}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.duration && <p className="text-red-500 text-sm">{errors.duration.message}</p>}
                                </div>
                                <div className="w-full">
                                    <label>Heure d&apos;ouverture</label>
                                    <input
                                        type="openingHour"
                                        {...register('openingHour')}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.openingHour && <p className="text-red-500 text-sm">{errors.openingHour.message}</p>}
                                </div>
                            </div>

                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full flex flex-col justify-between items-start space-y-1">
                                    <label>Définir un type de service</label>
                                    <SelectionButtonToModal
                                        onClick={() => setModalOpen(true)}
                                        libelle="Choisir"
                                    />
                                </div>
                                <div className="w-full">
                                    <label>Type de service</label>
                                    <div className="flex gap-2">
                                        <input
                                            readOnly
                                            {...register('type')}
                                            placeholder="Sélectionnez un type"
                                            className="w-full bg-stone-100 border-t-2 border-gold-600 rounded px-3 py-2 mt-1"
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label>Prix</label>
                                    <input
                                        type="price"
                                        {...register('price', { required: 'Prix de la chambre requis' })}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <label>Description</label>
                            <textarea
                                {...register('description')}
                                className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                            ></textarea>
                            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                        </div>

                        <div className="w-full flex flex-row justify-start items-center">
                            <button type="submit" className="w-1/3 bg-teal-700 text-white rounded px-4 py-2 hover:bg-teal-600">
                                Modifier
                            </button>
                        </div>

                        <ServiceTypeModal
                            isOpen={modalOpen}
                            serviceTypes={serviceTypes}
                            onClose={() => setModalOpen(false)}
                            onSelect={(type) => {
                                setValue('type', type.typeName);
                            }}
                        />
                    </form>
                </BasicCard>
            </div>
        </div>
    )
}

export default FormServiceModification;