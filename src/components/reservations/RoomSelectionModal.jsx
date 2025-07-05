'use client'
import { GET_AVAILABLE_ROOMS_BY_DATES, GET_ROOM_TYPES } from '@/utils/constants/urls/urls_api';
import { SquareX } from 'lucide-react';
import { useEffect, useState } from 'react';
import RoomMiniCard from '../rooms/RoomMiniCard';

const RoomSelectionModal = ({ isOpen, onClose, arrival, departure, sleepersAmount, onSelect }) => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!isOpen || !arrival || !departure) return;

        const fetchRooms = async () => {
            setLoading(true);
            try {
                const res = await fetch(GET_AVAILABLE_ROOMS_BY_DATES(arrival, departure, sleepersAmount));
                const data = await res.json();
                setRooms(data);
            } catch (e) {
                console.error('Erreur lors du chargement des chambres disponibles');
            } finally {
                setLoading(false);
            }
        };

        fetchRooms();
    }, [isOpen, arrival, departure]);

    if (!isOpen) return null;

    return (
        <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}>
            <div className="bg-stone-500 pt-8 px-10 rounded-lg max-w-6xl w-full max-h-[80vh] overflow-y-auto">
                <div className="flex-1 mb-10 flex flex-row justify-between items-center text-white">
                    <h2 className="text-xl">Choisissez une chambre</h2>
                    <button onClick={onClose}>
                        <SquareX className="w-6 h-6 hover:scale-125" />
                    </button>
                </div>

                {loading && <p>Chargement des chambres...</p>}

                {!loading && rooms.length === 0 && <p>Aucune chambre disponible</p>}

                {!loading &&
                    <div className='flex flex-col justify-between items-center space-y-4'>
                        {rooms.map((room) => (
                            // <RoomMiniCard key={room.id} room={room} onSelect={onSelect} />
                            <div key={room.id} className="p-4 border rounded mb-2 hover:bg-stone-600 cursor-pointer"
                                onClick={() => onSelect(room)}>
                                <p className="font-semibold">{room.name}</p>
                                <p>Type : {room.type}</p>
                                <p>Capacité : {room.bedCapacity} personnes</p>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default RoomSelectionModal