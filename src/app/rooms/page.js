import RoomCard from '@/components/rooms/RoomCard';
import CreationCard from "@/components/utils/cards/CreationCard";
import GroupedAccordion from "@/components/utils/GroupedAccordion";
import Header from "@/components/utils/header-footer/Header";
import { GET_ROOMS } from "@/utils/constants/urls/urls_api";
import { ROOM_CREATION, ROOM_TYPE_CREATION } from "@/utils/constants/urls/urls_front";

async function fetchRooms() {
    const res = await fetch(GET_ROOMS, { cache: 'no-store' })
    if (!res.ok) throw new Error('Échec du chargement')
    const data = await res.json()
    return data
}

export const rooms = async () => {
    return (
        <main className="p-10 w-full min-h-screen flex-1 text-center">
            <div className="mb-6">
                <Header>
                    <p>Nom</p> <p>numero</p>
                </Header>
            </div>
            <div className="w-full flex flex-row justify-start items-center space-x-8">
                <CreationCard libelle='une chambre' linkPath={ROOM_CREATION} />
                <CreationCard libelle='un type de chambre' linkPath={ROOM_TYPE_CREATION} />
            </div>
            <GroupedAccordion
                fetchData={fetchRooms}
                groupBy={room => room.type}
                ItemComponent={RoomCard}
            />
        </main>
    )
}

export default rooms; 