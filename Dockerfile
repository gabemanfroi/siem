FROM node:16-alpine

WORKDIR /app
COPY package.json /app/package.json
COPY .env /app/.env
RUN yarn
COPY . /app
RUN yarn build

FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD [“nginx”, “-g”, “daemon off;”