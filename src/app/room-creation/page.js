import FormRoomModificationOrCreation from "@/components/rooms/FormRoomModificationOrCreation";
import Header from "@/components/utils/header-footer/Header";
import { GET_ROOM_TYPES } from "@/utils/constants/urls/urls_api";

const RoomCreation = async () => {
    const resultGetRoomsTypes = await fetch(GET_ROOM_TYPES);
    if (!resultGetRoomsTypes.ok) return notFound()
    const roomTypes = await resultGetRoomsTypes.json();

    return (
        <div className="p-10">
            <Header>
                <h1 className="text-lg">Création : <span className="text-2xl">Chambre</span></h1>
            </Header>
            <FormRoomModificationOrCreation roomTypes={roomTypes} creation />
        </div>
    )
}

export default RoomCreation;