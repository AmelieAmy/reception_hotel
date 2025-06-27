'use client'
import { useState } from 'react';
import BasicButton from '../utils/buttons/BasicButton';
import DangerButton from '../utils/buttons/DangerButton';
import Image from 'next/image';
import ConfirmationModal from '../utils/modal/ConfirmationModal';
import { SERVICE_MODIFICATION } from '@/utils/constants/urls/urls_front';

const ServiceCard = ({
    id,
    name,
    type,
    duration,
    openingHour,
    price,
    description
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className='flex flex-row justify-between items-center text-dark-900'>
            <div className='px-6 py-2 flex-1 flex flex-col justify-between items-start space-y-3'>
                <div className='w-full flex flex-row justify-start items-center space-x-4'>
                    <div className="w-12 h-12 overflow-hidden relative flex flex-col items-center justify-center rounded-lg drop-shadow-sm/75 space-y-2">
                        <Image
                            src="/images/chambre_double.jpg"
                            alt="chambre avec lit double bien décoré"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                        />
                    </div>
                    <h2 className='text-2xl font-semibold'>{name}</h2>
                </div>
                <div className=''>
                    <div className='flex flex-row justify-start'>
                        <p>Type de service :</p>
                        <p className='pl-2 font-semibold'>{type}</p>
                    </div>
                    <div className='flex flex-row justify-start'>
                        <p>Durée :</p>
                        <p className='pl-2 font-semibold'>{duration} mn</p>
                    </div>
                    <div className='flex flex-row justify-start'>
                        <p>Heures d'ouverture :</p>
                        <p className='pl-2 font-semibold'>{openingHour}</p>
                    </div>
                </div>
                <div className='h-14 flex flex-row justify-around items-center border border-gold-600 rounded-lg py-1 px-2'>
                    <p>{description}</p>
                </div>
            </div>
            <div className='basis-1/4 space-y-3'>
                <div className='mb-4'>
                    <p className='text-xl m-0'><span className='text-yellow-600 text-4xl mr-2'>{price}</span>€ / jour</p>
                    <p className='mx-2 text-sm'>Inclus charges et taxes</p></div>
                <BasicButton linkPath={SERVICE_MODIFICATION(id)}>Modification</BasicButton>
                <DangerButton setModalOpen={setModalOpen}>Suppression</DangerButton>
            </div>
            <ConfirmationModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirmation={() => console.log('confirmer')}
                libelle='supprimer ce service'
            />
        </div>
    )
}

export default ServiceCard;