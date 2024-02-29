FROM node:alpine AS build-stage
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:alpine
WORKDIR /app
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/app.conf /etc/nginx/conf.d/
ENV VUE_APP_API_HOST=''
ENV VUE_APP_API_PORT=''
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]