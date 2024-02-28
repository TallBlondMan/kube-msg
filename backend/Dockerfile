FROM node:alpine
WORKDIR /app
# COPY package.json .
# RUN npm install
COPY app.js .
RUN node app.js
EXPOSE 5432