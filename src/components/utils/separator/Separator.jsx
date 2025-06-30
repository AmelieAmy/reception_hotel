const Separator = ({ libelle }) => {
    return (
        <div className="w-full text-yellow-800 flex flex-row justify-between items-center space-x-4">
            <hr className="flex-1 my-4 border-t border-yellow-800" />
            <p>{ libelle }</p>
            <hr className="flex-1 my-4 border-t border-yellow-800" />
        </div>
    )
}

export default Separator;