import BasicCard from "@/components/cards/BasicCard";
import CreationCard from "@/components/cards/CreationCard";
import Header from "@/components/header/Header";
import BedroomCard from "@/components/bedrooms/BedroomCard";
import { dataBedroom } from "@/utils/data";

export const bedrooms = () => {
    return (
        <main className="p-10 w-full min-h-screen flex-1 text-center">
            <div className="mb-6">
                <Header>
                    <p>Nom</p> <p>numero</p>
                </Header>
            </div>
            <div className="w-full flex flex-row justify-start items-center space-x-8">
                <CreationCard libelle='une chambre' linkPath='/create-bedroom' />
                <CreationCard libelle='un type de chambre' linkPath='/create-bedroom-type' />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-10">
                {dataBedroom.map(bedroom => (
                    <BasicCard key={bedroom.id}>
                        <BedroomCard
                            id={bedroom.id}
                            name={bedroom.name}
                            type={bedroom.type}
                            bedCapacity={bedroom.bedCapacity}
                            number={bedroom.number}
                            price={bedroom.price}
                            description={bedroom.description}
                        />
                    </BasicCard>
                ))}
            </div>
        </main>
    )
}

export default bedrooms; 