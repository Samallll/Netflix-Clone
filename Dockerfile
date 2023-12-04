FROM node:latest

WORKDIR /app

#adding the node's bin folder to the path
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install -silent
RUN npm install react-scripts@5.0.1 -g --silent

COPY . ./
CMD ["npm", "start"]