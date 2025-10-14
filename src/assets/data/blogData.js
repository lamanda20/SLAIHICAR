// import images from all-images/blog-img directory
import img01 from "../all-images/blog-img/blog-1.jpg";
import img02 from "../all-images/blog-img/blog-2.jpg";
import img03 from "../all-images/blog-img/blog-3.jpg";

const blogData = [
  {
    id: 1,
    title: "L'Art de Conduire : Maîtrisez Votre Véhicule de Location",
    author: "Jean-Baptiste Moreau",
    date: "15 Mars, 2024",
    time: "9h30",
    imgUrl: img01,
    description:
      "Transformez chaque trajet en une expérience exceptionnelle grâce à nos conseils d'experts. L'excellence automobile commence par une préparation minutieuse : inspection visuelle complète, familiarisation avec l'interface digitale, et adaptation de votre position de conduite. Maîtrisez les technologies embarquées pour une conduite fluide et sécurisée, où performance et confort se rencontrent harmonieusement.",
    quote:
      "L'excellence n'est pas un acte, mais une habitude. Chez SLAIHI CAR, nous cultivons cette philosophie dans chaque détail de nos services.",
  },

  {
    id: 2,
    title: "Solutions d'Urgence : Votre Guide de Dépannage Automobile",
    author: "Dr. Amélie Rousseau",
    date: "8 Avril, 2024",
    time: "14h15",
    imgUrl: img02,
    description:
      "Face aux imprévus techniques, restez serein grâce à notre protocole d'intervention premium. Notre réseau d'assistance technique déploie des solutions rapides et professionnelles, 24h/24 et 7j/7. Diagnostic instantané, intervention qualifiée, et véhicule de remplacement immédiat : nous anticipons vos besoins pour préserver la continuité de vos déplacements avec une efficacité remarquable.",
    quote:
      "Dans l'urgence, l'expertise fait la différence. Notre promesse : zéro stress, maximum d'efficacité.",
  },

  {
    id: 3,
    title: "Évasion Premium : Orchestrez Votre Road Trip d'Exception",
    author: "Alexandre Dubois",
    date: "22 Mai, 2024",
    time: "11h45",
    imgUrl: img03,
    description:
      "Concevez des souvenirs inoubliables avec nos véhicules premium dernière génération. Chaque kilomètre devient une découverte lorsque confort, performance et technologie s'allient pour sublimer vos escapades. Navigation intelligente, connectivité avancée, et sièges ergonomiques : tous les éléments convergent pour transformer vos voyages en expériences sensorielles mémorables.",
    quote:
      "Voyager, c'est vivre. Avec SLAIHI CAR, chaque route devient une invitation au dépassement et à l'émerveillement.",
  },
];

export default blogData;
