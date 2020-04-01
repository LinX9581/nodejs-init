FROM node:9.2.0

WORKDIR /app

COPY . /app

RUN npm install && npm cache clean --force

CMD node index.js