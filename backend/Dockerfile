FROM node:alpine

ENV PG_USER='admin'
ENV PG_HOST='db'
ENV PG_DATABASE='trunk'
ENV PG_PASSWORD='pass1'
ENV PG_PORT='5432'
ENV APP_PORT='3000'

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE ${APP_PORT}
CMD [ "node", "app.js" ]