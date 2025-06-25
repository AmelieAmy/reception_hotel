'use client'
import BasicCard from "@/components/cards/BasicCard";
import Header from "@/components/header/Header";
import { dataBedroom } from "@/utils/data";
import { useParams, useRouter } from "next/navigation";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import BedroomTypeModal from "@/components/bedrooms/BedroomTypeModal";
import { ChevronLeft } from 'lucide-react';

const BedroomCreation = () => {
    const router = useRouter();
    const { register, setValue, watch, handleSubmit, formState: { errors } } = useForm();
    const [modalOpen, setModalOpen] = useState(false);
    const roomType = watch('roomType');
    const description = watch('description');
    const bedCapacity = watch('bedCapacity');

    const onSubmit = (data) => {
        console.log('Form data:', data);
    };

    return (
        <div className="p-10">
            <Header>
                <h1 className="text-lg">Création d&apos;une chambre</h1>
            </Header>
            <div className="w-1/2 mx-auto mt-10">
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
                                    <label>Numéro de chambre</label>
                                    <input
                                        type="number"
                                        {...register('number', { required: 'Numéro de chambre requis' })}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.number && <p className="text-red-500 text-sm">{errors.number.message}</p>}
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

                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full flex flex-col justify-between items-start space-y-1">
                                    <label>Définir un type de chambre</label>
                                    <button
                                        type="button"
                                        onClick={() => setModalOpen(true)}
                                        className="bg-gold-600 hover:bg-yellow-600 text-white w-1/2 py-2 rounded"
                                    >
                                        Choisir
                                    </button>
                                </div>

                                <div className="w-full">
                                    <label>Type de chambre</label>
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
                                    <label>Capacité lit</label>
                                    <input
                                        type="bedCapacity"
                                        readOnly
                                        {...register('bedCapacity')}
                                        className="w-full bg-stone-100 border-t-2 border-gold-600 rounded px-3 py-2 mt-1"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <label>Description</label>
                            <textarea
                                {...register('description')}
                                className="w-full bg-stone-100 border-t-2 border-gold-600 rounded px-3 py-2 mt-1"
                                readOnly
                            ></textarea>
                        </div>

                        <div className="w-full flex flex-row justify-start items-center">
                            <button
                                onClick={() => router.back()} type="button" className="w-1/3 flex flex-row justify-start items-center space-x-2 hover:underline">
                                <ChevronLeft className="w-5 h-5" />
                                <p>Retour</p>
                            </button>
                            <button type="submit" className="w-1/3 bg-teal-700 text-white rounded px-4 py-2 hover:bg-teal-600">
                                Créer
                            </button>
                        </div>

                        <BedroomTypeModal
                            isOpen={modalOpen}
                            onClose={() => setModalOpen(false)}
                            onSelect={(type) => {
                                setValue('type', type.libelle);
                                setValue('description', type.description);
                                setValue('bedCapacity', type.bedCapacity);
                            }}
                        />
                    </form>
                </BasicCard>
            </div>
        </div>
    )
}

export default BedroomCreation;