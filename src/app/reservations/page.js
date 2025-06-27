'use client'
import ReservationCard from "@/components/reservations/ReservationCard";
import BasicCard from "@/components/utils/cards/BasicCard";
import Header from "@/components/utils/header-footer/Header";

export const Reservations = () => {
    return (
        <main className="p-10 w-full min-h-screen flex-1 text-center">
            <div className="mb-6">
                <Header>
                    <p>Nom</p>
                    <p>date darrivée</p>
                </Header>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-10">
                <BasicCard>
                    <ReservationCard />
                </BasicCard>
                <BasicCard>
                    <ReservationCard />
                </BasicCard>
            </div>
        </main>
    )
}

export default Reservations; 