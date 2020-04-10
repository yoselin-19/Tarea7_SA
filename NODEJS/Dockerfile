FROM node:10.0.0 
COPY api api/
WORKDIR /api
RUN apt-get update -y
RUN apt-get install nano -y
RUN npm install gulp -g
RUN npm install
VOLUME  ["/static"]

CMD ["npm", "start"]