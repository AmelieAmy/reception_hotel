const DangerButton = ({ setModalOpen, children }) => {
    return (
        <button 
        type="button" 
        onClick={() => setModalOpen(true)} 
        className='w-full text-center rounded-full text-white text-lg capitalize bg-red-800 py-1'>
            {children}
        </button>
    )
}

export default DangerButton;