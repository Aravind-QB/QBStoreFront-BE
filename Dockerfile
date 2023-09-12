# FROM node:18.13.0
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# RUN npm i -g pm2
# COPY package.json /usr/src/app
# COPY  . /usr/src/app/
# RUN npm install
# CMD [ "pm2","start","--interpreter","none",'"ts-node index.ts"' ]

# CMD ["npm","start"]

FROM node:18.13.0 as base

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

FROM base as production

ENV NODE_PATH=./build

RUN npm run build