# Portfolio d'Alexandre UZAN

Portfolio professionnel moderne et réactif pour présenter mes compétences en tant qu'Administrateur Systèmes, Réseaux & Sécurité, spécialisé en cybersécurité.

## 🚀 Fonctionnalités

- **Design moderne** avec animations fluides et effets visuels
- **Mode sombre/clair** avec bascule et persistance des préférences
- **Responsive** pour tous les appareils (mobile, tablette, desktop)
- **Animations** avec Framer Motion pour une expérience utilisateur engageante
- **Accessibilité** avec attributs ARIA et navigation au clavier
- **SEO optimisé** avec métadonnées et balises Open Graph
- **Multilinguisme** avec support pour le français et l'anglais
- **Formulaire de contact** avec envoi d'emails via SMTP

## 🛠️ Technologies utilisées

- **React** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool et serveur de développement
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Bibliothèque d'animations
- **Lucide React** - Icônes SVG
- **i18next** - Internationalisation
- **Nodemailer** - Envoi d'emails

## 📋 Sections

- **Hero** - Introduction et présentation
- **À propos** - Parcours et présentation personnelle
- **Compétences** - Compétences techniques et professionnelles
- **Expérience** - Parcours professionnel
- **Projets** - Projets significatifs
- **Certifications** - Formations et certifications
- **Publications** - Articles et conférences
- **Contact** - Formulaire de contact et informations

## 🚀 Installation et démarrage

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/portfolio-alexandre.git
cd portfolio-alexandre

# Installer les dépendances
npm install
# ou
yarn install

# Configurer les variables d'environnement
cp .env.example .env.local
# Puis modifiez .env.local avec vos informations SMTP

# Démarrer le serveur de développement
npm run dev
# ou
yarn dev
```

L'application sera disponible à l'adresse [http://localhost:5173](http://localhost:5173).

### Configuration SMTP pour le formulaire de contact

Pour que le formulaire de contact fonctionne, vous devez configurer les variables d'environnement SMTP dans le fichier `.env.local` :

```
# Configuration SMTP pour le formulaire de contact
VITE_SMTP_USER=votre-email@gmail.com
VITE_SMTP_PASSWORD=votre-mot-de-passe-app
VITE_SMTP_HOST=smtp.gmail.com
VITE_SMTP_PORT=587
VITE_SMTP_SECURE=false
VITE_SMTP_TO=email-destinataire@gmail.com

# Configuration de langue par défaut
VITE_DEFAULT_LANGUAGE=fr
```

> **Note**: Pour Gmail, vous devez utiliser un "mot de passe d'application" et non votre mot de passe principal. Vous pouvez en créer un dans les paramètres de sécurité de votre compte Google.

### Build pour la production

```bash
npm run build
# ou
yarn build
```

## 🐳 Docker

Vous pouvez également exécuter l'application avec Docker :

```bash
# Construire l'image
docker build -t portfolio-alexandre .

# Exécuter le conteneur
docker run -p 8080:80 portfolio-alexandre
```

L'application sera disponible à l'adresse [http://localhost:8080](http://localhost:8080).

## 📝 Personnalisation

Vous pouvez personnaliser le portfolio en modifiant les fichiers suivants :

- `src/components/*.tsx` - Composants React pour chaque section
- `tailwind.config.js` - Configuration des couleurs, polices et thèmes
- `public/` - Ressources statiques (favicon, images, etc.)
- `public/locales/` - Fichiers de traduction pour le multilinguisme

### Multilinguisme

Le projet supporte le français et l'anglais. Les fichiers de traduction se trouvent dans le dossier `public/locales/`.

Pour ajouter une nouvelle langue :

1. Créez un nouveau dossier dans `public/locales/` avec le code de la langue (ex: `de` pour l'allemand)
2. Copiez les fichiers JSON depuis le dossier `fr` ou `en` et traduisez-les
3. Ajoutez la nouvelle langue dans le composant `src/components/LanguageSwitcher.tsx`

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

Créé avec ❤️ par Alexandre UZAN
