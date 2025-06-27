'use client'
import BasicCard from "@/components/utils/cards/BasicCard";
import Header from "@/components/utils/header-footer/Header";
import { dataService } from "@/utils/data";
import { useParams, useRouter } from "next/navigation";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import ServiceTypeModal from "@/components/services/ServiceTypeModal";

const ServiceModification = () => {
    const { id } = useParams();
    const router = useRouter();
    const service = dataService.find(srv => srv.ID_SERV == id);
    const { register, setValue, watch, handleSubmit, formState: { errors } } = useForm();
    const [modalOpen, setModalOpen] = useState(false);
    const serviceType = watch('serviceType');
    // const [loading, setLoading] = useState(true);

    // // Simuler un fetch de données
    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch(`/api/services/${id}`);
    //         const data = await res.json();

    //         // Préremplir le formulaire
    //         reset({
    //             nom: data.nom,
    //             descrpt: data.descrpt,
    //             prix: data.prix,
    //             duree: data.duree,
    //             ouverture: data.ouverture,
    //         });

    //         setLoading(false);
    //     }

    //     fetchData();
    // }, [id, reset]);

    const onSubmit = (formData) => {
        // Ici tu fais la requête PUT/PATCH
        console.log('Formulaire soumis :', formData);
    };

    // if (loading) return <p>Chargement…</p>;

    return (
        <div className="p-10">
            <Header>
                <h1 className="text-lg">Modification : <span className="text-2xl">{service.NOM}</span></h1>
            </Header>
            <div className="w-1/2 mx-auto mt-10">
                <BasicCard>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col justify-between items-start space-y-4 text-dark-900 py-2">
                        <div className="w-full flex flex-row justify-between items-start space-x-6">
                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full">
                                    <label>Nom</label>
                                    <input
                                        {...register('name', { required: 'Nom requis' })}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                </div>
                                <div className="w-full">
                                    <label>Durée</label>
                                    <input
                                        type="duration"
                                        {...register('duration')}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.duration && <p className="text-red-500 text-sm">{errors.duration.message}</p>}
                                </div>
                                <div className="w-full">
                                    <label>Heure d&apos;ouverture</label>
                                    <input
                                        type="openingHour"
                                        {...register('openingHour')}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.openingHour && <p className="text-red-500 text-sm">{errors.openingHour.message}</p>}
                                </div>
                            </div>

                            <div className="basis-1/2 flex flex-col justify-between items-start space-y-4">
                                <div className="w-full flex flex-col justify-between items-start space-y-1">
                                    <label>Définir un type de service</label>
                                    <button
                                        type="button"
                                        onClick={() => setModalOpen(true)}
                                        className="bg-gold-600 hover:bg-yellow-600 text-white w-1/2 py-2 rounded"
                                    >
                                        Choisir
                                    </button>
                                </div>

                                <div className="w-full">
                                    <label>Type de service</label>
                                    <div className="flex gap-2">
                                        <input
                                            readOnly
                                            {...register('type')}
                                            placeholder="Sélectionnez un type"
                                            className="w-full bg-stone-100 border-t-2 border-gold-600 rounded px-3 py-2 mt-1"
                                        />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <label>Prix</label>
                                    <input
                                        type="price"
                                        {...register('price', { required: 'Prix de la chambre requis' })}
                                        className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                                    />
                                    {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <label>Description</label>
                            <textarea
                                {...register('description')}
                                className="w-full bg-stone-100 rounded px-3 py-2 mt-1"
                            ></textarea>
                            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}

                        </div>

                        <div className="w-full flex flex-row justify-start items-center">
                            <button
                                onClick={() => router.back()} type="button" className="w-1/3 flex flex-row justify-start items-center space-x-2 hover:underline">
                                <ChevronLeft className="w-5 h-5" />
                                <p>Retour</p>
                            </button>
                            <button type="submit" className="w-1/3 bg-teal-700 text-white rounded px-4 py-2 hover:bg-teal-600">
                                Modifier
                            </button>
                        </div>

                        <ServiceTypeModal
                            isOpen={modalOpen}
                            onClose={() => setModalOpen(false)}
                            onSelect={(type) => {
                                setValue('type', type.libelle);
                            }}
                        />
                    </form>
                </BasicCard>
            </div>
        </div>
    )
}

export default ServiceModification;