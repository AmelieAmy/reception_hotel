import ReservationList from "@/components/reservations/ReservationList";
import Header from "@/components/utils/header-footer/Header";
import { GET_PAST_RESERVATIONS, GET_RECENT_RESERVATIONS } from "@/utils/constants/urls/urls_api";

async function fetchPastReservations() {
    const res = await fetch(GET_PAST_RESERVATIONS, { cache: 'no-store' })
    if (!res.ok) throw new Error('Échec chargement des données pour les anciennes réservations')
    const data = await res.json()
    return data
}
async function fetchRecentReservations() {
    const res = await fetch(GET_RECENT_RESERVATIONS, { cache: 'no-store' })
    if (!res.ok) throw new Error('Échec chargement des données pour les récentes réservations')
    const data = await res.json()
    return data
}

const Reservations = async () => {
    const pastReservationsData = await fetchPastReservations();
    const recentReservationsData = await fetchRecentReservations();

    return (
        <main className="p-10 w-full min-h-screen flex-1 text-center">
            <div className="mb-6">
                <Header>
                    <h1 className="text-xl">Liste des réservations</h1>
                    <div className="text-2xl flex flex-row justify-around items-center">
                        <p>Nom</p> <p>date darrivée</p>
                    </div>
                </Header>
            </div>
            <ReservationList
                pastReservations={pastReservationsData}
                recentReservations={recentReservationsData}
            />
        </main>
    )
}

export default Reservations; 