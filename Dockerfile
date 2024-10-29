#Imagen base
FROM node:lts

#Creamos un directorio de trabajo
RUN mkdir app

#Asignamos un espacio de trabajo
WORKDIR /app

#Copiamos nuestos documentos
COPY . .

#Instalamos
RUN npm install

#Exponemos el puerto
EXPOSE 4321

#Ejecutamos la app
CMD ["npm","run","dev","--","--host"]