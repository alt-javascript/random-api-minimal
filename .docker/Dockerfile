FROM node:16-alpine
WORKDIR /app
COPY . /app/
RUN npm ci
EXPOSE 80
ENTRYPOINT ["npm", "start"]
