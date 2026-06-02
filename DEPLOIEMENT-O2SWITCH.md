# Déploiement sur O2switch (mutualisé)

Le site est configuré pour être **pré-rendu en HTML statique**. Aucun serveur Node.js n'est nécessaire sur O2switch.

## 1. Prérequis (une seule fois sur votre machine)

Installer [Node.js LTS](https://nodejs.org/) (version 20 ou supérieure).

## 2. Compiler le site

Dans le dossier du projet (extrait du ZIP GitHub) :

```bash
npm install
npm run build
```

Le résultat se trouve dans le dossier **`.output/public/`** :
- un `index.html` par page (`/contact/index.html`, `/blog/<slug>/index.html`, etc.)
- les assets dans `/assets/`, `/_build/`, les images, `robots.txt`, `sitemap.xml`
- le fichier `.htaccess` (config Apache pour O2switch)

## 3. Upload sur O2switch

Via **FileZilla** (FTP) ou le **gestionnaire de fichiers cPanel** :

1. Uploader **tout le contenu** de `.output/public/` (pas le dossier lui-même) dans :
   - `public_html/` si le domaine est le domaine principal
   - `public_html/votre-sous-dossier/` pour un sous-domaine / addon domain
2. Vérifier que le fichier `.htaccess` est bien présent (les fichiers commençant par un point sont parfois cachés — activer "afficher les fichiers cachés" dans FileZilla).
3. Activer le **certificat SSL gratuit Let's Encrypt** depuis cPanel → SSL/TLS Status.

## 4. À chaque mise à jour

1. `npm run build`
2. Réuploader le contenu de `.output/public/` (écraser).

## Limites importantes

- Le **formulaire de contact** ne fait actuellement qu'un retour visuel local — aucun email n'est envoyé. Pour le rendre fonctionnel, brancher un service externe (Formspree, Getform, Web3Forms, ou un script PHP côté O2switch).
- Toute future fonctionnalité dynamique (login, base de données, paiements) nécessitera un service tiers : O2switch mutualisé n'exécute pas Node.js.