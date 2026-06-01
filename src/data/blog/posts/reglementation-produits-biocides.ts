import type { Post } from "../types";
import hero from "@/assets/blog/produits-ecologiques.jpg";

export const post: Post = {
  slug: `reglementation-produits-biocides`,
  title: `Réglementation des produits biocides en France : ce qu'il faut savoir`,
  description: `Réglementation BPR (UE) 528/2012 : autorisations, étiquetage et obligations de l'utilisateur professionnel de biocides.`,
  category: `Normes & réglementations`,
  date: `2025-05-26`,
  readingTime: 8,
  hero,
  heroAlt: `Étagère de produits biocides étiquetés en milieu professionnel`,
  intro: `Les produits biocides (désinfectants, raticides, insecticides) sont strictement encadrés en France et dans l'UE par le règlement BPR. Tout utilisateur professionnel doit connaître ses obligations sous peine de sanctions importantes.`,
  content: [
    { type: "h2", text: `Le cadre réglementaire` },
    { type: "p", text: `Règlement (UE) 528/2012 dit Biocidal Products Regulation (BPR) : transposé en droit français par les articles L.522-1 et suivants du Code de l'environnement. Encadre la mise sur le marché et l'utilisation des biocides : substances actives et produits formulés.` },
    { type: "h2", text: `Définition d'un biocide` },
    { type: "p", text: `Toute substance ou mélange destiné à détruire, repousser ou neutraliser les organismes nuisibles par action chimique ou biologique. Inclut désinfectants surfaces, gels hydroalcooliques mains, raticides, insecticides, fongicides, conservateurs.` },
    { type: "h2", text: `Les 22 types de produits (TP)` },
    { type: "ul", items: [
      `TP 1 : hygiène humaine (gels mains)`,
      `TP 2 : désinfectants surfaces sans contact alimentaire`,
      `TP 3 : hygiène vétérinaire`,
      `TP 4 : surfaces en contact alimentaire`,
      `TP 11 : conservateurs de l'eau`,
      `TP 14 : rodenticides (raticides)`,
      `TP 18 : insecticides`
    ] },
    { type: "h2", text: `Autorisation de mise sur le marché` },
    { type: "p", text: `Tout produit biocide doit faire l'objet d'une autorisation (ECHA pour l'UE, ou autorisation nationale ANSES). Numéro d'AMM obligatoire sur l'étiquette. Sans AMM, le produit est illégal. Vérification possible sur le site simmbad.fr (ANSES).` },
    { type: "h2", text: `Les obligations de l'utilisateur professionnel` },
    { type: "ul", items: [
      `Utiliser uniquement des produits autorisés (avec AMM)`,
      `Respecter les conditions d'usage (dose, fréquence, zones)`,
      `Conserver les fiches de données de sécurité (FDS)`,
      `Stocker selon les recommandations (local fermé, ventilé)`,
      `Former les utilisateurs (Certibiocide pour TP 14 et 18)`,
      `Tenir un registre des utilisations (pour TP 14, 18)`,
      `Éliminer les déchets selon filière agréée`
    ] },
    { type: "h2", text: `Le Certibiocide` },
    { type: "p", text: `Certification obligatoire pour la vente, l'achat ou l'usage professionnel de rodenticides (TP 14) et insecticides (TP 8, 14, 18). Formation 2 jours + examen, valable 5 ans renouvelable. ELITESY ne pratique pas la lutte antiparasitaire interne mais sous-traite à entreprises certifiées Certibiocide.` },
    { type: "h2", text: `L'étiquetage CLP` },
    { type: "p", text: `Classification, Labelling and Packaging (règlement 1272/2008) : pictogrammes de danger, mentions de danger H, conseils de prudence P. Lecture obligatoire avant utilisation. Les pictogrammes orange ont été remplacés par les nouveaux pictogrammes blancs sur fond rouge depuis 2017.` },
    { type: "callout", text: `ELITESY utilise uniquement des biocides autorisés ANSES, avec FDS classées et accessibles aux agents. Privilégie les produits Ecolabel chaque fois que possible. 06 09 16 50 99.` },
    { type: "h2", text: `La substitution Ecolabel` },
    { type: "p", text: `Le règlement BPR encourage la substitution des biocides par alternatives moins dangereuses : produits Ecolabel européen, vapeur, eau pure osmosée. Démarche RSE valorisée et souvent demandée par les grands donneurs d'ordre.` },
    { type: "h2", text: `Les sanctions` },
    { type: "p", text: `Utilisation d'un biocide sans AMM : 75 000 € d'amende. Non-respect des conditions d'usage : 30 000 €. Défaut Certibiocide : sanctions administratives + interdiction d'exercice. Contrôles par DREAL et police de l'environnement.` },
    { type: "h2", text: `Le registre des biocides` },
    { type: "p", text: `Pour TP 14 et 18, tenu obligatoirement : date, produit, zone traitée, opérateur, quantité utilisée. Conservation 5 ans. Présentation sur demande contrôle.` },
    { type: "h2", text: `Les exigences clients` },
    { type: "p", text: `De plus en plus, les donneurs d'ordre exigent : liste des produits utilisés avec AMM, FDS, Ecolabel ou équivalent. Critère de choix d'un prestataire. Sécurité juridique partagée entre prestataire et client.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `La réglementation biocides est exigeante mais protectrice. Travailler avec un prestataire qui la respecte est un gage de fiabilité juridique, environnementale et sanitaire.` }
  ],
  status: "published",
};
