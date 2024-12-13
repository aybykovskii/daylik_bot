FROM aybykovskii/daylik-base:latest

WORKDIR /app

ARG NODE_ENV
ARG POSTGRES_HOST
ARG POSTGRES_PORT
ARG POSTGRES_USER
ARG POSTGRES_PASSWORD
ARG POSTGRES_DB
ARG SERVER_PORT=8080
ARG JWT_SECRET

ENV NODE_ENV=${NODE_ENV}
ENV SERVER_PORT=${SERVER_PORT}
ENV POSTGRES_HOST=${POSTGRES_HOST}
ENV POSTGRES_PORT=${POSTGRES_PORT}
ENV POSTGRES_USER=${POSTGRES_USER}
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
ENV POSTGRES_DB=${POSTGRES_DB}
ENV JWT_SECRET=${JWT_SECRET}

COPY apps/server/global.d.ts ./apps/server/
COPY apps/server/server.ts ./apps/server/
COPY apps/server/tsconfig.json ./apps/server/
COPY apps/server/package.json ./apps/server/
COPY apps/server/.sequelizerc ./apps/server/

RUN pnpm install --filter=server --frozen-lockfile

COPY apps/server/db ./apps/server/db
COPY apps/server/common ./apps/server/common
COPY apps/server/modules ./apps/server/modules

EXPOSE ${SERVER_PORT}

CMD ["bun", "run", "server:run"]