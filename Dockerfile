FROM node

# Crear el directorio app
WORKDIR /usr/src/app

# Se utiliza un comodín para garantizar que se copien package.json Y package-lock.json
COPY package*.json ./

# Instalar dependencias de aplicaciones
RUN npm install

# Copiar el codigo de la aplicacion
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
