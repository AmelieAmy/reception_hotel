import Rooms from "@/components/rooms/Rooms";
import { GET_ROOMS } from "@/utils/constants/urls/urls_api";

async function fetchRooms() {
    const res = await fetch(GET_ROOMS, { cache: 'no-store' })
    if (!res.ok) throw new Error('Échec du chargement')
    const data = await res.json()
    return data
}

export const roomsPage = async () => {
    const roomsData = await fetchRooms();

    return (
        <main className="p-10 w-full min-h-screen flex-1 text-center">
            <Rooms roomsData={roomsData} />
        </main>
    )
}

export default roomsPage; 