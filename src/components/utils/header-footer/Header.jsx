import { HOME } from '@/utils/constants/urls/urls_front';
import Image from 'next/image';
import Link from 'next/link';

const Header = ({ children }) => {
    return (
        <div className='bg-stone-300 flex-1 w-full rounded-xl m-auto drop-shadow-2xl/25 text-left flex flex-row justify-start'>
            <Link href={HOME} className='w-58 bg-neutral-800 py-4 px-4 rounded-l-xl'>
                <Image
                    priority
                    src="/images/logo.jpg"
                    alt="chambre par defaut"
                    width={472}
                    height={132}
                />
            </Link>
            <div className='basis-4/6 flex justify-center items-center'>
                <div className='w-full text-center text-2xl text-dark-900 pl-6'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Header;