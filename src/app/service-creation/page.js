import FormServiceModification from "@/components/services/FormServiceModificationOrCreation";
import Header from "@/components/utils/header-footer/Header";
import { GET_SERVICE_TYPES } from "@/utils/constants/urls/urls_api";

const RoomCreation = async () => {
    const resultGetServicesTypes = await fetch(GET_SERVICE_TYPES);
    if (!resultGetServicesTypes.ok) return notFound()
    const serviceTypes = await resultGetServicesTypes.json();

    return (
        <div className="p-10">
            <Header>
                <h1 className="text-lg">Création : <span className="text-2xl">Service</span></h1>
            </Header>
            <FormServiceModification serviceTypes={serviceTypes} creation />
        </div>
    )
}

export default RoomCreation;