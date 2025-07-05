import FormReservationModificationOrCreation from "@/components/reservations/FormReservationModificationOrCreation";
import Header from "@/components/utils/header-footer/Header";
import { GET_SERVICES } from "@/utils/constants/urls/urls_api";

const ReservationCreation = async () => {
    const servicesResponse = await fetch(GET_SERVICES, { cache: 'no-store' });
    if (!servicesResponse.ok) throw new Error('Échec du chargement');
    const services = await servicesResponse.json();

    return (
        <div className="p-10">
            <Header>
                <h1 className="text-lg">Création : <span className="text-2xl">Réservation</span></h1>
            </Header>
            <FormReservationModificationOrCreation services={services} creation />
        </div>
    )
}

export default ReservationCreation;