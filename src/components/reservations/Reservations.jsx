'use client'
import { RESERVATION_CREATION } from '@/utils/constants/urls/urls_front'
import { getTodaySDate } from '@/utils/dateFormat'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { CreationButton } from '../utils/buttons/AllButtons'
import Header from '../utils/header-footer/Header'
import ReservationList from './ReservationList'

const Reservations = ({ pastReservationsData, recentReservationsData }) => {
    const [searchByName, setSearchByName] = useState('');
    const [searchByArrival, setSearchByArrival] = useState('');

    return (
        <div className="m-0">
            <div className="mb-6">
                <Header>
                    <div className="text-2xl flex flex-col xl:flex-row justify-center items-center space-y-4 xl:space-y-0 xl:space-x-10 py-4 xl:py-0">
                        <div className="text-base flex flex-row justify-between items-center space-x-4">
                            <p className="text-right text-sm">Nom de famille <br /> ou prénom</p>
                            <div className='flex flex-row justify-between items-start border border-gold-700 px-2 py-3 rounded'>
                                <input
                                    value={searchByName}
                                    type="text"
                                    maxLength={30}
                                    onChange={(e) => setSearchByName(e.target.value)}
                                    className="focus:outline-none focus:ring-0 px-2 xl:min-w-60 text-yellow-700"
                                />
                                <Search className="w-5 h-5 text-dark-900" />
                            </div>
                        </div>
                        <div className="text-base flex flex-row justify-between items-center space-x-4">
                            <p className="text-right text-sm">Date <br /> d'arrivée</p>
                            <input
                                type="date"
                                defaultValue={getTodaySDate()}
                                placeholder="Recherche date d'arrivée"
                                onChange={(e) => setSearchByArrival(e.target.value)}
                                className="focus:outline-none focus:ring-0 text-yellow-700 xl:min-w-60 border border-gold-700 px-4 py-3 rounded"
                            />
                        </div>
                    </div>
                </Header>
            </div>
            <div className="w-1/4">
                <CreationButton libelle='une réservation' linkPath={RESERVATION_CREATION} />
            </div>
            <ReservationList
                searchByName={searchByName}
                searchByArrival={searchByArrival}
                pastReservations={pastReservationsData}
                recentReservations={recentReservationsData}
            />
        </div>
    )
}

export default Reservations;