import BasicCard from "@/components/cards/BasicCard";
import CreationCard from "@/components/cards/CreationCard";
import Header from "@/components/header/Header";
import ServiceCard from "@/components/services/ServiceCard";

export const Services = () => {
  return (
    <main className="p-10 w-full min-h-screen flex-1 text-center">
      <div className="mb-6">
        <Header>
          <p>Type</p>
          <p>Nom</p>
        </Header>
      </div>
      <CreationCard libelle='un service' linkPath='/create-service' />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-10">
        <BasicCard>
          <ServiceCard />
        </BasicCard>
      </div>
    </main>
  )
}

export default Services; 