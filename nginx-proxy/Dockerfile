# node image
FROM mhart/alpine-node

MAINTAINER Anton Yefremov "<anton.yefremov@gmail.com>"

# copy to container
COPY ./server.js .

# expose port
EXPOSE 3000

# start server
CMD ["node", "server"]
