'use client'
import RoomTypeModal from "@/components/rooms/RoomTypeModal";
import { BackButton } from "@/components/utils/buttons/AllButtons";
import BasicCard from "@/components/utils/cards/BasicCard";
import Header from "@/components/utils/header-footer/Header";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const RoomTypeCreation = () => {
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
                <h1 className="text-lg">Création : <span className="text-2xl">Type de chambre</span></h1>
            </Header>
            <BackButton onClick={() => router.back()} />
            <div className="w-1/3 mx-auto mt-10">
                <BasicCard>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col justify-between items-start space-y-4 text-dark-900 py-2">

                        <div className="w-full">
                            <label>Nom du type</label>
                            <input
                                {...register('name', { required: 'Nom du type de chambre requis' })}
                                className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>

                        <div className="w-full">
                            <label>Capacité lit</label>
                            <input
                                type="bedCapacity"
                                {...register('bedCapacity', { required: 'Capacité de lit requise' })}
                                className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                            />
                            {errors.bedCapacity && <p className="text-red-500 text-sm">{errors.bedCapacity.message}</p>}
                        </div>

                        <div className="w-full">
                            <label>Description</label>
                            <textarea
                                {...register('description', { required: 'Description de chambre requise' })}
                                className="w-full bg-stone-100  rounded px-3 py-2 mt-1"
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

export default RoomTypeCreation;
