import Image from 'next/image'

const RoomMiniCard = ({ room, onSelect }) => {
    return (
        <div
        onClick={() => onSelect(room)} 
        className='w-full flex flex-col sm:flex-row justify-between items-center px-4  py-4 rounded-xl bg-stone-300 text-dark-900'
        >
            <Image
                src="/images/chambre_double.jpg"
                alt="chambre avec lit double bien décoré"
                width={220}
                height={140}
                className='rounded-xl'
            />
            <div className='flex flex-col justify-between items-start pl-6'>
                <div className='w-full flex flex-row justify-between items-start'>
                    <div className='flex-1 flex flex-col justify-between items-start'>
                        <h2 className='text-2xl font-semibold pb-1'>{room.name}</h2>
                        <div className='flex flex-row justify-start'>
                            <p>Capacité lit:</p>
                            <p className='pl-2 font-semibold'>{room.bedCapacity}</p>
                        </div>
                        <div className='flex flex-row justify-start'>
                            <p>Numéro:</p>
                            <p className='pl-2 font-semibold'>{room.number}</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between items-start pl-6'>
                        <div className='mb-2'>
                            <p className='text-xl m-0'><span className='text-yellow-600 text-4xl mr-2'>{room.price}</span>€</p>
                        </div>
                        <div className='flex flex-row justify-start'>
                            <p>Type:</p>
                            <p className='pl-2 font-semibold'>{room.type}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-around border border-gold-600 rounded-lg py-1 px-2 mt-2'>
                    <p>{room.description}</p>
                </div>
            </div>
        </div>
    )
}

export default RoomMiniCard