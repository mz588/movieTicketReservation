FROM node:14-alpine
WORKDIR /etc/frontend

COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 3000
RUN yarn build

CMD ["npm", "start"]