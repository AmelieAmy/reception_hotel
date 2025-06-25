import BasicCard from "@/components/cards/BasicCard";
import CreationCard from "@/components/cards/CreationCard";
import Header from "@/components/header/Header";
import MiniatureReservation from "@/components/reservations/MiniatureReservation";

export const Reservations = () => {
    return (
        <main className="p-10 w-full min-h-screen flex-1 text-center">
            <div className="mb-6">
                <Header>
                    <p>Nom</p>
                    <p>date darrivée</p>
                </Header>
            </div>
            <CreationCard libelle='une réservation' linkPath='/create-bedroom' />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-10">
                <BasicCard>
                    <MiniatureReservation />
                </BasicCard>
                <BasicCard>
                    <MiniatureReservation />
                </BasicCard>
            </div>
        </main>
    )
}

export default Reservations; 