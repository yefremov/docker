# node alpine image
FROM node:alpine

# copy package files to application directory
COPY . /var/node/koa-mongo

# set to application directory as working directory
WORKDIR /var/node/koa-mongo

# install package dependencies
RUN npm install

# expose local port
EXPOSE 3000

# run server script
CMD ["node", "server"]
