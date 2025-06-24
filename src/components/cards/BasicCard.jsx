const BasicCard = ({ children }) => {
    return (
        <div className='bg-stone-300 p-4 flex-1 w-full rounded-xl m-auto drop-shadow-2xl/25 text-left'>
            {children}
        </div>
    )
}

export default BasicCard;