import { Trash2 } from 'lucide-react'
import Image from 'next/image'

const ServiceMiniCard = ({ service, quantityInput, onDelete }) => {
    return (
        <div className='w-full flex flex-row justify-between items-center space-x-4'>
            {quantityInput}
            <div className='w-full px-4 py-2 bg-gold-600/50 rounded'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row justify-start items-center space-x-4'>
                        <Image
                            src="/images/dej.jpg"
                            alt="croissant, café et jus de fruit"
                            width={40}
                            height={40}
                            className='rounded-xl'
                        />
                        <p>{service?.name}</p>
                    </div>
                    <p>{service?.price?.toFixed(2)} €</p>
                </div>
            </div>
            <button type="button" onClick={() => onDelete(service)} className='px-3 py-3 text-white bg-red-800 rounded'>
                <Trash2 className="w-6 h-6" />
            </button>
        </div>
    )
}

export default ServiceMiniCard