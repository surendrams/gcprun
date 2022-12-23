FROM node

WORKDIR /app

ADD . /app

CMD node server.js
