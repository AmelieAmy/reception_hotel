import { ChevronLeft, Plus, SquarePen } from "lucide-react"
import Link from "next/link"

export function ValidationButton({ libelle }) {
    return (
        <button type="submit" className="w-full bg-teal-700 text-white rounded px-4 py-2 hover:bg-teal-600">
            {libelle}
        </button>
    )
}

export function SelectionButtonToModal({ wfull, onClick, disabled, libelle, icon }) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`${wfull ? 'w-full bg-gold-600/80 hover:bg-gold-600' : 'w-2/3 bg-gold-600 hover:bg-yellow-600'} text-center text-white py-2 rounded`}>
            <div className='flex flex-row justify-center items-center space-x-4'>
                {icon}
                <p>{libelle}</p>
            </div>
        </button>
    )
}

export function SelectionButtonToPage({ libelle, linkPath }) {
    return (
        <Link
            href={linkPath}
            className="w-full text-center bg-gold-600/80 hover:bg-gold-600 text-white py-2 rounded">
            <div className='flex flex-row justify-center items-center space-x-4'>
                <SquarePen className="w-6 h-6" />
                <p>{libelle}</p>
            </div>
        </Link>
    )
}

export function CreationButton({ libelle, linkPath }) {
    return (
        <Link href={linkPath} className='block bg-gold-600 border border-foreground text-foreground drop-shadow-2xl/25 rounded-full py-2 px-6 mb-6'>
            <div className='flex flex-row justify-center items-center space-x-4'>
                <Plus className="w-8 h-8" />
                <p className='text-lg'>Créer {libelle} </p>
            </div>
        </Link>
    )
}

export function BackButton({ router }) {
    const handleBack = () => {
        const previousUrl = sessionStorage.getItem('previousCleanUrl')
        if (previousUrl) {
            sessionStorage.removeItem('previousCleanUrl')
            router.replace(previousUrl)
        } else {
            router.back()
        }
    }
    return (
        <button
            onClick={handleBack}
            type="button"
            className="w-1/3 flex flex-row justify-start items-center space-x-2 hover:underline my-6 ml-6">
            <ChevronLeft className="w-5 h-5" />
            <p>Retour</p>
        </button>
    )
}

export function DangerButton({ setModalOpen, children }) {
    return (
        <button
            type="button"
            onClick={() => setModalOpen(true)}
            className='w-full text-center rounded-xl text-red-800 hover:text-white font-medium text-lg capitalize border-2 border-red-700 hover:bg-red-800 py-1'>
            {children}
        </button>
    )
}

export function BasicButton({ linkPath, children }) {
    return (
        <Link href={linkPath} className='block text-center rounded-xl text-white text-xl capitalize py-2 bg-gold-600 hover:bg-gold-500'>
            {children}
        </Link>
    )
}