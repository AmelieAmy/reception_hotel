import Image from 'next/image';
import Link from 'next/link';

const Header = ({ children }) => {
    return (
        <div className='bg-stone-300 flex-1 w-full rounded-xl m-auto drop-shadow-2xl/25 text-left flex flex-row justify-start'>
            <Link href='/' className='basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/7 2xl:basis-1/8 bg-neutral-800 py-4 px-4 rounded-l-xl'>
                <Image
                    src="/images/logo.jpg"
                    alt="chambre par defaut"
                    width={472}
                    height={132}
                />
            </Link>
            <div className='basis-4/6 flex justify-center items-center'>
                <div className='text-2xl text-dark-900 pl-6'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Header;