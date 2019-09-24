FROM node:12.10.0-buster
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# RUN npm run test

ENV PORT=5000

EXPOSE 5000
CMD ["node", "index.js"]
