import FormServiceModificationOrCreation from "@/components/services/FormServiceModificationOrCreation";
import Header from "@/components/utils/header-footer/Header";
import { GET_SERVICE_BY_ID, GET_SERVICE_TYPES } from "@/utils/constants/urls/urls_api";
import { notFound } from 'next/navigation';

const ServiceModification = async ({ params }) => {
    const { id } = await params

    const resultGetServices = await fetch(GET_SERVICE_BY_ID(id));
    if (!resultGetServices.ok) return notFound()
    const serviceArray = await resultGetServices.json();
    const service = serviceArray[0];

    const resultGetServicesTypes = await fetch(GET_SERVICE_TYPES);
    if (!resultGetServicesTypes.ok) return notFound()
    const serviceTypes = await resultGetServicesTypes.json();

    return (
        <div className="p-10">
            <Header>
                <h1 className="text-lg">Modification du service : <span className="text-2xl">{service.name}</span></h1>
            </Header>
            <FormServiceModificationOrCreation service={service} serviceTypes={serviceTypes} />
        </div>
    )
}

export default ServiceModification;