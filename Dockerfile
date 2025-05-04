FROM node:20-alpine as builder

ARG PROFILE
ENV PROFILE ${PROFILE}

WORKDIR /app


# Copy package.json and yarn.lock
COPY package.json yarn.lock ./


# Install dependencies
RUN yarn install --prefer-offline --non-interactive --production=false

# RUN yarn install \
#   --prefer-offline \
#   --non-interactive \
#   --production=false


COPY . .

COPY /assets/image /app/assets/image

RUN yarn build:$PROFILE

# RUN rm -rf node_modules

# FROM node:lts
FROM node:20-alpine

ARG PROFILE
ENV PROFILE ${PROFILE}

WORKDIR /app

COPY --from=builder /app  .

EXPOSE 8080
ENV HOST=0.0.0.0
ENV PORT=8080

# CMD [ "yarn", "start" ]
CMD ["sh", "-c", "yarn start:$PROFILE"]
# CMD [ "yarn", "start:$PROFILE" ]
