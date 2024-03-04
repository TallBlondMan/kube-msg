FROM node:alpine AS build-stage
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:alpine
WORKDIR /app
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx /app/nginx
RUN chmod +x ./nginx/nginx.sh
ENV VUE_APP_API_HOST='backend'
ENV VUE_APP_API_PORT='3000'
EXPOSE 80
ENTRYPOINT [ "/app/nginx/nginx.sh" ]