import FormRoomModificationOrCreation from '@/components/rooms/FormRoomModificationOrCreation';
import Header from '@/components/utils/header-footer/Header';
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
        <div className="p-10">
            <Header>
                <h1 className="text-lg">Modification de la chambre : <span className="text-2xl">{room.name}</span></h1>
            </Header>
            <FormRoomModificationOrCreation room={room} roomTypes={roomTypes} />
        </div>
    )
}

export default RoomModification;