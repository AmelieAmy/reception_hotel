const Separator = ({ libelle, subSeparator }) => {
    return (
        <div className={`w-full text-yellow-800 flex flex-row justify-start items-center ${subSeparator ? 'mt-1 text-sm space-x-3' : 'mt-6 space-x-4'} mb-2`}>
            <hr className={`${subSeparator ? 'w-4 border-yellow-800/50' : 'flex-1 my-4 border-yellow-800'} border-t`} />
            <p>{ libelle }</p>
            <hr className={`${subSeparator ? 'flex-1 border-yellow-800/50' : 'flex-1 my-4 border-yellow-800'} border-t`} />
        </div>
    )
}

export default Separator;