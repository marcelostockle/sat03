FROM node:18-alpine

RUN mkdir /app
RUN cd /app/ && npm i react@18.2.0 react-dom@18.2.0

COPY ./package.json /app/
RUN cd /app/ && npm i --legacy-peer-deps
RUN mkdir /app/public /app/src 
COPY ./vite.config.js ./index.html /app/
COPY ./public/ /app/public/
COPY ./src/ /app/src/

CMD cd /app/ && npm run dev
