import BasicButton from '../buttons/BasicButton';
import DangerButton from '../buttons/DangerButton';
import Image from 'next/image';

const MiniatureChambre = () => {
  return (
    <div className='flex flex-row justify-between items-center text-dark-900'>
        <div className="basis-1/4 2xl:basis-2/7 w-56 h-48 overflow-hidden relative flex flex-col items-center justify-center rounded-xl drop-shadow-md/25 space-y-2">
            <Image
                src="/images/chambre_double.jpg"
                alt="chambre avec lit double bien décoré"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
        </div>
        <div className='px-6 py-2 flex-1 flex flex-col justify-between items-start space-y-3'>
            <h2 className='text-2xl font-semibold'>Saphire</h2>
            <div className=''>
                <div className='flex flex-row justify-start'>
                    <p>Type de chambre :</p>
                    <p className='pl-2 font-semibold'>Double</p>
                </div>
                <div className='flex flex-row justify-start'>
                    <p>Capacité de couchage :</p>
                    <p className='pl-2 font-semibold'>2 places</p>
                </div>
                <div className='flex flex-row justify-start'>
                    <p>Numéro :</p>
                    <p className='pl-2 font-semibold'>203</p>
                </div>
            </div>
            <div className='flex flex-row justify-around border border-gold-600 rounded-lg py-1 px-2'>
                <p>Chambre avec un lit double ou deux lits simples, pour 1 à 2 personnes.</p>
            </div>
        </div>
        <div className='basis-1/4 space-y-3'>
        <div className='mb-4'>
            <p className='text-xl m-0'><span className='text-yellow-600 text-4xl mr-2'>120</span>€</p>
            <p className='mx-2 text-sm'>Inclus charges et taxes</p></div>
            <BasicButton>Modification</BasicButton>
            <DangerButton>Suppression</DangerButton>
        </div>
    </div>
  )
}

export default MiniatureChambre;