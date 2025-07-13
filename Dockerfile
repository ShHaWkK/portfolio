# Étape de build
FROM node:20-alpine as build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./

# Installer les dépendances
COPY node_modules.tar.gz ./

# Installer les dépendances à partir du cache si disponible
RUN if [ -f node_modules.tar.gz ]; then \
      tar -xzf node_modules.tar.gz; \
    else \
      npm ci; \
    fi

# Copier le reste des fichiers
COPY . .

# Construire l'application
RUN npm run build

# Étape de production avec Nginx
FROM nginx:stable-alpine

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers de build depuis l'étape précédente
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
