'use client'
import Image from 'next/image';

const ServiceCardForSelection = ({ service }) => {
    return (
        <div className='px-6 flex flex-row justify-between items-center text-dark-900 space-x-6'>
            <div className='py-2 flex-1 flex flex-col justify-around items-start space-y-3'>
                <div className='w-full flex flex-row justify-start items-center space-x-4'>
                    <div className="w-12 h-12 overflow-hidden relative flex flex-col items-center justify-center rounded-lg drop-shadow-sm/75 space-y-2">
                        <Image
                            src="/images/chambre_double.jpg"
                            alt="chambre avec lit double bien décoré"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                        />
                    </div>
                    <h2 className='text-2xl font-semibold'>{service.name}</h2>
                </div>
                <div className='flex flex-row justify-start flex-wrap space-x-2'>
                    <p>Heures d'ouverture :</p>
                    <p className='font-semibold'>{service.openingHour}</p>
                </div>
                <div className='h-14 flex flex-row justify-around items-center border border-gold-600 rounded-lg py-1 px-2'>
                    <p>{service.description}</p>
                </div>
            </div>
            <div className='space-y-3'>
                <div className='mb-4'>
                    <p className='text-xl m-0'><span className='text-yellow-600 text-4xl mr-2'>{service.price}</span>€ / jour</p>
                    <p className='text-sm'>Inclus charges et taxes</p>
                </div>
                <div className='flex flex-row justify-start flex-wrap space-x-2'>
                    <p>Type de service :</p>
                    <p className='font-semibold'>{service.type}</p>
                </div>
                <div className='flex flex-row justify-start flex-wrap space-x-2'>
                    <p>Durée :</p>
                    <p className='font-semibold'>{service.duration} mn</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCardForSelection;