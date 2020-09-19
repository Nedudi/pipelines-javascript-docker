FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production
RUN apt-get update
RUN apt-get install net-tools
RUN apt-get install lsof
RUN apt-get install htop

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]