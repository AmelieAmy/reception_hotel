'use client'
import { SERVICE_CREATION } from "@/utils/constants/urls/urls_front"
import { CreationButton } from "../utils/buttons/AllButtons"
import GroupedAccordion from "../utils/GroupedAccordion"
import Header from "../utils/header-footer/Header"
import ServiceCard from "./ServiceCard"
import { useEffect, useState } from "react"
import { Search } from "lucide-react"

const Services = ({ servicesData }) => {
    const [searchByName, setSearchByName] = useState('');
    const [searchFromPrice, setSearchFromPrice] = useState('');
    const [searchToPrice, setSearchToPrice] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (searchFromPrice !== '' && searchToPrice !== '') {
            const from = Number(searchFromPrice);
            const to = Number(searchToPrice);

            if (searchToPrice && from > to) {
                setError("Le prix de départ doit être inférieur ou égal au prix d'arrivée");
            } else {
                setError('');
            }
        }
    }, [searchFromPrice, searchToPrice]);

    return (
        <div className="m-0">
            <div className="mb-6">
                <Header>
                    <div className={` ${error && 'pt-2'} flex flex-col justify-between items-end`}>
                        <div className="text-base flex flex-col xl:flex-row justify-around items-center space-y-4 xl:space-y-0 xl:space-x-10 py-4 xl:py-0">
                            <div className="flex flex-row justify-between items-center space-x-4">
                                <p className="text-right text-sm">Nom de service</p>
                                <div className='flex flex-row justify-between items-start border border-gold-700 px-2 py-3 rounded'>
                                    <input
                                        value={searchByName}
                                        type="text"
                                        maxLength={30}
                                        onChange={(e) => setSearchByName(e.target.value)}
                                        className="focus:outline-none focus:ring-0 px-2 xl:min-w-60 text-yellow-700"
                                    />
                                    <Search className="w-5 h-5 text-dark-900" />
                                </div>
                            </div>
                            <div className="w-full max-w-58 text-base flex flex-row justify-between items-center space-x-4">
                                <p className="text-right text-sm">Prix à <br /> partir de</p>
                                <div className='flex flex-row justify-between items-start border border-gold-700 pl-4 pr-2 py-3 rounded space-x-2'>
                                    <input
                                        value={searchFromPrice}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={6}
                                        pattern="\d*"
                                        onInput={(e) => {
                                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                        }}
                                        onChange={(e) => setSearchFromPrice(e.target.value)}
                                        className="no-spinner focus:outline-none max-w-20 focus:ring-0 text-yellow-700"
                                    />
                                    <p>€</p>
                                    <Search className="w-5 h-5 text-dark-900" />
                                </div>
                            </div>
                            <div className="max-w-58 text-base flex flex-row justify-between items-center space-x-4">
                                <p className="text-right text-sm">Prix jusqu'à</p>
                                <div className='flex flex-row justify-between items-start border border-gold-700 pl-4 pr-2 py-3 rounded space-x-2'>
                                    <input
                                        value={searchToPrice}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={6}
                                        pattern="\d*"
                                        onInput={(e) => {
                                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                        }}
                                        onChange={(e) => setSearchToPrice(e.target.value)}
                                        className="no-spinner focus:outline-none max-w-20 focus:ring-0 text-yellow-700"
                                    />
                                    <p>€</p>
                                    <Search className="w-5 h-5 text-dark-900" />
                                </div>
                            </div>
                        </div>
                        {error && <p className="text-xs text-red-700 text-right">{error}</p>}
                    </div>
                </Header>
            </div>
            <div className="w-1/4">
                <CreationButton libelle='un service' linkPath={SERVICE_CREATION} />
            </div>
            <GroupedAccordion
                searchByName={searchByName}
                searchFromPrice={searchFromPrice}
                searchToPrice={searchToPrice}
                datas={servicesData}
                groupBy={service => service.type}
                exclude={service => service.id === 1}
                ItemComponent={ServiceCard}
            />
        </div>
    )
}

export default Services