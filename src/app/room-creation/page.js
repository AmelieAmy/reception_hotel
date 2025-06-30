'use client'
import RoomTypeModal from "@/components/rooms/RoomTypeModal";
import { BackButton } from "@/components/utils/buttons/AllButtons";
import BasicCard from "@/components/utils/cards/BasicCard";
import Header from "@/components/utils/header-footer/Header";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const RoomCreation = () => {
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
                <h1 className="text-lg">Création : <span className="text-2xl">Chambre</span></h1>
            </Header>
            <BackButton onClick={() => router.back()} />
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
                                    <label>Prix (€)</label>
                                    <input
                                        type="number"
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
                                        type="number"
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
                                readOnly
                                {...register('description')}
                                className="w-full bg-stone-100 border-t-2 border-gold-600 rounded px-3 py-2 mt-1"
                            ></textarea>
                            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}

                        </div>

                        <button type="submit" className="w-full bg-teal-700 text-white rounded px-4 py-2 hover:bg-teal-600">
                            Créer
                        </button>

                        <RoomTypeModal
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

export default RoomCreation;