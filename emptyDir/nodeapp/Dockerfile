FROM node

RUN mkdir -p /app/src/nodeapp

WORKDIR /app/src/nodeapp/

COPY package*.json ./

RUN npm install --quiet

RUN npm i -g nodemon

COPY . .

CMD [ "npm","run","dev" ]

