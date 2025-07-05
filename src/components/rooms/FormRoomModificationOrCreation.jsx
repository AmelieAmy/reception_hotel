'use client'
import RoomTypeModal from "@/components/rooms/RoomTypeModal";
import BasicCard from "@/components/utils/cards/BasicCard";
import { SquarePen } from "lucide-react";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BackButton, SelectionButtonToModal, ValidationButton } from "../utils/buttons/AllButtons";

const FormRoomModificationOrCreation = ({ room, roomTypes, creation }) => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);
    
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        defaultValues: !creation && {
            name: room.name,
            type: room.type,
            bedCapacity: room.bedCapacity,
            number: room.number,
            price: room.price,
            description: room.description
        }
    });

    const onSubmit = (data) => {
        console.log('Form data:', data);
    };

    return (
        <div className="m-0">
            <BackButton onClick={() => router.back()} />
            <div className="w-1/2 mx-auto mt-10">
                <BasicCard>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col justify-between items-start space-y-4 text-dark-900 py-2">
                        <div className="w-full flex flex-row justify-between items-start space-x-6">
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Nom</label>
                                    <input
                                        maxLength={15}
                                        {...register('name', { required: 'Nom requis' })}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.name && <p className="text-red-700 text-sm">{errors.name.message}</p>}
                                </div>

                                <div className="w-full">
                                    <label>Numéro de chambre</label>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        pattern="\d*"
                                        maxLength={3}
                                        {...register("number", {
                                            required: 'Numéro de chambre requis',
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
                                    {errors.number && <p className="text-red-700 text-sm">{errors.number.message}</p>}
                                </div>

                                <div className="w-full">
                                    <label>Prix</label>
                                    <div className="w-full px-3 py-2 mt-1 border-t-2 border-stone-100 bg-stone-100 rounded flex flex-row justify-between items-baseline">
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            pattern="\d*"
                                            maxLength={8}
                                            {...register("price", {
                                                required: 'Prix de la chambre requis',
                                                pattern: {
                                                    value: /^\d+$/,
                                                    message: "Seuls les chiffres sont autorisés"
                                                },
                                                maxLength: {
                                                    value: 8,
                                                    message: "Maximum 8 chiffres",
                                                }
                                            })}
                                            className="w-full"
                                        />
                                        <p>€</p>
                                    </div>
                                    {errors.paidAmount && <p className="text-red-700 text-sm">{errors.paidAmount.message}</p>}
                                </div>
                            </div>

                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full flex flex-col justify-between items-start space-y-1">
                                    <label>Définir un type de chambre</label>
                                    <SelectionButtonToModal
                                        onClick={() => setModalOpen(true)}
                                        libelle="Choisir"
                                        icon={<SquarePen className="w-6 h-6" />}
                                    />
                                </div>

                                <div className="w-full">
                                    <label>Type de chambre</label>
                                    <div className="flex gap-2">
                                        <input
                                            readOnly
                                            {...register('type')}
                                            className="focus:outline-none focus:ring-0 w-full bg-stone-100 border-t-2 border-gold-600 rounded px-3 py-2 mt-1"
                                        />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <label>Capacité lit</label>
                                    <input
                                        readOnly
                                        {...register('bedCapacity')}
                                        className="focus:outline-none focus:ring-0 w-full bg-stone-100 border-t-2 border-gold-600 rounded px-3 py-2 mt-1"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <label>Description</label>
                            <textarea
                                readOnly
                                {...register('description')}
                                className="focus:outline-none focus:ring-0 w-full bg-stone-100 border-t-2 border-gold-600 rounded px-3 py-2 mt-1"
                            ></textarea>
                        </div>

                        <ValidationButton libelle="Modifier" />

                        <RoomTypeModal
                            isOpen={modalOpen}
                            roomTypes={roomTypes}
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

export default FormRoomModificationOrCreation;