FROM node:16-alpine

WORKDIR /app

COPY . /app
RUN yarn install --prod

CMD ["yarn", "start"]
