FROM node:slim
WORKDIR /testapp
COPY . /testapp
RUN npm install
EXPOSE 4000
CMD npm start