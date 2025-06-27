import FormRoomModification from '@/components/rooms/FormRoomModification';
import { GET_ROOM_BY_ID, GET_ROOM_TYPES } from '@/utils/constants/urls/urls_api';
import { notFound } from 'next/navigation';

const RoomModification = async ({ params }) => {
    const { id } = await params

    const resultGetRooms = await fetch(GET_ROOM_BY_ID(id));
    if (!resultGetRooms.ok) return notFound()
    const roomArray = await resultGetRooms.json();
    const room = roomArray[0];

    const resultGetRoomTypes = await fetch(GET_ROOM_TYPES);
    if (!resultGetRoomTypes.ok) return notFound()
    const roomTypes = await resultGetRoomTypes.json();

    return (
        <FormRoomModification room={room} roomTypes={roomTypes} />
    )
}

export default RoomModification;