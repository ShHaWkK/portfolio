# API Portfolio - Configuration

## Configuration de l'envoi d'emails

Cette API utilise Nodemailer pour envoyer des emails via SMTP.

### Variables d'environnement requises

Assurez-vous de configurer les variables suivantes dans votre environnement Vercel :

```env
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-app-password
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_TO=recipient-email@example.com
```

### Configuration Gmail

Pour utiliser Gmail :

1. Activez l'authentification à deux facteurs
2. Générez un mot de passe d'application
3. Utilisez ces paramètres :
   - `SMTP_HOST=smtp.gmail.com`
   - `SMTP_PORT=587`
   - `SMTP_SECURE=false`
   - `SMTP_USER=votre-email@gmail.com`
   - `SMTP_PASSWORD=votre-mot-de-passe-application`

### Déploiement sur Vercel

1. Configurez les variables d'environnement dans le dashboard Vercel
2. Redéployez l'application
3. L'API sera disponible à `/api/send-email`

### Test local

Pour tester en local, créez un fichier `.env` avec vos variables d'environnement.