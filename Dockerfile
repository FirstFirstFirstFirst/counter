FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV PORT=3000
ENV NEXT_PUBLIC_PORT=3000

CMD ["npm", "run", "dev"]
