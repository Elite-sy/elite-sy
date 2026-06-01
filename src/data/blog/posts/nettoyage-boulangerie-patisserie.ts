import type { Post } from "../types";
import hero from "@/assets/blog/boulangerie.jpg";

export const post: Post = {
  slug: `nettoyage-boulangerie-patisserie`,
  title: `Nettoyage d'une boulangerie-pâtisserie : laminoir, fournil et vitrines`,
  description: `Hygiène et conformité DDPP pour le fournil, les vitrines et l'arrière-boutique d'une boulangerie-pâtisserie professionnelle.`,
  category: `Guides Pratiques`,
  date: `2025-09-15`,
  readingTime: 9,
  hero,
  heroAlt: `Vitrine d'une boulangerie-pâtisserie propre et lumineuse`,
  intro: `Boulangerie-pâtisserie : un environnement où la farine, la matière grasse et le sucre s'accumulent partout. Le nettoyage doit allier rigueur HACCP, méthodologie adaptée aux contraintes horaires (fermeture courte) et respect d'équipements spécifiques comme le laminoir ou le four.`,
  content: [
    { type: "h2", text: `Les trois zones à traiter distinctement` },
    { type: "p", text: `Le fournil (zone de production), le laboratoire pâtisserie (zone froide) et la boutique (vitrine, comptoir, sol clientèle) ont chacun leur protocole, leurs produits et leur fréquence. Mélanger les outils entre ces zones est une non-conformité majeure en cas de contrôle DDPP.` },
    { type: "h2", text: `Le fournil : pétrin, four, laminoir` },
    { type: "ol", items: [
      `Aspiration de la farine résiduelle (aspirateur à filtration HEPA)`,
      `Démontage des éléments amovibles du laminoir (tablier, rouleaux)`,
      `Dégraissage des parois et du sol au détergent alcalin alimentaire`,
      `Désinfection des plans de contact avec produit homologué EN 1276`,
      `Rinçage abondant (résidus interdits en contact alimentaire)`,
      `Séchage et remontage`
    ] },
    { type: "h2", text: `La vitrine et le comptoir client` },
    { type: "p", text: `Vitres et plexiglas nettoyés avec produit sans ammoniaque (l'odeur contamine les viennoiseries exposées). Plans de découpe lavés et désinfectés entre chaque service. Pinces et plateaux passés en machine professionnelle à 80 °C minimum.` },
    { type: "h2", text: `Le laminoir : précautions particulières` },
    { type: "p", text: `Brossage à sec d'abord (jamais d'eau directement sur les rouleaux qui rouilleraient), puis chiffon humide sur tablier inox. Démontage complet hebdomadaire avec produit dégraissant alimentaire. Le laminoir est le premier point contrôlé en inspection DDPP : conserver les fiches d'intervention.` },
    { type: "h2", text: `Les chambres froides et de pousse` },
    { type: "p", text: `Bionettoyage mensuel obligatoire : vidage complet, lavage parois et joints avec désinfectant alimentaire, vérification de l'étanchéité des joints, contrôle de la température après remise en service. Tracer chaque opération sur la fiche HACCP.` },
    { type: "callout", text: `ELITESY accompagne les boulangeries-pâtisseries indépendantes et chaînes franchisées sur Paris : nettoyage hebdomadaire, opérations périodiques sur laminoirs et chambres froides. Devis sous 48 h — 06 09 16 50 99.` },
    { type: "h2", text: `Le sol : un cas particulier` },
    { type: "p", text: `Sol carrelé fortement chargé en gras (beurre, huiles) et en farine. Aspiration impérative avant lavage : la farine + eau crée une pâte qui sature le matériel. Détergent alcalin tiède, deux passages, rinçage à l'eau claire.` },
    { type: "h2", text: `Lutte contre les nuisibles` },
    { type: "p", text: `La boulangerie est une cible privilégiée des rongeurs et insectes (farine, sucre). Plan de lutte intégré obligatoire : contrat dératisation avec professionnel certifié, pièges à phéromones pour mites alimentaires, traçabilité des passages.` },
    { type: "h2", text: `La traçabilité HACCP` },
    { type: "p", text: `Plan de Nettoyage et Désinfection (PND) affiché, fiches d'opération horodatées, fiches techniques produits, planning des opérations périodiques. Document obligatoire en cas de contrôle DDPP — son absence entraîne une mise en demeure immédiate.` },
    { type: "h2", text: `Délais et créneaux` },
    { type: "p", text: `Nettoyage quotidien (fermeture) : 1h30 à 2h en équipe de 2. Nettoyage hebdomadaire (laminoir + chambres) : 3h supplémentaires. Grand nettoyage trimestriel (sols décapés, hottes) : demi-journée prestataire.` },
    { type: "h2", text: `Externaliser : pourquoi c'est rentable` },
    { type: "p", text: `Un boulanger qui démarre à 4 h ne peut pas finir le nettoyage à 22 h. L'externalisation à un prestataire formé HACCP libère l'équipe production, garantit la conformité réglementaire et sécurise les contrôles. Investissement : 200 à 500 €/semaine selon surface.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `Le nettoyage en boulangerie-pâtisserie n'est pas une corvée annexe : c'est l'assurance de la qualité produit, de la sécurité sanitaire et de la pérennité de l'établissement face aux contrôles.` }
  ],
  status: "published",
};
