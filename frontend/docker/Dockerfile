FROM node:20.11-bullseye-slim

WORKDIR /var/www/html

RUN apt-get update \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*