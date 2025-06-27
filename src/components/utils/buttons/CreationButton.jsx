import { Plus } from 'lucide-react';
import Link from 'next/link';

const CreationButton = ({ libelle, linkPath }) => {
    return (
        <Link href={linkPath} className='block bg-gold-600 border border-foreground text-foreground drop-shadow-2xl/25 rounded-full py-2 px-6 mb-6'>
            <div className='flex flex-row justify-center items-center space-x-4'>
                <Plus className="w-8 h-8" />
                <p className='text-lg'>Créer {libelle} </p>
            </div>
        </Link>
    )
}

export default CreationButton;