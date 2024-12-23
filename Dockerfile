FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
COPY vite.config.* ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

ENV PORT=80

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
