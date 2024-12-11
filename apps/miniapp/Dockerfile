FROM aybykovskii/daylik-base:latest

WORKDIR /app

COPY apps/miniapp ./apps/miniapp
RUN pnpm install --filter=miniapp --frozen-lockfile

ENV NODE_ENV=development

ARG VITE_ENV
ARG MINI_APP_PORT

ENV VITE_ENV=${VITE_ENV}
ENV MINI_APP_PORT=${MINI_APP_PORT}

EXPOSE ${MINI_APP_PORT}

CMD ["bun", "run", "miniapp"]