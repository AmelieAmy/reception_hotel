import { serviceTypeConstants } from '@/utils/constants/serviceTypeConstants';
import { SquareX } from 'lucide-react'; 
import { ChevronLeft } from 'lucide-react';

const ServiceTypeModal = ({ isOpen, onClose, onSelect }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-stone-500 p-6 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
                <div className="flex-1 mb-4 flex flex-row justify-between items-center text-white">
                    <h2 className="text-xl">Sélectionnez un type de service</h2>
                    <button onClick={onClose}>
                        <SquareX className="w-6 h-6 hover:scale-125" />
                    </button>
                </div>
                <ul className="flex flex-col justify-between items-center space-y-4">
                    {serviceTypeConstants.map((srv) => (
                        <li key={srv.id} className="border p-4 rounded hover:bg-stone-100 bg-stone-300">
                            <button
                                onClick={() => {
                                    onSelect(srv);
                                    onClose();
                                }}
                                className="flex flex-col justify-between items-start text-left space-y-1"
                            >
                                <p className="pl-4">Type : <span className="font-semibold">{srv.libelle}</span></p>
                            </button>
                        </li>
                    ))}
                </ul>
                <button onClick={onClose} className="space-x-2 flex flex-row justify-start items-center mt-4 text-sm text-white hover:underline">
                    <ChevronLeft className="w-5 h-5" />
                    <p>Retour</p>
                </button>
            </div>
        </div>
    );
}

export default ServiceTypeModal;