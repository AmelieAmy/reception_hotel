import FormServiceModification from "@/components/services/FormServiceModification";
import { GET_SERVICE_TYPES, GET_SERVICES_BY_ID } from "@/utils/constants/urls/urls_api";
import { notFound } from 'next/navigation';

const ServiceModification = async ({ params }) => {
    const { id } = await params

    const resultGetServices = await fetch(GET_SERVICES_BY_ID(id));
    if (!resultGetServices.ok) return notFound()
    const serviceArray = await resultGetServices.json();
    const service = serviceArray[0];

    const resultGetServicesTypes = await fetch(GET_SERVICE_TYPES);
    if (!resultGetServicesTypes.ok) return notFound()
    const serviceTypes = await resultGetServicesTypes.json();

    return (
        <FormServiceModification service={service} serviceTypes={serviceTypes} />
    )
}

export default ServiceModification;