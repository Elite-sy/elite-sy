Mise à jour du numéro de téléphone dans les données structurées et le contenu SEO.

## État actuel
Le numéro `+33 6 09 16 50 99` est déjà correct dans :
- `src/components/site/Footer.tsx` (affichage)
- `src/routes/contact.tsx` (affichage + schema.org LocalBusiness)
- `src/routes/__root.tsx` (schema.org Organization)

## Problème identifié
Un ancien numéro `+33 1 00 00 00 00` persiste à la ligne 267 de `src/routes/mentions-legales.tsx` (section "Coordonnées du DPO").

## Actions
1. Remplacer `+33 1 00 00 00 00` par `+33 6 09 16 50 99` dans `src/routes/mentions-legales.tsx` ligne 267.
2. Vérifier qu'aucune autre occurrence d'ancien numéro ne subsiste.