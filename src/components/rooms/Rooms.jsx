'use client'
import { ROOM_CREATION, ROOM_TYPE_CREATION } from '@/utils/constants/urls/urls_front'
import { Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { CreationButton } from '../utils/buttons/AllButtons'
import GroupedAccordion from '../utils/GroupedAccordion'
import Header from '../utils/header-footer/Header'
import RoomCard from './RoomCard'

const Rooms = ({ roomsData }) => {
    const [searchByName, setSearchByName] = useState('');
    const [searchByNumber, setSearchByNumber] = useState('');
    const searchParams = useSearchParams();
    const success = searchParams.get('success');
    const toastShown = useRef(false);

    useEffect(() => {
        const toastMessage = success === '1' ? 'Chambre créée avec succès 🎉' : 'Chambre modifiée avec succès 🎉'
        if ((success === '1' || success === '2') && !toastShown.current) {
            toast.success(toastMessage);
            toastShown.current = true;
        }
    }, [success]);
    
    useEffect(() => {
        const url = new URL(window.location.href)

        if (url.searchParams.has('success')) {
            url.searchParams.delete('success')
            const cleanUrl = url.pathname + (url.searchParams.toString() ? `?${url.searchParams.toString()}` : '')

            sessionStorage.setItem('previousCleanUrl', cleanUrl)
        }
    }, [])

    return (
        <div className="m-0">
            <div className="mb-6">
                <Header>
                    <div className="text-2xl flex flex-col xl:flex-row justify-center items-center space-y-4 xl:space-y-0 xl:space-x-10 py-4 xl:py-0">
                        <div className="text-base flex flex-row justify-between items-center space-x-4">
                            <p className="text-right text-sm">Nom de chambre</p>
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
                            <p className="text-right text-sm">Numéro</p>
                            <div className='flex flex-row justify-between items-start border border-gold-700 px-2 py-3 rounded'>
                                <input
                                    value={searchByNumber}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={3}
                                    pattern="\d*"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                    }}
                                    onChange={(e) => setSearchByNumber(e.target.value)}
                                    className="no-spinner focus:outline-none focus:ring-0 px-2 text-yellow-700"
                                />
                                <Search className="w-5 h-5 text-dark-900" />
                            </div>
                        </div>
                    </div>
                </Header>
            </div>
            <div className="w-full flex flex-row justify-start items-center space-x-8">
                <CreationButton libelle='une chambre' linkPath={ROOM_CREATION} />
                <CreationButton libelle='un type de chambre' linkPath={ROOM_TYPE_CREATION} />
            </div>
            <GroupedAccordion
                searchByName={searchByName}
                searchByNumber={searchByNumber}
                datas={roomsData}
                groupBy={room => room.type}
                ItemComponent={RoomCard}
            />
        </div>
    )
}

export default Rooms