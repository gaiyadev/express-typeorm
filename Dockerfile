FROM node:16.13.1

FROM postgres

WORKDIR  /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3000

CMD [ "npm", "start", "./src/app.ts" ]