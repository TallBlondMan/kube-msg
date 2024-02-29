FROM node:alpine

ENV PG_USER='admin'
ENV PG_HOST='db'
ENV PG_DATABASE='trunk'
ENV PG_PASSWORD='pass1'
ENV PG_PORT='5432'

WORKDIR /app
# COPY package.json .
# RUN npm install
COPY app.js .
RUN node app.js
EXPOSE ${PG_PORT}