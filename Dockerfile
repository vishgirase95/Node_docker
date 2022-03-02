FROM node:14
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
EXPOSE 3306
CMD ["node","index.js"]

