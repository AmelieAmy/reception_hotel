import { Plus } from 'lucide-react';
import Link from 'next/link';

const CreationCard = ({ libelle, linkPath }) => {
    return (
        <Link href={linkPath} className='block bg-gold-600 border border-foreground w-full sm:w-1/2 md:w-1/2 lg:w-2/5 xl:w-1/4 2xl:w-1/5 text-foreground drop-shadow-2xl/25 rounded-full p-3 mb-6'>
            <div className='flex flex-row justify-center items-center space-x-4'>
                <Plus className="w-8 h-8" />
                <p className='text-lg'>Créer {libelle} </p>
            </div>
        </Link>
    )
}

export default CreationCard;