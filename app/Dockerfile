FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production
RUN apt install net-tools
RUN apt install lsof
RUN apt install htop

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]