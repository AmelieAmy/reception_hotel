import ServiceCard from "@/components/services/ServiceCard";
import { CreationButton } from "@/components/utils/buttons/AllButtons";
import GroupedAccordion from "@/components/utils/GroupedAccordion";
import Header from "@/components/utils/header-footer/Header";
import { GET_SERVICES } from "@/utils/constants/urls/urls_api";
import { SERVICE_CREATION } from "@/utils/constants/urls/urls_front";

async function fetchServices() {
    const servicesResponse = await fetch(GET_SERVICES, { cache: 'no-store' })
    if (!servicesResponse.ok) throw new Error('Échec du chargement')
    const services = await servicesResponse.json()
    return services
}

export const Services = () => {
    return (
        <main className="p-10 w-full min-h-screen flex-1 text-center">
            <div className="mb-6">
                <Header>
                    <h1 className="text-lg">Liste des services</h1>
                    <div className="text-2xl flex flex-row justify-around items-center">
                        <p>Type</p> <p>Nom</p>
                    </div>
                </Header>
            </div>
            <div className="w-1/4">
                <CreationButton libelle='un service' linkPath={SERVICE_CREATION} />
            </div>
            <GroupedAccordion
                fetchData={fetchServices}
                groupBy={service => service.type}
                exclude={service => service.id === 1}
                ItemComponent={ServiceCard}
            />
        </main>
    )
}

export default Services; 
