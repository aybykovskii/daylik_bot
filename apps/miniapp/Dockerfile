FROM aybykovskii/daylik-base:latest

WORKDIR /app

ARG NODE_ENV
ARG VITE_ENV
ARG MINI_APP_PORT

ENV NODE_ENV=${NODE_ENV}
ENV VITE_ENV=${VITE_ENV}
ENV MINI_APP_PORT=${MINI_APP_PORT}

COPY apps/miniapp/ ./apps/miniapp/

EXPOSE ${MINI_APP_PORT}

CMD ["bun", "run", "miniapp"]