import FormReservationModification from '@/components/reservations/FormReservationModification';
import { GET_RESERVATION_BY_ID } from '@/utils/constants/urls/urls_api';
import { notFound } from 'next/navigation';

const ReservationModification = async ({ params }) => {
    const { id } = await params

    const resultGetReservation = await fetch(GET_RESERVATION_BY_ID(id));
    if (!resultGetReservation.ok) return notFound()
    const reservationArray = await resultGetReservation.json();
    const resa = reservationArray[0];

    return (
        <FormReservationModification reservation={resa} />
    )
}

export default ReservationModification;