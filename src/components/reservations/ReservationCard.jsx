'use client'
import { DELETE_RESERVATION_BY_ID } from '@/utils/constants/urls/urls_api';
import { RESERVATION_DETAILS, RESERVATION_MODIFICATION } from '@/utils/constants/urls/urls_front';
import { formatDateToEuropean } from '@/utils/dateFormat';
import { Cake } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BasicButton, DangerButton } from '../utils/buttons/AllButtons';
import ConfirmationModal from '../utils/modal/ConfirmationModal';

const ReservationCard = ({ resa }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const birthDate = new Date(resa.birthday);
    const currentMonth = new Date().getMonth();
    const birthDateMonth = birthDate.getMonth();
    const haveBirthdaySoon = currentMonth === birthDateMonth;
    const handleDelete = async (id) => {
        try {
            const response = await fetch(DELETE_RESERVATION_BY_ID(id), {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Échec de la suppression');
            }
            if (response.status === 200) {
                toast.success('Réservation supprimée ✅');
                setModalOpen(false)
            }
        } catch (error) {
            console.error('Erreur:', error.message);
        }
    };

    return (
        <div className='flex-1 flex flex-row justify-between text-dark-900 space-x-4'>
            <div className="basis-5/7 flex-1 flex flex-col justify-between space-y-4">
                <div className="flex flex-row justify-between">
                    <div className="basis-3/5 lg:basis-2/5 xl:basis-3/5 w-full h-full overflow-hidden flex flex-col items-center justify-center rounded-xl drop-shadow-md space-y-1">
                        <Image
                            src="/images/chambre_double.jpg"
                            alt="chambre avec lit double bien décoré"
                            width={472}
                            height={132}
                        />
                        <div className='flex flex-row justify-around items-center w-full border-x border-b border-gold-600/50 pb-1'>
                            <p className='text-xs'>nº <span className='text-base'>{resa.roomNumber}</span></p>
                            <p className=''>{resa.roomName}</p>
                        </div>
                    </div>
                    <div className='px-6 pt-1 basis-3/5 flex flex-col items-start justify-between'>
                        <div>
                            <h2 className='text-xl font-semibold'>{resa.lastname} {resa.firstname}</h2>
                            <div className='flex flex-row justify-start'>
                                <Cake className={`w-5 h-5 ${haveBirthdaySoon && 'text-cyan-600'}`} />
                                <p className={`pl-2 ${haveBirthdaySoon && 'text-cyan-600'}`}>{formatDateToEuropean(resa.birthday)}</p>
                            </div>
                        </div>
                        <p className='text-xs my-2'>Pour :
                            <span className='text-base'> {resa.sleepersAmount} {resa.sleepersAmount > 1 ? ' personnes' : ' personne'}</span>
                        </p>
                        <div className='flex flex-row justify-start items-center space-x-2'>
                            {resa?.services?.map(service =>
                                <img
                                    key={service.id}
                                    src="/images/dej.jpg"
                                    alt="croissant, café et jus de fruit"
                                    className="w-8 h-8 rounded-lg border border-dark-900/25"
                                />
                            )}
                            {resa?.services?.length > 4 && <p>...</p>}
                        </div>
                    </div>
                </div>
                <div className='w-9/10 flex flex-row justify-around border border-gold-600 rounded-lg p-1'>
                    <div className='flex flex-col justify-between items-center'>
                        <p className='text-yellow-600'>Arrivée</p>
                        <p className='text-lg font-semibold'>{formatDateToEuropean(resa.arrival)}</p>
                    </div>
                    <div className='flex flex-col justify-between items-center'>
                        <p className='text-yellow-600'>Départ</p>
                        <p className='text-xl font-semibold'>{formatDateToEuropean(resa.departure)}</p>
                    </div>
                </div>
            </div>
            <div className='basis-2/7 space-y-3'>
                <div className='flex flex-row justify-start items-baseline'>
                    <p className='text-xl m-0'><span className='text-yellow-600 text-4xl mr-2'>{resa.dueAmount.toFixed(2)}</span>€</p>
                    <p className='mx-2 text-xs'>TTC</p>
                </div>
                <BasicButton linkPath={RESERVATION_MODIFICATION(resa.id)}>
                    <div className='flex flex-col justify-between items-center'>
                        <p>Check In</p>
                        <hr className='w-3/4' />
                        <p>Modification</p>
                    </div>
                </BasicButton>
                <BasicButton linkPath={RESERVATION_DETAILS(resa.id)}>Détails</BasicButton>
                <DangerButton setModalOpen={setModalOpen}>Annulation</DangerButton>
            </div>
            <ConfirmationModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirmation={() => handleDelete(resa.id)}
                libelle='annuler cette réservation'
            />
        </div>
    )
}

export default ReservationCard;