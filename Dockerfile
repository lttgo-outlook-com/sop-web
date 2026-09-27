# Stage 1: Build Quartz static site
FROM node:22-slim AS builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npx quartz build

# Stage 2: Serve with lightweight Nginx
FROM nginx:alpine-slim
COPY --from=builder /usr/src/app/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
