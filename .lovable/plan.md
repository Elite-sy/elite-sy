
## Contexte

Le ZIP GitHub contient le **code source** du projet (TanStack Start + React). Il ne peut **pas** être uploadé tel quel sur O2switch : un hébergement mutualisé PHP n'exécute pas Node.js, donc on ne peut pas y lancer `npm run dev` ni le serveur SSR.

La bonne approche : **générer une version 100% statique** (HTML/CSS/JS pré-rendus) du site, puis uploader uniquement ce dossier compilé via FTP dans `public_html/` chez O2switch.

Bonne nouvelle : votre site est purement vitrine (le formulaire de contact ne fait qu'un `setState` local, aucune écriture serveur). Il se prête parfaitement au pré-rendu statique.

## Ce qu'il faut faire

### 1. Activer le pré-rendu statique dans `vite.config.ts`
Configurer Nitro en preset `static` et lister toutes les routes à pré-rendre (accueil, propreté + sous-pages, soft-facility, AMO, contact, mentions légales, blog index + chaque article, sitemap.xml).

Le résultat du build sera un dossier `.output/public/` contenant un `index.html` par page, plus les assets (`/assets/*`, images, robots.txt, sitemap.xml).

### 2. Créer un fichier `.htaccess` pour O2switch
À placer à la racine du site uploadé. Il sert à :
- Servir les bons fichiers `index.html` pour les URLs propres (`/contact` → `/contact/index.html`)
- Rediriger les 404 vers une page d'erreur
- Forcer HTTPS
- Activer la compression Gzip et le cache navigateur pour les assets

### 3. Compiler le site
Sur votre machine locale (besoin de Node.js installé une seule fois) :
```bash
npm install
npm run build
```
Le dossier `.output/public/` sera prêt à uploader.

### 4. Upload sur O2switch
Via FileZilla ou le gestionnaire de fichiers cPanel :
- Tout le contenu de `.output/public/` → dans le dossier `public_html/` (ou le sous-dossier de votre domaine)
- Inclure le fichier `.htaccess` créé

## Réponses directes à vos questions

- **Le ZIP GitHub suffit-il ?** Non. C'est le code source, pas le site compilé. Il faut le « builder ».
- **Faut-il un fichier "dev" ?** Non — `dev` sert uniquement à coder localement. Pour la production, c'est `build` qui compte.
- **Faut-il d'autres fichiers ?** Oui, deux ajustements dans le repo (`vite.config.ts` reconfiguré + un `.htaccess`), puis on compile et on uploade le résultat.

## Détails techniques

- Changer `vite.config.ts` : `tanstackStart.server.preset = "static"` + bloc `prerender.routes` listant toutes les URLs publiques.
- Ajouter `public/.htaccess` (copié automatiquement à la racine du build) avec règles SPA-friendly, HTTPS, gzip, cache.
- Articles de blog : itérer sur `src/data/blog/index.ts` pour générer la liste des slugs au build.
- `src/routes/sitemap[.]xml.ts` sera transformé en fichier `sitemap.xml` statique au pré-rendu.
- Aucune modification fonctionnelle, design ou contenu : uniquement de la configuration de build.

## Limites à connaître

- Tout contenu vraiment dynamique futur (vrai envoi de formulaire, login, BDD) nécessitera un service tiers (ex : Formspree pour le formulaire de contact) puisque O2switch mutualisé ne peut pas exécuter le backend Node.
- Chaque modification de contenu = recompiler + ré-uploader.
