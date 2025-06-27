import FormRoomModification from '@/components/rooms/FormRoomModification';
import { GET_ROOM_BY_ID } from '@/utils/constants/urls/urls_api';
import { notFound } from 'next/navigation';

const RoomModification = async ({ params }) => {
    const roomId = params.id;

    const res = await fetch(GET_ROOM_BY_ID(roomId));
    if (!res.ok) return notFound()
    const roomRes = await res.json();
    const room = roomRes[0];

    return (
        <FormRoomModification room={room} />
    )
}

export default RoomModification;