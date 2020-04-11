# Tarea7_SA

## Autor: Yoselin Annelice Lemus López

## Archivos utilizados
Se hizo uso de los siguientes archivos para la implementacion de la tarea 7.
- Dockerfile
- docker-compose.yml
- .env
- comandos.sh
- gulpfile.js
- api/index.js
- api/home.html

---
## Archivo Dockerfile
El archivo Dockerfile sirve para generar la imagen que se utiliza para crear el contenedor para correr la aplicacion de node, para crear el artefacto y que posteriormente serviria para el despliegue de la misma.

```
FROM node:10.0.0 
COPY api api/
RUN mkdir /copia
WORKDIR /api

RUN apt-get update -y
RUN apt-get install nano -y
RUN apt-get install unzip -y
RUN npm install gulp -g
RUN npm install
RUN gulp zip_tarea 

CMD ["npm", "start"]
```
## Archivo docker-compose.yml
Aquí es donde se crean el contenedor:
- app

```
version: "3.7"

services:
    app:
        build: ./NODEJS/
        container_name: app
        ports:
           - 3000:3000
        volumes:
            - type: bind
              source: ./dist
              target: /api/dist
            - type: bind
              source: ./NODEJS/api
              target: /copia
        environment:
          - NODE_UID=${NODE_UID}
          - NODE_GID=${NODE_GID}
        command: npm start
        networks:
            - tarea

networks:
    tarea:
        driver: bridge
```
---

## Como Correr el docker compose
Ubicarse en la carpeta raiz, donde se encuentra el archivo docker-compose.yml.

Abrir una terminal en esta ubicacion y escribir el siguiente comando:

```
docker-compose up -d
```
Nota: -d para ejecutar todo en segundo plano.

## Como bajar los contenedores que levanto docker compose
Para bajar los contenedores que fueron creados y levantados con el comando anterior, solo seguir las mismas intrucciones que para correrlo, con la excepsion del comando, ahora el comando que tiene que escribir es el siguiente:

```
docker-compose down
```
---
## Como ingresar al contedor
Parar ingresar al contenedor basta con escribir el siguiente comando en la consola
```
docker exec -it app /bin/bash
```
## Como desplegar la aplicacion
Hay dos formas para desplegar la aplicacion:
- Fuera de contenedor
- Dentro del contenedor

### Fuera del contenedor
Para desplegar la version actual de la aplicación basta con correr el siguiente comando
```
docker exec -it app /bin/bash comandos.sh
```
### Dentro del contenedor
- Para realizar un cambio dirigirse a la carpeta /copia
- Ya que haya echo el cambio en algun archivo, por ejemplo en index.html
- Ubicarse en la carpeta /copia y correr el siguiente comando
```
sh comandos.sh
```
- Despues salir del contenedor, escribiendo exit
- Y por último volver a correr el docker compose
---
## Video de demostracion
[![Ver video en youtube](https://i9.ytimg.com/vi/8fUkwa8V1EA/mq2.jpg?sqp=CMOXyPQF&rs=AOn4CLChb6D_DPWQcg2gDNhB_9zYpjcP1Q)](https://youtu.be/8fUkwa8V1EA)