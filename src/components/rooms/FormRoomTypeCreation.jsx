'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BackButton, ValidationButton } from "../utils/buttons/AllButtons";
import BasicCard from "../utils/cards/BasicCard";
import RoomTypeModal from "./RoomTypeModal";

const FormRoomTypeCreation = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);
    const { register, setValue, watch, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Form data:', data);
    };

    return (
        <div className="m-0">
            <BackButton onClick={() => router.back()} />
            <div className="w-1/3 mx-auto mt-10">
                <BasicCard>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col justify-between items-start space-y-4 text-dark-900 py-2">

                        <div className="w-full">
                            <label>Nom du type</label>
                            <input
                                maxLength={15}
                                {...register('name', { required: 'Nom du type de chambre requis' })}
                                className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                            />
                            {errors.name && <p className="text-red-700 text-sm">{errors.name.message}</p>}
                        </div>

                        <div className="w-full">
                            <label>Capacité lit</label>
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="\d*"
                                maxLength={1}
                                {...register("bedCapacity", {
                                    required: 'Capacité de lit requise',
                                    pattern: {
                                        value: /^\d+$/,
                                        message: "Seuls les chiffres sont autorisés"
                                    },
                                    maxLength: {
                                        value: 1,
                                        message: "Maximum 1 chiffres",
                                    }
                                })}
                                className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                            />
                            {errors.bedCapacity && <p className="text-red-700 text-sm">{errors.bedCapacity.message}</p>}
                        </div>

                        <div className="w-full">
                            <label>Description</label>
                            <textarea
                                maxLength={200}
                                {...register('description', { required: 'Description de chambre requise' })}
                                className="w-full bg-stone-100  rounded px-3 py-2 mt-1"
                            ></textarea>
                            {errors.description && <p className="text-red-700 text-sm">{errors.description.message}</p>}
                        </div>

                        <ValidationButton libelle="Créer" />

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

export default FormRoomTypeCreation