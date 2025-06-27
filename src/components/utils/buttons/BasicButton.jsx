import Link from 'next/link';

const BasicButton = ({ linkPath, children }) => {
    return (
        <Link href={linkPath} className='block text-center rounded-full text-white text-xl capitalize bg-gold-600 py-2'>
            {children}
        </Link>
    )
}

export default BasicButton;