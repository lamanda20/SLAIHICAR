// importation de toutes les images depuis le dossier assets/images

// Range Rover
import rangeRover1 from "../all-images/cars-img/range-rover-1.jpeg";
import rangeRover2 from "../all-images/cars-img/range-rover-2.jpeg";
import rangeRover3 from "../all-images/cars-img/range-rover-3.jpeg";

// Volkswagen T-Roc
import troc1 from "../all-images/cars-img/troc-1.jpeg";
import troc2 from "../all-images/cars-img/troc-2.jpeg";
import troc3 from "../all-images/cars-img/troc-3.jpeg";
import troc4 from "../all-images/cars-img/troc-4.jpeg";
import troc5 from "../all-images/cars-img/troc-5.jpeg";
import troc6 from "../all-images/cars-img/troc-6.jpeg";
import troc7 from "../all-images/cars-img/troc-7.jpeg";
import troc8 from "../all-images/cars-img/troc-8.jpeg";

// Porsche Macan
import porsche1 from "../all-images/cars-img/porsche-1.jpeg";
import porsche2 from "../all-images/cars-img/porsche-2.jpeg";
import porsche3 from "../all-images/cars-img/porsche-3.jpeg";
import porsche4 from "../all-images/cars-img/porsche-4.jpeg";
import porsche5 from "../all-images/cars-img/porsche-5.jpeg";

// Renault Kardian
import kardian1 from "../all-images/cars-img/kardian-1.jpeg";
import kardian2 from "../all-images/cars-img/kardian-2.jpeg";
import kardian3 from "../all-images/cars-img/kardian-3.jpeg";

// Renault Clio
import clio1 from "../all-images/cars-img/clio-1.jpeg";
import clio2 from "../all-images/cars-img/clio-2.jpeg";


const carData = [
    {
        id: 1,
        brand: "Range Rover",
        carName: "Range Rover Evoque",
        images: [rangeRover1, rangeRover2, rangeRover3],
        model: "Model-2025",
        price: 90,
        fuel: "Essence",
        gps: "GPS Navigation",
        automatic: "Automatic",
        description:
            "Le Range Rover Evoque 2025 incarne le luxe compact avec un design raffiné, une technologie de pointe et des performances tout-terrain exceptionnelles.",
    },
    {
        id: 2,
        brand: "Volkswagen",
        carName: "Volkswagen T-Roc",
        images: [troc1, troc2, troc3, troc4, troc5, troc6, troc7, troc8],
        model: "Model-2025",
        price: 50,
        fuel: "Essence",
        gps: "GPS Navigation",
        automatic: "Automatic",
        description:
            "Le Volkswagen T-Roc 2025 combine style, sécurité et confort. Un SUV moderne et polyvalent pour les trajets urbains comme les longues routes.",
    },
    {
        id: 3,
        brand: "Porsche",
        carName: "Porsche Macan",
        images: [porsche1, porsche2, porsche3, porsche4, porsche5],
        model: "Model-2025",
        price: 170,
        fuel: "Essence",
        gps: "GPS Premium",
        automatic: "Automatic",
        description:
            "Le Porsche Macan 2025 offre une expérience de conduite sportive et raffinée. Design épuré, puissance et confort premium réunis.",
    },
    {
        id: 4,
        brand: "Renault",
        carName: "Renault Kardian",
        images: [kardian1, kardian2, kardian3],
        model: "Model-2025",
        price: 30,
        fuel: "Diesel",
        gps: "GPS Navigation",
        automatic: "Manuel",
        description:
            "Le Renault Kardian 2025, le nouveau SUV compact de la marque, allie design dynamique, fiabilité et équipements technologiques avancés.",
    },
    {
        id: 5,
        brand: "Renault",
        carName: "Renault Clio",
        images: [clio1, clio2],
        model: "Model-2025",
        price: 30,
        fuel: "Essence",
        gps: "GPS Navigation",
        automatic: "Automatic",
        description:
            "La Renault Clio 2025 reste une citadine emblématique, avec un style modernisé, un intérieur connecté et une efficacité énergétique améliorée.",
    },
];


export default carData;
