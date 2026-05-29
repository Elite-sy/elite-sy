## Objectif
Utiliser l'image fournie (`elitesy_page_acceuil_final.png`) comme visuel principal de la section "Nos métiers" sur la page d'accueil, et en extraire les textes/style pour réécrire cette section.

## Modifications

1. **Copier l'image** dans `src/assets/services-trio.jpg` (référence visuelle officielle des 3 métiers).

2. **Régénérer les 3 images individuelles** (`proprete.jpg`, `soft-facility.jpg`, `amo.jpg`) en recadrant chaque panneau de l'image fournie, pour que les pages services correspondent visuellement à la nouvelle page d'accueil (cohérence bleu nuit + or, ambiance réaliste métier).

3. **Mettre à jour `src/routes/index.tsx`** — section "Services / Nos métiers" :
   - Remplacer la grille actuelle par un triptyque inspiré de l'image (numérotation 1·2·3, icône dans cercle doré, titre + sous-titre en majuscules, court paragraphe descriptif).
   - Reprendre les textes exacts de l'image :
     - **1. PROPRETÉ** — *Pour professionnels* — "Des prestations de nettoyage sur-mesure pour des environnements propres, sains et accueillants."
     - **2. SERVICES DU SOFT FACILITY** — "Gestion multiservices de vos bâtiments : maintenance, accueil, espaces verts, courrier, petits travaux… Nous simplifions votre quotidien."
     - **3. AMO** — *Assistance à maître d'ouvrage* — "Un accompagnement indépendant à chaque étape de votre projet pour sécuriser vos décisions et garantir la réussite."
   - Chaque carte garde un lien vers `/proprete`, `/soft-facility`, `/amo`.

4. **Correctif hydratation** (silencieux) : dans `Footer.tsx`, supprimer l'espace texte parasite à côté de l'icône `<Mail />` qui cause l'erreur d'hydratation SSR.

## Hors-scope
- Pas de changement des pages services individuelles (textes conservés).
- Pas de changement de palette ni de typo.
