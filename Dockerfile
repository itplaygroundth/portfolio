FROM node:16-alpine3.14

WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN apk add git && yarn
#RUN npm install -g npm@8.5.3
RUN npm install 
COPY . .
EXPOSE 3000

CMD [ "npm","run","production" ]

