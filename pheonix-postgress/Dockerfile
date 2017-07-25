# elixir image
FROM elixir:1.4

# set non-interactive mode
ENV DEBIAN_FRONTEND noninteractive

# install hex package manager
RUN mix local.hex --force

# install rebar
RUN mix local.rebar --force

# install pheonix framework
RUN mix archive.install --force https://github.com/phoenixframework/archives/raw/master/phoenix_new.ez

# install npm
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -

# install node
RUN apt-get install -y -q nodejs

# install project skeleton
RUN mix phoenix.new web --no-brunch --no-ecto

# set working directory
WORKDIR /web

# install dependencies
RUN mix deps.get --force

# compile project
RUN mix compile --force

# expose application port
EXPOSE 4000

# run pheonix server
CMD ["mix", "phoenix.server"]
