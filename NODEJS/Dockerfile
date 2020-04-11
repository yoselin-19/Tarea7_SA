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