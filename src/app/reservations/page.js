import Reservations from "@/components/reservations/Reservations";
import { GET_PAST_RESERVATIONS, GET_RECENT_RESERVATIONS } from "@/utils/constants/urls/urls_api";

async function fetchPastReservations() {
    const res = await fetch(GET_PAST_RESERVATIONS, { cache: 'no-store' })
    if (!res.ok) throw new Error('Échec chargement des données pour les anciennes réservations')
    return await res.json()
}

async function fetchRecentReservations() {
    const res = await fetch(GET_RECENT_RESERVATIONS, { cache: 'no-store' })
    if (!res.ok) throw new Error('Échec chargement des données pour les récentes réservations')
    return await res.json()
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