export const dataRoom = [
    {
        id: 6,
        name : 'Saphir',
        type : 'Supérieur',
        bedCapacity : 2,
        number : 105,
        price : 150,
        description : "Plus spacieuse qu'une standard, avec équipements et décoration améliorés."
    },
    {
        id: 8,
        name : 'Rubis',
        type : 'Suite',
        bedCapacity : 2,
        number : 107,
        price : 250,
        description : "Grand espace avec salon séparé, prestations haut de gamme."
    }
]

export const dataRoomType = [
    {
        id: 1,
        libelle : 'Standard',
        bedCapacity : 2,
        description : 'Chambre confortable avec équipements de base, idéale pour courts séjours.'
    },
    {
        id: 2,
        libelle : 'Double',
        bedCapacity : 4,
        description : 'Chambre avec un lit double ou deux lits simples, pour 1 à 2 personnes.'
    },
    {
        id: 3,
        libelle : 'Supérieure',
        bedCapacity : 2,
        description : "Plus spacieuse qu'une standard, avec équipements et décoration améliorés."
    },
    {
        id: 4,
        libelle : 'Suite',
        bedCapacity : 2,
        description : 'Grand espace avec salon séparé, prestations haut de gamme.'
    },
    {
        id: 5,
        libelle : 'Simple',
        bedCapacity : 1,
        description : 'Chambre pour une personne, avec un lit simple et commodités essentielles.'
    },
    {
        id: 6,
        libelle : 'Familiale',
        bedCapacity : 5,
        description : 'Chambre spacieuse conçue pour accueillir 3 à 5 personnes.'
    },
    {
        id: 7,
        libelle : 'Luxe',
        bedCapacity : 2,
        description : 'Chambre haut de gamme avec services premium et vue privilégiée.'
    }
]

export const dataService = [
	{
		"ID_SERV" : 1,
		"NOM" : "Template de service",
		"TYPE" : "Service client ",
		"DESCRPT" : "Service innexistant servant à faire le lien avec RESA",
		"PRIX" : 0.00,
		"DUREE" : 0,
		"OUVERTURE" : ""
	},
	{
		"ID_SERV" : 2,
		"NOM" : "Petit déjeuner continental",
		"TYPE" : "Restauration",
		"DESCRPT" : "Petit déjeuner classique avec viennoiseries, pain, beurre, confiture, boisson chaude.",
		"PRIX" : 12.00,
		"DUREE" : 60,
		"OUVERTURE" : "Service disponible de 7 à 11h tout les jours"
	},
	{
		"ID_SERV" : 3,
		"NOM" : "Petit déjeuner buffet",
		"TYPE" : "Restauration",
		"DESCRPT" : "Buffet à volonté comprenant plats chauds, froids, fruits, céréales et boissons.",
		"PRIX" : 18.00,
		"DUREE" : 60,
		"OUVERTURE" : "Service disponible de 8 à 11h tout les jours"
	},
	{
		"ID_SERV" : 4,
		"NOM" : "Déjeuner menu fixe",
		"TYPE" : "Restauration",
		"DESCRPT" : "Entrée, plat, dessert proposés selon le menu du jour.",
		"PRIX" : 25.00,
		"DUREE" : 90,
		"OUVERTURE" : "Service disponible de 11h à 14h tout les jours"
	},
	{
		"ID_SERV" : 5,
		"NOM" : "Dîner à la carte",
		"TYPE" : "Restauration",
		"DESCRPT" : "Repas du soir avec choix libre parmi les plats à la carte.",
		"PRIX" : 40.00,
		"DUREE" : 120,
		"OUVERTURE" : "Service disponible de 18h à 22h30 tout les jours"
	},
	{
		"ID_SERV" : 6,
		"NOM" : "Room service",
		"TYPE" : "Restauration",
		"DESCRPT" : "Livraison de repas ou boissons en chambre.",
		"PRIX" : 8.00,
		"DUREE" : 45,
		"OUVERTURE" : "Service disponible à tout moment"
	},
	{
		"ID_SERV" : 7,
		"NOM" : "Service minibar",
		"TYPE" : "Restauration",
		"DESCRPT" : "Consommation des boissons et snacks disponibles en chambre.",
		"PRIX" : 5.00,
		"DUREE" : 0,
		"OUVERTURE" : "Service disponible à tout moment"
	},
	{
		"ID_SERV" : 8,
		"NOM" : "Massage relaxant",
		"TYPE" : "Bien-être",
		"DESCRPT" : "Massage doux pour détendre les muscles et apaiser l\u001aesprit.",
		"PRIX" : 60.00,
		"DUREE" : 60,
		"OUVERTURE" : "Service disponible de 14 à 19h tout les jours"
	},
	{
		"ID_SERV" : 9,
		"NOM" : "Massage en duo",
		"TYPE" : "Bien-être",
		"DESCRPT" : "Massage relaxant pour deux personnes en simultané.",
		"PRIX" : 110.00,
		"DUREE" : 60,
		"OUVERTURE" : "Service disponible de 14 à 19h tout les jours"
	},
	{
		"ID_SERV" : 10,
		"NOM" : "Accès spa",
		"TYPE" : "Bien-être",
		"DESCRPT" : "Accès aux installations spa : sauna, hammam, jacuzzi.",
		"PRIX" : 30.00,
		"DUREE" : 90,
		"OUVERTURE" : "Service disponible de 7 à 11h tout les jours"
	},
	{
		"ID_SERV" : 11,
		"NOM" : "Soin du visage",
		"TYPE" : "Bien-être",
		"DESCRPT" : "Nettoyage, exfoliation et hydratation adaptés à votre peau.",
		"PRIX" : 50.00,
		"DUREE" : 45,
		"OUVERTURE" : "De 9 à 11h, puis 13 à 18h tout les jours"
	},
	{
		"ID_SERV" : 12,
		"NOM" : "Manucure",
		"TYPE" : "Bien-être",
		"DESCRPT" : "Soin complet des ongles, coupe, limage et vernis.",
		"PRIX" : 25.00,
		"DUREE" : 30,
		"OUVERTURE" : "De 9 à 11h, puis 13 à 18h tout les jours"
	},
	{
		"ID_SERV" : 13,
		"NOM" : "Coupe de cheveux",
		"TYPE" : "Bien-être",
		"DESCRPT" : "Service de coiffure avec shampooing, coupe et séchage.",
		"PRIX" : 35.00,
		"DUREE" : 45,
		"OUVERTURE" : "De 9 à 11h, puis 13 à 18h tout les jours"
	},
	{
		"ID_SERV" : 14,
		"NOM" : "Salle de réunion",
		"TYPE" : "Business",
		"DESCRPT" : "Location de salle équipée pour réunions ou séminaires.",
		"PRIX" : 100.00,
		"DUREE" : 180,
		"OUVERTURE" : "De 7 à 22h, du lundi au vendredi"
	},
	{
		"ID_SERV" : 15,
		"NOM" : "Impression \/ photocopie",
		"TYPE" : "Business",
		"DESCRPT" : "Service d'impression ou de photocopie à la réception.",
		"PRIX" : 0.10,
		"DUREE" : 0,
		"OUVERTURE" : "Service disponible à tout moment"
	},
	{
		"ID_SERV" : 16,
		"NOM" : "Service de traduction",
		"TYPE" : "Business",
		"DESCRPT" : "Traduction professionnelle pour documents ou réunions.",
		"PRIX" : 30.00,
		"DUREE" : 60,
		"OUVERTURE" : "De 7 à 22h, du lundi au vendredi"
	},
	{
		"ID_SERV" : 17,
		"NOM" : "Blanchisserie",
		"TYPE" : "Entretien",
		"DESCRPT" : "Nettoyage et repassage de vêtements à la demande.",
		"PRIX" : 8.00,
		"DUREE" : 0,
		"OUVERTURE" : "De 7 à 22h, du lundi au vendredi"
	},
	{
		"ID_SERV" : 18,
		"NOM" : "Nettoyage à sec",
		"TYPE" : "Entretien",
		"DESCRPT" : "Traitement à sec pour vêtements délicats.",
		"PRIX" : 12.00,
		"DUREE" : 0,
		"OUVERTURE" : "De 7 à 22h, du lundi au vendredi"
	},
	{
		"ID_SERV" : 19,
		"NOM" : "Réveil téléphonique",
		"TYPE" : "Service client",
		"DESCRPT" : "Appel téléphonique de réveil à l'heure souhaitée.",
		"PRIX" : 0.00,
		"DUREE" : 0,
		"OUVERTURE" : "De 6 à 14h, tout les jours"
	},
	{
		"ID_SERV" : 20,
		"NOM" : "Réservation taxi",
		"TYPE" : "Service client",
		"DESCRPT" : "Réservation d'un taxi à l'heure et à l'adresse demandée.",
		"PRIX" : 0.00,
		"DUREE" : 0,
		"OUVERTURE" : "Service disponible à tout moment"
	},
	{
		"ID_SERV" : 21,
		"NOM" : "Consigne bagages",
		"TYPE" : "Service client",
		"DESCRPT" : "Garde sécurisée des bagages avant check-in ou après check-out.",
		"PRIX" : 0.00,
		"DUREE" : 0,
		"OUVERTURE" : "Service disponible à tout moment"
	}
]
