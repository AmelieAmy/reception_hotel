import FiltersCard from '@/components/cards/FiltersCard';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
    return (
        <main className="p-10 w-full min-h-screen flex flex-col justify-between lex-1 text-center">
            <div className="w-full mb-6">
                <FiltersCard>
                    Bienvenue Lapino !
                </FiltersCard>
            </div>
            <p className='text-xl mt-2 mb-8 lg:mt-10 lg:mb-0 flex flex-row justify-center items-center'>Dans quelle catégorie souhaites-tu naviguer ?</p>
            <div className="w-8/10 m-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 space-x-0 lg:space-x-10 xl:space-x-16">
                <Link href='/reservations'
                    className='basis-1/3 flex flex-col justify-center items-center'>
                    <Image
                        src="/images/calendrier.jpg"
                        alt="chambre par defaut"
                        width={300}
                        height={300}
                        className="border-2 border-neutral-200 rounded-full"
                    />
                    <p className='text-2xl mt-4 font-medium'>Réservations</p>
                </Link>
                <Link href='/chambres'
                    className='basis-1/3 flex flex-col justify-center items-center'>
                    <Image
                        src="/images/bedroom.jpg"
                        alt="chambre par defaut"
                        width={300}
                        height={300}
                        className="border-2 border-neutral-200 rounded-full"
                    />
                    <p className='text-2xl mt-4 font-medium'>Chambres</p>
                </Link>
                <Link href='/services'
                    className='basis-1/3 flex flex-col justify-center items-center'>
                    <Image
                        src="/images/services.jpg"
                        alt="chambre par defaut"
                        width={300}
                        height={300}
                        className="border-2 border-neutral-200 rounded-full"
                    />
                    <p className='text-2xl mt-4 font-medium'>Services</p>
                </Link>
            </div>
        </main>
    )
}

export default Home;