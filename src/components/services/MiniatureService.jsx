import BasicButton from '../buttons/BasicButton';
import DangerButton from '../buttons/DangerButton';
import Image from 'next/image';

const MiniatureService = () => {
  return (
    <div className='flex flex-row justify-between items-center text-dark-900'>
        <div className='px-6 py-2 flex-1 flex flex-col justify-between items-start space-y-3'>
            <div className='w-full flex flex-row justify-start items-center space-x-4'>
                <div className="w-12 h-12 overflow-hidden relative flex flex-col items-center justify-center rounded-lg drop-shadow-sm/75 space-y-2">
                    <Image
                        src="/images/chambre_double.jpg"
                        alt="chambre avec lit double bien décoré"
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                </div>
                <h2 className='text-2xl font-semibold'>Petit déjeuner continental</h2>
            </div>
            <div className=''>
                <div className='flex flex-row justify-start'>
                    <p>Type de service :</p>
                    <p className='pl-2 font-semibold'>Restauration</p>
                </div>
                <div className='flex flex-row justify-start'>
                    <p>Durée :</p>
                    <p className='pl-2 font-semibold'>60 mn</p>
                </div>
                <div className='flex flex-row justify-start'>
                    <p>Heures d'ouverture :</p>
                    <p className='pl-2 font-semibold'>Service disponible de 7 à 11h tout les jours</p>
                </div>
            </div>
            <div className='flex flex-row justify-around border border-gold-600 rounded-lg py-1 px-2'>
                <p>Petit déjeuner classique avec viennoiseries, pain, beurre, confiture, boisson chaude.</p>
            </div>
        </div>
        <div className='basis-1/4 space-y-3'>
        <div className='mb-4'>
            <p className='text-xl m-0'><span className='text-yellow-600 text-4xl mr-2'>12</span>€ / jour</p>
            <p className='mx-2 text-sm'>Inclus charges et taxes</p></div>
            <BasicButton>Modification</BasicButton>
            <DangerButton>Suppression</DangerButton>
        </div>
    </div>
  )
}

export default MiniatureService;