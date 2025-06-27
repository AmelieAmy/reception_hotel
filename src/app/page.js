import NavigationCard from '@/components/home/NavigationCard';
import Header from '@/components/utils/header-footer/Header';
import { RESERVATIONS, ROOMS, SERVICES } from '@/utils/constants/urls/urls_front';

const Home = () => {
    return (
        <main className="w-full min-h-screen flex flex-col justify-between p-10">
            <div className="w-full mb-6">
                <Header>
                    Bienvenue Lapino !
                </Header>
            </div>
            <div className="w-8/10 m-auto pb-10 flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 space-x-0 lg:space-x-10 xl:space-x-16">
                <NavigationCard
                    linkPath={RESERVATIONS}
                    imagePath='/images/calendrier.jpg'
                    altImage="calendrier avec un crayon"
                    sectionTitle='Réservations'
                />
                <NavigationCard
                    linkPath={ROOMS}
                    imagePath='/images/bedroom.jpg'
                    altImage="illustration style arrondi d'une chambre lit double"
                    sectionTitle='Chambres'
                />
                <NavigationCard
                    linkPath={SERVICES}
                    imagePath='/images/services.jpg'
                    altImage="homme entouré de bulle avec des images de service"
                    sectionTitle='Services'
                />
            </div>
        </main>
    )
}

export default Home;