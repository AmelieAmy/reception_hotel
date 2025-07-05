import FormRoomTypeCreation from "@/components/rooms/FormRoomTypeCreation";
import Header from "@/components/utils/header-footer/Header";

const RoomTypeCreation = () => {
    return (
        <div className="p-10">
            <Header>
                <h1 className="text-lg">Création : <span className="text-2xl">Type de chambre</span></h1>
            </Header>
            <FormRoomTypeCreation />
        </div>
    )
}

export default RoomTypeCreation;
