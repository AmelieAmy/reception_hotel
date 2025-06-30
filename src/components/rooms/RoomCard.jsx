'use client'
import { BasicButton, DangerButton } from '../utils/buttons/AllButtons';
import Image from 'next/image';
import ConfirmationModal from '../utils/modal/ConfirmationModal';
import { useState } from 'react';
import { ROOM_MODIFICATION } from '@/utils/constants/urls/urls_front';

const RoomCard = ({
    id,
    name,
    type,
    bedCapacity,
    number,
    price,
    description
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className='flex flex-col sm:flex-row justify-between items-center text-dark-900'>
            <div className="basis-1/4 2xl:basis-2/7 w-56 h-48 overflow-hidden relative flex flex-col items-center justify-center rounded-xl drop-shadow-md/25 space-y-2">
                <Image
                    src="/images/chambre_double.jpg"
                    alt="chambre avec lit double bien décoré"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
            </div>
            <div className='px-6 py-2 flex-1 flex flex-col justify-between items-start space-y-3'>
                <h2 className='text-2xl font-semibold'>{name}</h2>
                <div className=''>
                    <div className='flex flex-row justify-start'>
                        <p>Type de chambre :</p>
                        <p className='pl-2 font-semibold'>{type}</p>
                    </div>
                    <div className='flex flex-row justify-start'>
                        <p>Capacité de couchage :</p>
                        <p className='pl-2 font-semibold'>{bedCapacity}</p>
                    </div>
                    <div className='flex flex-row justify-start'>
                        <p>Numéro :</p>
                        <p className='pl-2 font-semibold'>{number}</p>
                    </div>
                </div>
                <div className='flex flex-row justify-around border border-gold-600 rounded-lg py-1 px-2'>
                    <p>{description}</p>
                </div>
            </div>
            <div className='basis-1/4 space-y-3'>
                <div className='mb-4'>
                    <p className='text-xl m-0'><span className='text-yellow-600 text-4xl mr-2'>{price}</span>€</p>
                    <p className='mx-2 text-sm'>Inclus charges et taxes</p>
                </div>
                <BasicButton linkPath={ROOM_MODIFICATION(id)}>Modification</BasicButton>
                <DangerButton setModalOpen={setModalOpen}>Suppression</DangerButton>
            </div>
            <ConfirmationModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirmation={() => console.log('confirmer')}
                libelle='supprimer cette chambre'
            />
        </div>
    )
}

export default RoomCard;