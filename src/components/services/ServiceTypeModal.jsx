import { SquareX } from 'lucide-react';

const ServiceTypeModal = ({ isOpen, onClose, onSelect, serviceTypes }) => {
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
                    {serviceTypes.map((srv) => (
                        <li key={srv.id} className="border p-4 rounded hover:bg-stone-100 bg-stone-300">
                            <button
                                onClick={() => {
                                    onSelect(srv);
                                    onClose();
                                }}
                                className="flex flex-col justify-between items-start text-left space-y-1"
                            >
                                <p className="pl-4">Type : <span className="font-semibold">{srv.typeName}</span></p>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ServiceTypeModal;