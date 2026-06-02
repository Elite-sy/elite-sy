## Objectif

Générer le ZIP `elitesy-o2switch-*.zip` directement depuis Lovable et te le rendre téléchargeable en un clic, sans avoir besoin d'installer Node.js sur ta machine.

## Étapes

1. **Lancer le build statique** dans le sandbox Lovable
   - Commande : `npm run build:o2switch`
   - Résultat : `.output/public/` (HTML pré-rendu de toutes les pages + assets + `.htaccess`) puis ZIP créé dans `dist-o2switch/`.

2. **Vérifier le contenu du ZIP**
   - Confirmer la présence de `.htaccess`, `index.html`, `sitemap.xml`, `robots.txt`, dossier `assets/`, et des pages clés (`contact/`, `proprete/`, `blog/`, articles).
   - Afficher la taille finale du ZIP.

3. **Copier le ZIP dans `/mnt/documents/`** pour le rendre téléchargeable
   - Renommage propre : `elitesy-o2switch.zip`.
   - Émission d'un `<presentation-artifact>` pour que tu cliques et télécharges directement depuis le chat.

4. **Rappel d'upload sur O2switch**
   - cPanel → Gestionnaire de fichiers → `public_html/` → Téléverser le ZIP → clic droit Extraire → supprimer le ZIP → activer SSL Let's Encrypt.

## Notes techniques

- Le build prend ~1 à 3 min (90+ pages à pré-rendre).
- Si le build échoue, je lis les logs Vite et corrige avant de re-générer.
- À chaque future mise à jour du site, il suffira de redemander « génère le ZIP » et je relancerai les mêmes étapes.

## Limite à garder en tête

Le formulaire de contact reste non fonctionnel côté envoi d'email (purement visuel). Si tu veux le rendre opérationnel, il faudra brancher Formspree / Web3Forms / un script PHP O2switch — à traiter dans une demande séparée.
