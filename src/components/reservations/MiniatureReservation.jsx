import React from 'react';
import BasicButton from '../buttons/BasicButton';
import DangerButton from '../buttons/DangerButton';
import { Cake } from 'lucide-react'

const MiniatureReservation = () => {
  return (
    <div className='flex flex-row justify-between items-center text-dark-900'>
        <div className="basis-1/4 2xl:basis-2/7 w-full h-full overflow-hidden flex flex-col items-center justify-center rounded-xl drop-shadow-md space-y-2">
            <img
                src="/images/chambre_double.jpg"
                alt="chambre avec lit double bien décoré"
                className="w-full h-auto object-cover rounded-xl drop-shadow-lg/25"
            />
            <p className='text-lg font-semibold'>Rose</p>
        </div>
        <div className='px-6 py-2 flex-1'>
            <h2 className='text-2xl font-semibold'>PINPIN Lapin</h2>
            <div className='flex flex-row justify-start mb-4'>
                <Cake className="w-5 h-5"/>
                <p className='pl-2'>12/04/2024</p>
            </div>
            <div className='flex flex-row justify-start items-center space-x-2 mb-6'>            
                <img
                    src="/images/dej.jpg"
                    alt="chambre par defaut"
                    className="w-10 h-10 rounded-lg drop-shadow-lg/25"
                />            
                <img
                    src="/images/dej.jpg"
                    alt="chambre par defaut"
                    className="w-10 h-10 rounded-lg drop-shadow-lg/25"
                />
                <img
                    src="/images/dej.jpg"
                    alt="chambre par defaut"
                    className="w-10 h-10 rounded-lg drop-shadow-lg/25"
                />
                <p className='self-end'>... Voir tout</p>
            </div>
            <div className='flex flex-row justify-around border border-gold-600 rounded-xl mt-2 p-1'>
                <div className='flex flex-col justify-between items-center'>
                    <p className='text-yellow-600'>Arrivée</p>
                    <p className='text-xl font-semibold'>12/04/2024</p>
                </div>
                <div className='flex flex-col justify-between items-center'>
                    <p className='text-yellow-600'>Départ</p>
                    <p className='text-xl font-semibold'>12/04/2024</p>
                </div>
            </div>
        </div>
        <div className='basis-1/4 space-y-3'>
        <div className='mb-4'>
            <p className='text-xl m-0'><span className='text-yellow-600 text-4xl mr-2'>150</span>€</p>
            <p className='mx-2 text-sm'>Inclus charges et taxes</p></div>
            <BasicButton linkPath={`/bedrooms`}>Check in</BasicButton>
            <BasicButton linkPath={`/bedrooms`}>Modification</BasicButton>
            <DangerButton>Annulation</DangerButton>
        </div>
    </div>
  )
}

export default MiniatureReservation;