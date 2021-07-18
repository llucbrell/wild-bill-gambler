FROM node:12

WORKDIR /app

COPY package.json /app

RUN npm install --production

COPY ./build /app
COPY ./src/server /app/src/server

EXPOSE 8080

CMD ["node", "/app/src/server/index.js"]