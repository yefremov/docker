# golang image
FROM golang

# copy sources to app directory
COPY . /go/src/app

# set working directory to app
WORKDIR /go/src/app

# download packages and dependencies
RUN go get -d -v

# compile and install packages and dependencies
RUN go install -v

# run application
CMD ["app"]
