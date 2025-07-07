import Reservations from "@/components/reservations/Reservations";
import { GET_PAST_RESERVATIONS, GET_RECENT_RESERVATIONS } from "@/utils/constants/urls/urls_api";

async function fetchPastReservations() {
    const res = await fetch(GET_PAST_RESERVATIONS, { cache: 'no-store' })
    if (!res.ok) throw new Error('Échec chargement des données pour les anciennes réservations')
    const data = await res.json()

    return data.map(reservation => ({
        ...reservation,
        services: JSON.parse(reservation.services || '[]'),
        payment: JSON.parse(reservation.payment || '[]'),
    }));
}

async function fetchRecentReservations() {
    const res = await fetch(GET_RECENT_RESERVATIONS, { cache: 'no-store' })
    if (!res.ok) throw new Error('Échec chargement des données pour les récentes réservations')
    const data = await res.json()

    return data.map(reservation => ({
        ...reservation,
        services: JSON.parse(reservation.services || '[]'),
        payment: JSON.parse(reservation.payment || '[]'),
    }));
}

const ReservationsPage = async () => {
    const pastReservationsData = await fetchPastReservations();
    const recentReservationsData = await fetchRecentReservations();

    return (
        <main className="p-10 w-full min-h-screen flex-1 text-center">
            <Reservations pastReservationsData={pastReservationsData} recentReservationsData={recentReservationsData} />
        </main>
    )
}

export default ReservationsPage; 