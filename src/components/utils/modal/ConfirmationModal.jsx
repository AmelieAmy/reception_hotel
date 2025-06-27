import { SquareX } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

const ConfirmationModal = ({ isOpen, onClose, onConfirmation, libelle }) => {
    if (!isOpen) return null;

    const handleConfirmationClick = () => {
        onConfirmation;
        onClose;
    }

    return (
        <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-stone-500 p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                <div className="flex-1 mb-4 flex flex-row justify-between items-center text-white">
                    <h2 className="text-xl">Êtes vous sur de vouloir {libelle} ?</h2>
                    <button onClick={onClose}>
                        <SquareX className="w-6 h-6 hover:scale-125" />
                    </button>
                </div>
                <button onClick={onClose} className="space-x-2 flex flex-row justify-start items-center mt-4 text-sm text-white hover:underline">
                    <ChevronLeft className="w-5 h-5" />
                    <p>Retour</p>
                </button>
                <button onClick={handleConfirmationClick}>
                    <SquareX className="w-6 h-6 hover:scale-125" />
                    <p>Confirmer</p>
                </button>
            </div>
        </div>
    );
}

export default ConfirmationModal;