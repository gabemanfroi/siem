FROM node:14.17-alpine

WORKDIR /app

COPY build ./build
COPY .env ./

RUN npm install -g serve

EXPOSE 3000

CMD serve -s build
