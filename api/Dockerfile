FROM node:20

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

EXPOSE 8000
CMD [ "npm", "start" ]
