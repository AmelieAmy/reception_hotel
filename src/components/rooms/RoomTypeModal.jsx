import { SquareX } from 'lucide-react';

const RoomTypeModal = ({ isOpen, onClose, onSelect, roomTypes }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-stone-500 p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                <div className="flex-1 mb-4 flex flex-row justify-between items-center text-white">
                    <h2 className="text-xl">Sélectionnez un type de chambre</h2>
                    <button onClick={onClose}>
                        <SquareX className="w-6 h-6 hover:scale-125" />
                    </button>
                </div>
                <ul className="flex flex-col justify-between items-center space-y-4">
                    {roomTypes.map((type) => (
                        <li key={type.id} className="border p-4 rounded hover:bg-stone-100 bg-stone-300">
                            <button
                                onClick={() => {
                                    onSelect(type);
                                    onClose();
                                }}
                                className="flex flex-col justify-between items-start text-left space-y-1"
                            >
                                <p className="pl-4">Type : <span className="font-semibold">{type.libelle}</span></p>
                                <p className="pl-4">Capacité lit : <span className="font-semibold">{type.bedCapacity}</span></p>
                                <p className="indent-4">Description : <span className="font-semibold">{type.description}</span></p>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RoomTypeModal;