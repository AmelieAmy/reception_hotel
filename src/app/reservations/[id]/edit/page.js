import FormReservationModificationOrCreation from '@/components/reservations/FormReservationModificationOrCreation';
import Header from '@/components/utils/header-footer/Header';
import { GET_RESERVATION_BY_ID, GET_SERVICES } from '@/utils/constants/urls/urls_api';
import { notFound } from 'next/navigation';

const ReservationModification = async ({ params }) => {
    const { id } = await params

    const resultGetReservation = await fetch(GET_RESERVATION_BY_ID(id));
    if (!resultGetReservation.ok) return notFound()
    const reservationArray = await resultGetReservation.json();
    const resa = reservationArray[0];
    let parsedServices = [];
    try {
        parsedServices = JSON.parse(resa.services || '[]');
    } catch {
        parsedServices = [];
    }
    let parsedPayment = [];
    try {
        parsedPayment = JSON.parse(resa.payment || '[]');
    } catch {
        parsedPayment = [];
    }
    const formattedResa = {
        ...resa,
        services: parsedServices,
        payment: parsedPayment,
    };

    const servicesResponse = await fetch(GET_SERVICES, { cache: 'no-store' });
    if (!servicesResponse.ok) throw new Error('Échec du chargement');
    const services = await servicesResponse.json();

    return (
        <div className="p-10">
            <Header>
                <h1 className="text-lg">Réservation de : <span className="text-2xl">{formattedResa.lastname} {formattedResa.firstname}</span></h1>
            </Header>
            <FormReservationModificationOrCreation services={services} reservation={formattedResa} />
        </div>
    )
}

export default ReservationModification;