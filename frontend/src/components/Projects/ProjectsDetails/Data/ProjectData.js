// images project gallery
const project1 = "/images/projects/projects-gallery/1.appartement-parisien.jpg";
const project2 = "/images/projects/projects-gallery/2.maison-mer.jpg";
const project3 = "/images/projects/projects-gallery/3.maisons-campagne.jpg";
const project4 = "/images/projects/projects-gallery/4.maison-ville.jpg";
const project5 = "/images/projects/projects-gallery/5.ferme.jpg";
const project6 = "/images/projects/projects-gallery/6.appartement-nantais.jpg";
const project7 = "/images/projects/projects-gallery/7.patisserie.jpg";

// images section project solo

// 1.Appart-Paris
const apt_paris1 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN.jpg";
const apt_paris2 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN2.jpg";
const apt_paris3 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN3.jpg";
const apt_paris4 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN4.jpg";
const apt_paris5 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN5.jpg";
const apt_paris6 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN6.jpg";
const apt_paris7 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN7.jpg";
const apt_paris8 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN8.jpg";
const apt_paris9 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN9.jpg";
const apt_paris10 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN10.jpg";
const apt_paris11 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN11.jpg";
const apt_paris12 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN12.jpg";

// 2.Maison-mer
const maison_mer1 = "/images/projectsDetails/2.Maison-Mer/MAISON_MER1.jpg";
const maison_mer2 = "/images/projectsDetails/2.Maison-Mer/MAISON_MER2.jpg";
const maison_mer3 = "/images/projectsDetails/2.Maison-Mer/MAISON_MER3.jpg";
const maison_mer4 = "/images/projectsDetails/2.Maison-Mer/MAISON_MER4.jpg";
const maison_mer5 = "/images/projectsDetails/2.Maison-Mer/MAISON_MER5.jpg";

// 3. Maison-campagne
const maison_campagne1 =
  "/images/projectsDetails/3.Maison-Campagne/MAISON_CAMPAGNE1.jpg";
const maison_campagne2 =
  "/images/projectsDetails/3.Maison-Campagne/MAISON_CAMPAGNE2.jpg";
const maison_campagne3 =
  "/images/projectsDetails/3.Maison-Campagne/MAISON_CAMPAGNE3.jpg";
const maison_campagne4 =
  "/images/projectsDetails/3.Maison-Campagne/MAISON_CAMPAGNE4.jpg";

//4 Maison-ville
const maison_ville1 =
  "/images/projectsDetails/4.Maison-Ville/MAISON_VILLE1.jpg";
const maison_ville2 =
  "/images/projectsDetails/4.Maison-Ville/MAISON_VILLE2.jpg";
const maison_ville3 =
  "/images/projectsDetails/4.Maison-Ville/MAISON_VILLE3.jpg";
const maison_ville4 =
  "/images/projectsDetails/4.Maison-Ville/MAISON_VILLE4.jpg";

//5 Corps de Ferme
const ferme1 = "/images/projectsDetails/5.Ferme/FERME1.jpg";
const ferme2 = "/images/projectsDetails/5.Ferme/FERME2.jpg";
const ferme3 = "/images/projectsDetails/5.Ferme/FERME3.jpg";
const ferme4 = "/images/projectsDetails/5.Ferme/FERME4.jpg";
const ferme5 = "/images/projectsDetails/5.Ferme/FERME5.jpg";
const ferme6 = "/images/projectsDetails/5.Ferme/FERME6.jpg";
const ferme7 = "/images/projectsDetails/5.Ferme/FERME7.jpg";
const ferme8 = "/images/projectsDetails/5.Ferme/FERME8.jpg";
const ferme9 = "/images/projectsDetails/5.Ferme/FERME9.jpg";
const ferme10 = "/images/projectsDetails/5.Ferme/FERME10.jpg";

//6 Appart Nantais
const appart_nantes1 =
  "/images/projectsDetails/6.Appart-Nantais/APPARTEMENT_NANTAIS1.jpg";
const appart_nantes2 =
  "/images/projectsDetails/6.Appart-Nantais/APPARTEMENT_NANTAIS2.jpg";
const appart_nantes3 =
  "/images/projectsDetails/6.Appart-Nantais/APPARTEMENT_NANTAIS3.jpg";

//7 Boulangerie
const boulangerie1 = "/images/projectsDetails/7.Commerce/COMMERCE1.jpg";
const boulangerie2 = "/images/projectsDetails/7.Commerce/COMMERCE2.jpg";

export const projectsData = [
  {
    id: 1,
    slug: "appartement-parisien",
    imgSrc: project1,
    title: "APPARTEMENT PARISIEN",
    location: "Paris 7ème",
    grade: "Rénovation",
    description1: `Situé sur la rive gauche de Paris, cet appartement a bénéficié d’une rénovation complète, alliant élégance et fonctionnalité. L’intervention a permis de restructurer les espaces en valorisant la lumière naturelle et en optimisant le confort thermique. Les agencements sur mesure sont en bois d’Oukoumé et intègrent la cuisine ainsi que du mobilier de rangement dans l’espace séjour et salle à manger.
    `,
    description2: `Des revêtements muraux en bouleau habillent la chambre et se prolongent dans les pièces intimes telles que le dressing et la salle de bain. Une attention particulière a été portée au traitement de la lumière, aux matériaux et aux détails de finition.`,
    type: "rénovation",
    loc: "Paris 5ème",
    sup: "90 m²",
    mo: "privée",
    inter: "mission complète",
    avance: "livré août 2024",
    tags: [
      "bois",
      "rénovation",
      "Paris",
      "appartement",
      "intérieur",
      "menuiseries",
    ],
    meta: "Rénovation complète d’un appartement rive gauche à Paris : lumière naturelle, confort thermique, bois d’Oukoumé, finitions soignées, élégance fonctionnelle",
    layout: {
      images: [
        {
          src: apt_paris1,
          alt: "Cuisine1",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris2,
          alt: "Cuisine2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris3,
          alt: "Cuisine3",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris4,
          alt: "Cuisine4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris5,
          alt: "Cuisine4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris6,
          alt: "Cuisine4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris7,
          alt: "Cuisine4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris8,
          alt: "Cuisine4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris9,
          alt: "Cuisine4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris10,
          alt: "Cuisine4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris11,
          alt: "Cuisine4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris12,
          alt: "Cuisine4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
      ],
    },
  },
  {
    id: 2,
    slug: "maison-a-la-mer",
    imgSrc: project2,
    title: "MAISON A LA MER",
    location: "Calvados",
    grade: "Agrandissement",
    description1: `Nichée sur la côte Normande, la maison existante est conservée et réhabilitée dans son enveloppe et ses installations techniques. Le projet prévoit de concevoir une extension qui reprend le langage de la maison existante dans son volume. Pour mieux établir la liaison avec la maison existante, un espace en simple rez-de-chaussée connecte les deux volumes. Ce dernier, au caractère plus contemporain, révèle au mieux les formes architecturales plus traditionnelles de la maison existante et du reste de l’extension. L’orientation du bâti et le dessin des façades sont conçus pour répondre à l’environnement paysagé et climatique du site.`,
    description2: `Les façades Sud et Sud-Ouest sont largement ouvertes et prolongées par des terrasses. En été, l’arbre imposant situé devant la façade Sud apporte une protection naturelle en agissant comme pare-soleil. En hiver, les grandes ouvertures permettent de capter un maximum de soleil. Le rythme de ces façades rappelle, dans un esprit contemporain, les maisons à colombages présentes dans la ville. Une grande ouverture sur la façade Sud-Ouest cadre la vue sur le jardin. `,
    type: "rénovation et extension",
    loc: "Bernières-Sur-Mer",
    sup: "130 m²",
    mo: "privée",
    inter: "conception",
    avance: "En cours",
    tags: [
      "bois",
      "extérieur",
      "Normandie",
      "maison",
      "extension",
      "terrasse",
      "Caen",
    ],
    meta: "Réhabilitation et extension d’une maison en Normandie, intégrant volumes traditionnels et contemporain, grandes ouvertures, terrasses, et lien paysager optimal.",
    layout: {
      images: [
        {
          src: maison_mer1,
          alt: "Cuisine1",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_mer2,
          alt: "Salon1",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_mer3,
          alt: "Salon3",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_mer4,
          alt: "Salon2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_mer5,
          alt: "Axo1",
          gridColumn: "span 2",
          gridRow: "span 2",
        },
      ],
    },
  },
  {
    id: 3,
    slug: "maison-de-campagne",
    imgSrc: project3,
    title: "MAISON DE CAMPAGNE",
    location: "Ile-Et-Vilaine",
    grade: "Agrandissement",
    description1: `Au cœur d’un paysage rural préservé, cet ensemble de bâtiment en friche a fait l’objet d’une rénovation complète visant à respecter son caractère traditionnel tout en l’adaptant aux usages contemporains. Deux maison individuelles remplacent les anciennes granges et étables. Pour ce faire, les volumes intérieurs on été entièrement repensé pour créer de vastes espaces lumineux. Les ouvertures ont été redessinées pour maximiser l’apport de lumière et créer un dialogue constant avec l’extérieur. `,
    description2: `Le choix des matériaux tient une place centrale dans cette conception architecturale. Il s’agit de mettre en œuvre des matériaux de construction biosourcés tels que le bois peuplier pour les charpentes, planchers et menuiseries intérieures, la chaux, le chanvre et la terre pour les enduits intérieurs et les planchers. Pour répondre aux matériaux traditionnels présents dans la région, les toitures sont en tuile canalaverou couleur terre de Charente pour les toitures.`,
    type: "rénovation et aménagement paysager",
    loc: "Saint-Romans-lès-Melle",
    sup: "340 m²",
    mo: "privée",
    inter: "conception et permis de construire",
    avance: "Permis de construire validé",
    tags: ["pierre", "rénovation", "tuile", "granges", "chaux", "biosourcé"],
    meta: "Rénovation d’un ensemble rural : deux maisons lumineuses, matériaux biosourcés (bois, chaux, chanvre), volumes réinventés et dialogue avec l’extérieur.",
    layout: {
      images: [
        {
          src: maison_campagne1,
          alt: "Axio1",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_campagne2,
          alt: "Axio2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_campagne3,
          alt: "Plan1",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_campagne4,
          alt: "Plan2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
      ],
    },
  },
  {
    id: 4,
    slug: "maison-de-ville",
    imgSrc: project4,
    title: "MAISON DE VILLE",
    location: "Ile-Et-Vilaine",
    grade: "Extension",
    description1: `Cette maison s'inscrit dans l'alignement de constructions similaires, formant un front bâti homogène. Son identité repose avant tout sur cette unité d’ensemble, lui conférant un caractère générique. L’ambition globale du projet consiste à explorer et valoriser les possibilités qu’offre une telle configuration urbaine. La présente étude propose une extension et une surélévation qui donneront un caractère singulier à une typologie de maison standardisée.`,
    description2: `L’idée est de s’affranchir des contraintes de la parcelle (orientation N/S, configuration en lanière, maison au centre...) et, à l’inverse, d’en exploiter le potentiel. Il s’agit de retrouver de nouvelles orientations où l’intérieur et l’extérieur se répondent grâce à des volumes forts.

`,
    type: "extension et surrélévation",
    loc: "Lille",
    sup: "150 m²",
    mo: "privée",
    inter: "esquisse",
    avance: "livré",
    tags: ["extension", "surrélévation", "centre-ville", "maison"],
    meta: "Extension et surélévation d’une maison standardisée pour renforcer son identité. Nouvelles orientations, volumes forts et mise en valeur de la configuration urbaine.",
    layout: {
      images: [
        {
          src: maison_ville1,
          alt: "Dessin1",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_ville2,
          alt: "Dessin2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_ville3,
          alt: "Dessin3",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_ville4,
          alt: "Dessin4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
      ],
    },
  },
  {
    id: 5,
    slug: "corps-de-ferme",
    imgSrc: project5,
    title: "CORPS DE FERME",
    location: "Calvados",
    grade: "Extension",
    description1: `Située dans la plaine de Caen, cet ancien corps de ferme à déja fait l’objet d’une première rénovation en 2015. Les habitants occupent le niveau intermédiaire. Le demande principale est l’aménagement des combles pour la création de chambres et de lieux de vie. Afin de proposer un projet d’ensemble cohérent les études ont également portées sur la reconfiguration du R+1 avec la création d’un escalier d’accès aux combles.`,
    description2: `Le projet porte également sur la transformation du RDC pour accueillir une véritable entrée, des espaces de rangements, une buanderie, une  cave à vin, et un lieu de vie en lien avec le jardin.`,
    type: "rénovation",
    loc: "Escoville",
    sup: "300 m²",
    mo: "privée",
    inter: "mission complète",
    avance: "études en cours",
    tags: [
      "rénovation",
      "extension",
      "ferme",
      "combles",
      "aménagement",
      "Caen",
    ],
    meta: "Aménagement des combles, reconfiguration du R+1, et transformation du RDC d’un ancien corps de ferme près de Caen. Optimisation des espaces et accès au jardin.",
    layout: {
      images: [
        {
          src: ferme1,
          alt: "Cuisine1",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: ferme2,
          alt: "Salon1",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: ferme3,
          alt: "Salon3",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: ferme4,
          alt: "Salon2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: ferme5,
          alt: "Salon2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: ferme6,
          alt: "Salon2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: ferme7,
          alt: "Salon2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: ferme8,
          alt: "Salon2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: ferme9,
          alt: "Salon2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: ferme10,
          alt: "Salon2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
      ],
    },
  },
  {
    id: 6,
    slug: "appartement-nantais",
    imgSrc: project6,
    title: "APPARTEMENT NANTAIS",
    location: "Loire-Atlantique",
    grade: "Agrandissement",
    description1: `Situé en plein cœur de Nantes, cet appartement à fait l’objet d’une rénovation intégrale visant à maximiser l’espace et la fluidité des circulations. Initialement, l’appartement se développait sur un seul niveau. L’actuel salon était découpé pour accueillir une chambre et la salle de bain ne disposait d’aucune fenêtre. La configuration des espaces a été retravaillé avec la modification du cloisonnement, et l’installation d’un escalier afin d’accéder à l’étage des combles directement depuis l’appartement.`,
    description2: `La cuisine actuelle est transformée en chambre. Une nouvelle cuisine ouverte, entièrement repensée, s’articule harmonieusement autour du salon et de l’espace repas. Une nouvelle salle de bain prend place à l’étage. Une seconde chambre vient compléter cet appartement pour modifier sa typologie en T3.`,
    type: "rénovation",
    loc: "Nantes",
    sup: "50 m²",
    mo: "privée",
    inter: "coneption et délcaration préalable",
    avance: "chantier en cours",
    tags: [
      "extension",
      "rénovation",
      "bois",
      "menuiseries",
      "intérieur",
      "Nantes",
    ],
    meta: "Rénovation d’un appartement à Nantes : nouveaux espaces fluides, cuisine ouverte, chambres repensées et accès direct aux combles pour un T3 lumineux.",
    layout: {
      images: [
        {
          src: appart_nantes1,
          alt: "Cuisine1",
          gridColumn: "span 1",
          gridRow: "span 2",
        },
        {
          src: appart_nantes2,
          alt: "Salon1",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: appart_nantes3,
          alt: "Salon3",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
      ],
    },
  },
  {
    id: 7,
    slug: "commerce-rennais",
    imgSrc: project7,
    title: "PÂTISSERIE RENNAISE",
    location: "Ile-Et-Vilaine",
    grade: "Rénovation",
    description1: `Au coeur du centre historique de la ville de Rennes, ce local commercial à été complètement transformé afin d’accueillir une pâtisserie. L’espace intérieur a été optimisé pour conjuguer fonctionnalité et fluidité Chaque détail de cette pâtisserie a été conçu avec précision, de l’agencement du mobilier aux choix des teintes et textures. La devanture en verre, associée à un store sobrement orné, met en valeur l’identité du lieu et assure une ouverture fluide sur la place Saint-Germain.`,
    description2: `L’intérieur, baigné de lumière, invite à la dégustation. L’espace est pensé pour sublimer les créations gourmandes tout en favorisant l’échange et la proximité avec les clients.`,
    type: "rénovation",
    loc: "Rennes",
    sup: "65 m²",
    mo: "privée",
    inter: "Mission complète avec Lieu architecture",
    avance: "Chantier en cours",
    tags: ["commerce", "rénovation", "Rennes", "verre", "intérieur"],
    meta: "Transformation d’un local à Rennes en pâtisserie lumineuse et fonctionnelle : agencement précis, devanture élégante, lieu chaleureux et ouvert à la convivialité.",
    layout: {
      images: [
        {
          src: boulangerie1,
          alt: "Facade1",
          gridColumn: "span 1",
          gridRow: "span 2",
        },
        {
          src: boulangerie2,
          alt: "Facade2",
          gridColumn: "span 1",
          gridRow: "span 2",
        },
      ],
    },
  },
];
