FROM node:16-alpine
RUN apk add dumb-init
ENV NODE_ENV=production

WORKDIR /app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN yarn install --prod

COPY app.js /app/app.js

USER node

CMD ["dumb-init", "node", "app.js"]
