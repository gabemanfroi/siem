#builds the application
FROM node:16-alpine AS builder

WORKDIR /app
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY .env /app/.env
RUN yarn
COPY . /app
RUN yarn build

#serves the application
FROM nginx:1.20-alpine

COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
