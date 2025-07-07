import Services from "@/components/services/Services";
import { GET_SERVICES } from "@/utils/constants/urls/urls_api";

async function fetchServices() {
    const servicesResponse = await fetch(GET_SERVICES, { cache: 'no-store' })
    if (!servicesResponse.ok) throw new Error('Échec du chargement')
    const services = await servicesResponse.json()
    return services
}

export const ServicesPage = async () => {
    const servicesData = await fetchServices();

    return (
        <main className="p-10 w-full min-h-screen flex-1 text-center">
            <Services servicesData={servicesData} />
        </main>
    )
}

export default ServicesPage; 
