# Configuration Email API pour Vercel

## Problème résolu

Le build Vercel affichait des avertissements concernant l'externalisation du module `stream` de nodemailer pour la compatibilité navigateur. Cela était dû à l'utilisation incorrecte de nodemailer côté client.

## Solution implémentée

### 1. API Route Vercel
- Création de `/api/send-email.js` pour gérer l'envoi d'emails côté serveur
- Utilisation de nodemailer uniquement côté serveur où il est approprié
- Gestion des CORS et validation des données

### 2. Service client modifié
- Modification de `src/services/emailService.ts` pour utiliser `fetch()` au lieu de nodemailer
- Appel HTTP vers l'API route `/api/send-email`
- Suppression de la dépendance nodemailer côté client

### 3. Variables d'environnement

#### Variables serveur (Vercel)
```
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@domain.com
SMTP_PASSWORD=your-password
SMTP_TO=contact@domain.com
```

#### Variables client (supprimées)
Les variables `VITE_SMTP_*` ont été supprimées car elles ne sont plus nécessaires côté client.

### 4. Optimisations build
- Configuration du code splitting dans `vite.config.js`
- Séparation des chunks par catégorie (vendor, motion, i18n, icons)
- Augmentation de la limite d'avertissement de taille de chunk

## Résultats

✅ Plus d'avertissements nodemailer dans le build
✅ Chunks optimisés et mieux organisés
✅ Architecture client/serveur correcte
✅ Sécurité améliorée (credentials côté serveur uniquement)

## Déploiement

1. Configurer les variables d'environnement dans Vercel Dashboard
2. Déployer le projet
3. L'API route sera automatiquement disponible à `/api/send-email`

## Test local

Pour tester localement avec Vercel CLI :
```bash
npm i -g vercel
vercel dev
```

Cela démarrera le serveur local avec les API routes fonctionnelles.