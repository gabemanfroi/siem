#builds the application
FROM node:16-alpine AS builder

ARG REACT_APP_ENVIRONMENT
ARG REACT_APP_HTTP_API_URL
ARG REACT_APP_TOKEN_KEY_NAME
ARG REACT_APP_WIDGETS_CONFIG_NAME
ARG REACT_APP_WS_API_URL

WORKDIR /app

COPY .env .env

COPY package.json /app/package.json


COPY yarn.lock /app/yarn.lock
RUN yarn
COPY . /app
RUN yarn build

FROM nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
