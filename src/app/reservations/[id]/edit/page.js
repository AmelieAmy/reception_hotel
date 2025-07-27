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
    const servicesResponse = await fetch(GET_SERVICES, { cache: 'no-store' });
    if (!servicesResponse.ok) throw new Error('Échec du chargement');
    const services = await servicesResponse.json();

    return (
        <div className="relative">
            <div className="p-10">
                <Header>
                    <h1 className="text-lg">Réservation de : <span className="text-2xl">{resa.lastname} {resa.firstname}</span></h1>
                </Header>
            </div>
            <FormReservationModificationOrCreation services={services} reservation={resa} />
        </div>
    )
}

export default ReservationModification;