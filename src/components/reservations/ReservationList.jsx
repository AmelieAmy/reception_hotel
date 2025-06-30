'use client'
import { useState } from 'react';
import ReservationCard from './ReservationCard';
import BasicCard from '../utils/cards/BasicCard';
import { Eye } from 'lucide-react';

const ReservationList = ({ pastReservations, recentReservations }) => {
    const [showPast, setShowPast] = useState(true)
    const reservations = showPast ? pastReservations : recentReservations

    return (
        <div className='flex flex-col justify-between items-end space-y-6'>
            <button
                onClick={() => setShowPast(prev => !prev)}
                className="text-center rounded-lg text-white text-xl capitalize bg-gold-600 py-2 px-6"
            >
                {showPast ?
                    <div className='flex flex-row justify-between items-center space-x-4'>
                        <p>Réservations récentes</p>
                        <Eye className="w-6 h-6" />
                    </div> :
                    <div className='flex flex-row justify-between items-center space-x-4'>
                        <Eye className="w-6 h-6" />
                        <p>Anciennes réservations</p>
                    </div>
                }
            </button>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-10">
                {reservations.length === 0 ? (
                    <p>Aucune réservation</p>
                ) : (
                    reservations.map((resa) => (
                        <BasicCard key={resa.id}>
                            <ReservationCard resa={resa} />
                        </BasicCard>
                    ))
                )}
            </div>
        </div>
    )
}

export default ReservationList;