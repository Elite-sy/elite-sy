import type { Post, PlannedPost } from "./types";
import { post as vitres } from "./posts/vitres-bureau-sans-traces";
import { post as ecolo } from "./posts/produits-ecologiques-nettoyage";
import { post as haccp } from "./posts/normes-haccp-restauration";
import { post as ars } from "./posts/conformite-ars-officine-pharmacie";
import { post as bionet } from "./posts/bionettoyage-hospitalier-protocole";
import { post as ecolabel } from "./posts/ecolabel-europeen-explication";
import { post as vitresHauteur } from "./posts/nettoyage-vitres-grande-hauteur";

export const publishedPosts: Post[] = [
  vitres,
  ecolo,
  haccp,
  ars,
  bionet,
  ecolabel,
  vitresHauteur,
].sort(
  (a, b) => b.date.localeCompare(a.date),
);

export const plannedPosts: PlannedPost[] = [
  { slug: "nettoyage-ete-locaux-professionnels", title: "Nettoyage d'été des locaux professionnels : remise en état avant la rentrée", description: "Sols, moquettes, sanitaires, VMC et climatisation : planning et méthode pour un grand nettoyage estival réussi.", category: "Guides Pratiques", date: "2026-04-02" },
  { slug: "eliminer-odeurs-climatisation-bureau", title: "Éliminer les mauvaises odeurs de climatisation au bureau", description: "Causes, réflexes immédiats et entretien des filtres pour préserver la qualité de l'air intérieur.", category: "Conseils d'entretien", date: "2026-03-22" },
  { slug: "nettoyage-frigo-bureau-protocole", title: "Nettoyage du frigo de bureau : protocole mensuel en 5 étapes", description: "Fréquence, produits, températures et règles d'affichage pour limiter odeurs et contaminations.", category: "Conseils d'entretien", date: "2026-03-15" },
  { slug: "nettoyer-ecran-clavier-bureau", title: "Nettoyer écran et clavier sans abîmer son matériel", description: "Les bons produits, les bons gestes et la bonne fréquence pour préserver vos postes de travail.", category: "Conseils d'entretien", date: "2026-03-08" },
  { slug: "tapis-barrieres-hiver-sols", title: "Protéger vos sols en hiver avec des tapis barrières", description: "Réduire les salissures, les glissades et les coûts de réfection grâce à un entretien préventif.", category: "Conseils d'entretien", date: "2026-02-28" },
  { slug: "taches-cafe-moquette-traiter", title: "Taches de café sur moquette : solutions rapides", description: "Les bons gestes à appliquer vite, sans abîmer les fibres, et quand appeler un professionnel.", category: "Conseils d'entretien", date: "2026-02-20" },
  { slug: "entretien-machine-cafe-bureau", title: "Entretien de la machine à café au bureau : le geste oublié", description: "Limiter bactéries, odeurs et pannes — méthode, fréquence et conseils pratiques.", category: "Conseils d'entretien", date: "2026-02-12" },
  { slug: "aerer-bureaux-qualite-air", title: "Aérer ses bureaux pour améliorer la qualité de l'air", description: "Quand ouvrir, combien de temps et comment limiter CO2, COV et humidité.", category: "Conseils d'entretien", date: "2026-02-05" },
  { slug: "agent-nettoyage-ne-vient-pas-que-faire", title: "Que faire si l'agent de nettoyage ne vient pas ?", description: "Réflexes immédiats, vérifications du contrat, preuves à conserver et solutions préventives.", category: "FAQ", date: "2026-01-28" },
  { slug: "sanitaires-bureau-rester-impeccable", title: "5 astuces pour garder vos sanitaires impeccables au bureau", description: "Gestes simples pour des toilettes propres entre deux passages du prestataire.", category: "Conseils d'entretien", date: "2026-01-20" },
  { slug: "demander-nettoyage-ecologique-prestataire", title: "Peut-on demander un nettoyage écologique à son prestataire ?", description: "Labels, clause dans le cahier des charges, conformité et coût : les réponses concrètes.", category: "FAQ", date: "2026-01-12" },
  { slug: "protocole-nettoyage-bureaux-quotidien", title: "Protocole de nettoyage quotidien des bureaux", description: "Méthode, ordre des opérations et fréquences pour un entretien tertiaire irréprochable.", category: "Guides Pratiques", date: "2026-01-05" },
  { slug: "nettoyage-fin-chantier-livraison", title: "Nettoyage de fin de chantier avant livraison", description: "Étapes, matériel et points de contrôle pour livrer un bâtiment impeccable.", category: "Guides Pratiques", date: "2025-12-22" },
  { slug: "remise-en-etat-locaux-vacants", title: "Remise en état de locaux vacants : méthode complète", description: "Décapage, vitrerie, sanitaires : préparer un local pour une nouvelle occupation.", category: "Guides Pratiques", date: "2025-12-15" },
  { slug: "nettoyage-vitres-grande-hauteur", title: "Nettoyage de vitres en grande hauteur : sécurité et méthode", description: "Perche d'eau pure, nacelle, cordistes : choisir la bonne technique selon la façade.", category: "Guides Pratiques", date: "2025-12-08" },
  { slug: "entretien-moquette-bureaux", title: "Entretien des moquettes de bureaux : injection-extraction ou shampouinage ?", description: "Fréquences, méthodes et coûts pour préserver vos textiles de sol.", category: "Guides Pratiques", date: "2025-12-01" },
  { slug: "decapage-cristallisation-marbre", title: "Décapage et cristallisation du marbre", description: "Redonner brillance et protection à un sol en pierre naturelle.", category: "Guides Pratiques", date: "2025-11-24" },
  { slug: "nettoyage-cage-escalier-immeuble", title: "Nettoyage d'une cage d'escalier en immeuble", description: "Méthode, fréquences et matériel pour un entretien efficace des parties communes.", category: "Guides Pratiques", date: "2025-11-17" },
  { slug: "entretien-parties-communes-copropriete", title: "Entretien des parties communes en copropriété", description: "Cahier des charges type et points de vigilance pour syndics et gestionnaires.", category: "Guides Pratiques", date: "2025-11-10" },
  { slug: "nettoyage-parking-souterrain", title: "Nettoyage d'un parking souterrain", description: "Balayage mécanisé, gestion des hydrocarbures et désodorisation.", category: "Guides Pratiques", date: "2025-11-03" },
  { slug: "gestion-dechets-bureaux-tri", title: "Gestion des déchets de bureau et tri sélectif", description: "Mettre en place un dispositif de tri efficace et conforme au décret 5 flux.", category: "Guides Pratiques", date: "2025-10-27" },
  { slug: "nettoyage-salle-sport-entreprise", title: "Nettoyage d'une salle de sport d'entreprise", description: "Hygiène des vestiaires, désinfection du matériel et qualité de l'air.", category: "Guides Pratiques", date: "2025-10-20" },
  { slug: "entretien-espace-coworking", title: "Entretien d'un espace de coworking", description: "Hauts flux, surfaces partagées et perception des membres : la méthode.", category: "Guides Pratiques", date: "2025-10-13" },
  { slug: "nettoyage-showroom-flagship", title: "Nettoyage d'un showroom et d'un flagship store", description: "Mise en valeur produit, vitrines et interventions en flux tendu.", category: "Guides Pratiques", date: "2025-10-06" },
  { slug: "nettoyage-hotel-chambre-protocole", title: "Protocole de nettoyage d'une chambre d'hôtel", description: "Standards de propreté, ordre des opérations et contrôle qualité.", category: "Guides Pratiques", date: "2025-09-29" },
  { slug: "nettoyage-restaurant-fin-service", title: "Nettoyage d'un restaurant en fin de service", description: "Cuisine, salle et sanitaires : la méthode pour finir vite et bien.", category: "Guides Pratiques", date: "2025-09-22" },
  { slug: "nettoyage-boulangerie-patisserie", title: "Nettoyage d'une boulangerie-pâtisserie", description: "Laminoir, fournil et vitrines : hygiène et conformité DDPP.", category: "Guides Pratiques", date: "2025-09-15" },
  { slug: "nettoyage-laboratoire-analyses", title: "Nettoyage d'un laboratoire d'analyses", description: "Paillasses, hottes et gestion DASRI dans le respect des protocoles biologiques.", category: "Guides Pratiques", date: "2025-09-08" },
  { slug: "nettoyage-cabinet-medical-protocole", title: "Protocole de nettoyage d'un cabinet médical", description: "Bionettoyage, salle d'attente et désinfection du matériel.", category: "Guides Pratiques", date: "2025-09-01" },
  { slug: "nettoyage-creche-protocole", title: "Protocole de nettoyage d'une crèche", description: "Surfaces, jouets et sanitaires : protéger les tout-petits sans sur-désinfecter.", category: "Guides Pratiques", date: "2025-08-25" },
  { slug: "nettoyage-ecole-maternelle-primaire", title: "Nettoyage d'une école maternelle et primaire", description: "Sanitaires, réfectoire et salles de classe : la méthode hors temps scolaire.", category: "Guides Pratiques", date: "2025-08-18" },
  { slug: "nettoyage-college-lycee", title: "Nettoyage d'un collège ou d'un lycée", description: "Volumes, flux et internat : organiser un entretien de qualité constante.", category: "Guides Pratiques", date: "2025-08-11" },
  { slug: "nettoyage-musee-galerie", title: "Nettoyage d'un musée ou d'une galerie d'art", description: "Préserver les œuvres, encadrer les agents et gérer les vitrines.", category: "Guides Pratiques", date: "2025-08-04" },
  { slug: "nettoyage-salle-spectacle", title: "Nettoyage d'une salle de spectacle", description: "Interventions en flux tendu entre deux représentations.", category: "Guides Pratiques", date: "2025-07-28" },
  { slug: "bionettoyage-hospitalier-protocole", title: "Bionettoyage hospitalier : protocole et traçabilité", description: "Chambres, blocs et zones à risque infectieux : la méthode validée.", category: "Normes & réglementations", date: "2025-07-21" },
  { slug: "norme-iso-14644-salles-blanches", title: "Norme ISO 14644 : ce qu'il faut savoir sur les salles blanches", description: "Classes ISO 5 à 8, contrôles particulaires et méthode de bionettoyage.", category: "Normes & réglementations", date: "2025-07-14" },
  { slug: "conformite-ars-officine-pharmacie", title: "Conformité ARS en officine de pharmacie", description: "Plan de nettoyage, traçabilité et dossier prêt pour l'inspection.", category: "Normes & réglementations", date: "2025-07-07" },
  { slug: "demarche-qualite-officine-dqo", title: "La Démarche Qualité Officine (DQO) et l'hygiène", description: "Intégrer le protocole de nettoyage à votre démarche qualité.", category: "Normes & réglementations", date: "2025-06-30" },
  { slug: "certification-qualipropre", title: "La certification Qualipropre : à quoi elle engage", description: "Le référentiel qualité de la profession propreté décrypté.", category: "Normes & réglementations", date: "2025-06-23" },
  { slug: "reglementation-dasri-officine", title: "Gestion des DASRI en officine et cabinet médical", description: "Tri, conditionnement, traçabilité et filières d'élimination.", category: "Normes & réglementations", date: "2025-06-16" },
  { slug: "evaluation-risques-document-unique-nettoyage", title: "Document unique et évaluation des risques pour le nettoyage", description: "Obligations employeur, TMS et exposition chimique : ce qu'il faut documenter.", category: "Normes & réglementations", date: "2025-06-09" },
  { slug: "norme-en-14476-virucide", title: "La norme EN 14476 : que garantit-elle vraiment ?", description: "Comprendre les tests d'efficacité virucide et les temps de contact.", category: "Normes & réglementations", date: "2025-06-02" },
  { slug: "reglementation-produits-biocides", title: "La réglementation des produits biocides en France", description: "Autorisations, étiquetage et obligations de l'utilisateur professionnel.", category: "Normes & réglementations", date: "2025-05-26" },
  { slug: "accessibilite-erp-entretien", title: "Accessibilité ERP : l'entretien des équipements PMR", description: "Cheminements, sanitaires accessibles et signalétique au quotidien.", category: "Normes & réglementations", date: "2025-05-19" },
  { slug: "registre-securite-erp", title: "Le registre de sécurité ERP : que doit-on y trouver ?", description: "Documents obligatoires, périodicité et lien avec le contrat de nettoyage.", category: "Normes & réglementations", date: "2025-05-12" },
  { slug: "nettoyage-vapeur-sans-produit", title: "Le nettoyage vapeur : nettoyer sans produit chimique", description: "Principes, performances et limites de la vapeur haute température.", category: "Écologie & environnement", date: "2025-05-05" },
  { slug: "microfibre-vs-lavette-jetable", title: "Microfibre lavable contre lavette jetable : le match", description: "Empreinte carbone, coût d'usage et performance comparée.", category: "Écologie & environnement", date: "2025-04-28" },
  { slug: "eau-pure-osmosee-nettoyage-vitres", title: "L'eau pure osmosée pour le nettoyage des vitres", description: "Pourquoi les pros l'utilisent et comment elle réduit l'usage de détergents.", category: "Écologie & environnement", date: "2025-04-21" },
  { slug: "reduction-cov-air-interieur", title: "Réduire les COV pour améliorer l'air intérieur", description: "Choix des produits, ventilation et bonnes pratiques au quotidien.", category: "Écologie & environnement", date: "2025-04-14" },
  { slug: "ecolabel-europeen-explication", title: "L'Ecolabel européen expliqué : ce qu'il garantit", description: "Critères, cycle de vie et reconnaissance officielle du label.", category: "Écologie & environnement", date: "2025-04-07" },
  { slug: "nettoyage-zero-plastique-bureau", title: "Vers un nettoyage zéro plastique au bureau", description: "Recharges, contenants en verre et fournitures réutilisables.", category: "Écologie & environnement", date: "2025-03-31" },
  { slug: "materiel-nettoyage-electrique-vs-thermique", title: "Matériel de nettoyage : électrique ou thermique ?", description: "Bruit, émissions et coût d'usage : faire le bon choix selon le site.", category: "Écologie & environnement", date: "2025-03-24" },
  { slug: "choisir-autolaveuse-bureaux", title: "Comment choisir une autolaveuse pour des bureaux ?", description: "Largeur de travail, autonomie, manœuvrabilité : les critères qui comptent.", category: "Produits & techniques", date: "2025-03-17" },
  { slug: "monobrosse-utilisation-types", title: "La monobrosse : usages, types et bons réflexes", description: "Basse, haute ou ultra-haute vitesse — choisir la bonne machine.", category: "Produits & techniques", date: "2025-03-10" },
  { slug: "aspirateur-professionnel-criteres", title: "Choisir un aspirateur professionnel : les vrais critères", description: "Filtration HEPA, niveau sonore, dépression et débit d'air.", category: "Produits & techniques", date: "2025-03-03" },
  { slug: "chariot-de-menage-organisation", title: "Organiser un chariot de ménage professionnel", description: "Code couleur, ergonomie et productivité sur le terrain.", category: "Produits & techniques", date: "2025-02-24" },
  { slug: "code-couleur-microfibres", title: "Le code couleur des microfibres : pourquoi et comment", description: "Sanitaires, cuisine, plans de travail : ne plus croiser les risques.", category: "Produits & techniques", date: "2025-02-17" },
  { slug: "dilution-produits-detergents", title: "Dilution des produits détergents : les bons dosages", description: "Centrales murales, doseurs et règles de calcul à connaître.", category: "Produits & techniques", date: "2025-02-10" },
  { slug: "ph-produit-nettoyage-quel-choisir", title: "pH d'un produit de nettoyage : lequel choisir et quand", description: "Acide, neutre, alcalin : adapter le produit au type de salissure.", category: "Produits & techniques", date: "2025-02-03" },
  { slug: "detartrant-sanitaires-choisir", title: "Choisir un détartrant pour sanitaires professionnels", description: "Force, compatibilité matériaux et précautions d'usage.", category: "Produits & techniques", date: "2025-01-27" },
  { slug: "degraissant-cuisine-professionnelle", title: "Dégraissant pour cuisine professionnelle : guide d'achat", description: "Hottes, sols, plans : sélectionner les bons produits par zone.", category: "Produits & techniques", date: "2025-01-20" },
  { slug: "desinfection-poignees-portes", title: "Désinfection des poignées de porte : la routine qui change tout", description: "Fréquence, produits et organisation en période épidémique.", category: "Conseils d'entretien", date: "2025-01-13" },
  { slug: "garder-cuisine-bureau-propre", title: "Garder la cuisine du bureau propre entre deux passages", description: "Règles simples à afficher pour l'équipe et bons réflexes.", category: "Conseils d'entretien", date: "2025-01-06" },
  { slug: "combien-coute-nettoyage-bureaux-m2", title: "Combien coûte un nettoyage de bureaux au m² ?", description: "Fourchettes de prix, facteurs qui font varier le devis et pièges à éviter.", category: "FAQ", date: "2024-12-30" },
  { slug: "frequence-nettoyage-bureaux-recommandee", title: "Quelle fréquence de nettoyage pour des bureaux ?", description: "Quotidien, 3 fois par semaine, hebdomadaire — comment décider.", category: "FAQ", date: "2024-12-23" },
  { slug: "nettoyage-jour-vs-soir-avantages", title: "Nettoyage de jour ou de soir : avantages et inconvénients", description: "Coût, visibilité, qualité perçue : le débat tranché.", category: "FAQ", date: "2024-12-16" },
  { slug: "etude-cas-siege-tertiaire-paris", title: "Étude de cas : reprise du nettoyage d'un siège tertiaire à Paris", description: "12 000 m², 80 collaborateurs ELITESY, gains de qualité mesurés.", category: "Études de cas", date: "2024-12-09" },
];

export function getPostBySlug(slug: string): Post | undefined {
  return publishedPosts.find((p) => p.slug === slug);
}

export function getAllPostsForListing(): Array<{ slug: string; title: string; description: string; category: string; date: string; hero?: string; status: "published" | "planned" }> {
  const published = publishedPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
    date: p.date,
    hero: p.hero,
    status: "published" as const,
  }));
  const planned = plannedPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
    date: p.date,
    status: "planned" as const,
  }));
  return [...published, ...planned].sort((a, b) => b.date.localeCompare(a.date));
}