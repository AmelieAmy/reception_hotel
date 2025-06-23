import BasicCard from "@/components/cards/BasicCard";
import FiltersCard from "@/components/cards/FiltersCard";
import MiniatureReservation from "@/components/reservations/MiniatureReservation";

export const Reservations = () => {
  return (
    <main className="p-10 w-full min-h-screen flex-1 text-center">
      <div className="mb-6">
        <FiltersCard>
        </FiltersCard>
      </div>
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