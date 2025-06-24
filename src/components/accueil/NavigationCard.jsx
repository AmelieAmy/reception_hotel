import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavigationCard = ({linkPath, imagePath, altImage, sectionTitle}) => {
    return (
        <Link href={linkPath}
            className='basis-1/3 flex flex-col justify-center items-center'>
            <Image
                src={imagePath}
                alt={altImage}
                width={300}
                height={300}
                className="border-1 border-neutral-200 rounded-full"
            />
            <p className='text-2xl mt-4'>{sectionTitle}</p>
        </Link>
    )
}

export default NavigationCard;