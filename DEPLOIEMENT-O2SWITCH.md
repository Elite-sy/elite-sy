# Déploiement sur O2switch (mutualisé)

Le site est configuré pour être **pré-rendu en HTML statique**. Aucun serveur Node.js n'est nécessaire sur O2switch.

## 1. Prérequis (une seule fois sur votre machine)

Installer [Node.js LTS](https://nodejs.org/) (version 20 ou supérieure).

## 2. Compiler le site

Dans le dossier du projet (extrait du ZIP GitHub) :

```bash
npm install
npm run build:o2switch
```

Cette commande **compile le site puis génère automatiquement un ZIP** prêt à uploader :

- Build statique → `.output/public/`
- Archive ZIP → `dist-o2switch/elitesy-o2switch-YYYY-MM-DD-HH-MM.zip`

Vous pouvez aussi lancer les étapes séparément :

```bash
npm run build          # compile uniquement
npm run zip:o2switch   # zippe .output/public/
```

Contenu du build (`.output/public/`) :
- un `index.html` par page (`/contact/index.html`, `/blog/<slug>/index.html`, etc.)
- les assets dans `/assets/`, `/_build/`, les images, `robots.txt`, `sitemap.xml`
- le fichier `.htaccess` (config Apache pour O2switch)

## 3. Upload sur O2switch

**Méthode rapide (recommandée) — via cPanel :**

1. Connectez-vous à cPanel O2switch → **Gestionnaire de fichiers**.
2. Allez dans `public_html/` (ou le dossier de votre domaine).
3. Cliquez sur **Téléverser** et envoyez le fichier `elitesy-o2switch-*.zip`.
4. Clic droit sur le ZIP → **Extraire** → confirmer.
5. Supprimer le ZIP après extraction.
6. Activer le certificat **SSL Let's Encrypt** depuis cPanel → SSL/TLS Status.

**Méthode alternative — via FileZilla (FTP) :**

Uploader le contenu du dossier `.output/public/` (pas le dossier lui-même) dans `public_html/`. Activer "afficher les fichiers cachés" pour que `.htaccess` soit bien transféré.

## 4. À chaque mise à jour

1. `npm run build:o2switch`
2. Uploader le nouveau ZIP dans cPanel → extraire en écrasant.

## Limites importantes

- Le **formulaire de contact** ne fait actuellement qu'un retour visuel local — aucun email n'est envoyé. Pour le rendre fonctionnel, brancher un service externe (Formspree, Getform, Web3Forms, ou un script PHP côté O2switch).
- Toute future fonctionnalité dynamique (login, base de données, paiements) nécessitera un service tiers : O2switch mutualisé n'exécute pas Node.js.