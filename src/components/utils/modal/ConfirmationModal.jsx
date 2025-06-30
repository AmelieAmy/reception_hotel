import { SquareX } from 'lucide-react';

const ConfirmationModal = ({ isOpen, onClose, onConfirmation, libelle }) => {
    if (!isOpen) return null;

    const handleConfirmationClick = () => {
        onConfirmation;
        onClose;
    }

    return (
        <div className="fixed inset-0 bg-stone-800/80 flex justify-center items-center z-50">
            <div className="bg-stone-300 p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                <div className="flex-1 mb-6 flex flex-row justify-between items-center text-dark-900">
                    <h2 className="text-xl">Êtes vous sur de vouloir {libelle} ?</h2>
                    <button onClick={onClose}>
                        <SquareX className="w-6 h-6 hover:scale-125" />
                    </button>
                </div>
                <button type="submit" className="w-1/2 bg-red-800 text-white rounded px-4 py-2 hover:bg-red-700">
                    Supprimer
                </button>
            </div>
        </div>
    );
}

export default ConfirmationModal;