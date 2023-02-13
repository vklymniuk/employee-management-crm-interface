FROM node:14.15.5 AS build

ENV API_URL=${API_URL}

RUN apt-get update && apt-get install -y build-essential
RUN apt-get update && apt-get install -y yarn
RUN yarn global add serve
RUN mkdir /home/build

WORKDIR /home/build

EXPOSE 80

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

CMD [ "serve", "-s", "build", "-l", "80" ]