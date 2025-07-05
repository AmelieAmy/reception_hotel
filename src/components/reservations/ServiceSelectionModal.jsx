'use client'
import { SquareX } from 'lucide-react';
import BasicCard from '../utils/cards/BasicCard';
import ServiceCardForSelection from './ServiceCardForSelection';
import { useForm } from 'react-hook-form';

const ServiceSelectionModal = ({ isOpen, onClose, onSubmit, services }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}>
            <div className="bg-stone-500 pt-8 px-10 rounded-lg max-w-6xl w-full max-h-[80vh] overflow-y-auto">
                <div className="flex-1 mb-10 flex flex-row justify-between items-center text-white">
                    <h2 className="text-xl">Sélectionnez un ou plusieurs services</h2>
                    <button onClick={onClose}>
                        <SquareX className="w-6 h-6 hover:scale-125" />
                    </button>
                </div>
                <form
                    onSubmit={
                        handleSubmit((data) => {
                            const selected = services.filter((s) =>
                                data.selectedServices?.includes(String(s.id))
                            );
                            onSubmit(selected);
                            onClose();
                        })}
                    className="w-full px-8"
                >
                    <div className="space-y-4">
                        {services.filter(serv => serv.id !== 1).map((service) => (
                            <div key={service.id} className="flex flex-row justify-between items-center space-x-6">
                                <input
                                    className='w-8 h-8 rounded'
                                    type="checkbox"
                                    id={`service-${service.id}`}
                                    value={service.id}
                                    {...register('selectedServices')}
                                />
                                <BasicCard>
                                    <ServiceCardForSelection
                                        service={service}
                                    />
                                </BasicCard>
                            </div>
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="fixed bottom-4 left-1/2 -translate-x-1/2 px-10 py-4 text-xl rounded bg-teal-600 shadow-lg z-50"
                    >
                        Valider
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ServiceSelectionModal;