## Objectif

Créer une page dédiée pour chacun des 6 types de clients listés sur la page Propreté, et rendre les cartes cliquables.

## Approche

Réutiliser le pattern existant de `secteur.$slug.tsx` en créant une **route dynamique** `src/routes/proprete.$slug.tsx`. Une seule route, 6 contenus, URL propres.

URLs générées :
- `/proprete/bureaux-tertiaire` — Bureaux / Tertiaire
- `/proprete/syndics-copropriete` — Syndics de copropriétés
- `/proprete/professionnels-sante` — Professionnels de santé
- `/proprete/professionnels-batiment` — Professionnels du bâtiment
- `/proprete/surface-vente-erp` — Surface de vente / ERP
- `/proprete/industrie` — Industrie

## Étapes

1. **Créer `src/routes/proprete.$slug.tsx`** : route dynamique avec un objet `clients` contenant pour chaque slug : `label`, `tagline`, `intro`, `challenges[]`, `prestations[]`. Hero, intro, enjeux, prestations, lien vers autres clients, CTA contact — même structure visuelle que `secteur.$slug.tsx`. Inclut `notFoundComponent`, `errorComponent`, `head()` avec meta SEO par slug.

2. **Modifier `src/routes/proprete.tsx`** : ajouter un `slug` à chaque entrée de `features` et entourer chaque carte d'un `<Link to="/proprete/$slug" params={{ slug }}>` avec un indicateur visuel (flèche au hover). Cela demande d'ajouter un prop optionnel `featureSlugRoute` à `ServicePage` OU de remplacer la section Features inline dans `proprete.tsx`. Option retenue : étendre légèrement `ServicePage` pour accepter `slug?: string` sur chaque feature et wrapper en `<Link>` si présent — non-breaking pour les autres pages.

## Détails techniques

- Route file : `src/routes/proprete.$slug.tsx` → `createFileRoute("/proprete/$slug")`.
- Contenu : textes courts en français, à compléter ensuite par l'utilisateur si besoin. Je propose un premier jet réaliste basé sur les descriptions déjà présentes.
- `ServicePage.tsx` : type `features` devient `{ title; description; slug?: string }[]`. Si `slug` est présent → wrapper `<Link to="/proprete/$slug" params={{ slug }}>` avec hover state ; sinon comportement actuel inchangé.
- Pas de modif du `__root.tsx` ni de la navigation principale (les pages clients sont accessibles depuis Propreté).

## Questions

Voulez-vous que je rédige moi-même le contenu (intro, enjeux, prestations) de chaque page client, ou préférez-vous fournir les textes ?
