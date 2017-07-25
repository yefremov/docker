# get latest alpine image
FROM alpine:latest

# install dependencies
RUN apk add --update \
    curl \
    vim \
 && rm -rf /var/cache/apk/*

# copy vim config
COPY vimrc /etc/vimrc

# set working directory
WORKDIR /usr/src
