import BasicCard from "@/components/cards/BasicCard";
import CreationCard from "@/components/cards/CreationCard";
import FiltersCard from "@/components/cards/FiltersCard";
import MiniatureChambre from "@/components/chambres/MiniatureChambre";

export const Chambres = () => {
    return (
        <main className="p-10 w-full min-h-screen flex-1 text-center">
            <div className="mb-6">
                <FiltersCard>
                    <p>Nom</p> <p>numero</p>
                </FiltersCard>
            </div>
            <CreationCard libelle='une chambre' />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-10">
                <BasicCard>
                    <MiniatureChambre />
                </BasicCard>
            </div>
        </main>
    )
}

export default Chambres; 