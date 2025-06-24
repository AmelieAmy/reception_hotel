import BasicCard from "@/components/cards/BasicCard";
import CreationCard from "@/components/cards/CreationCard";
import FiltersCard from "@/components/cards/FiltersCard";
import MiniatureService from "@/components/services/MiniatureService";

export const Services = () => {
  return (
    <main className="p-10 w-full min-h-screen flex-1 text-center">
      <div className="mb-6">
        <FiltersCard>
          <p>Type</p>
          <p>Nom</p>
        </FiltersCard>
      </div>
      <CreationCard libelle='un service' />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-10">
        <BasicCard>
          <MiniatureService />
        </BasicCard>
      </div>
    </main>
  )
}

export default Services; 