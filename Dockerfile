FROM node:14.13.1-stretch-slim as builder
WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .
RUN CI= npm run build --release

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

