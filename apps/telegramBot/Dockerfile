FROM aybykovskii/daylik-base:latest

WORKDIR /app

ARG NODE_ENV
ARG BOT_PORT
ARG TG_BOT_TOKEN
ARG OPENAI_API_KEY

ENV NODE_ENV=${NODE_ENV}
ENV BOT_PORT=${BOT_PORT}
ENV TG_BOT_TOKEN=${TG_BOT_TOKEN}
ENV OPENAI_API_KEY=${OPENAI_API_KEY}

COPY apps/telegramBot/bot.ts ./apps/telegramBot/
COPY apps/telegramBot/global.d.ts ./apps/telegramBot/
COPY apps/telegramBot/tsconfig.json ./apps/telegramBot/
COPY apps/telegramBot/package.json ./apps/telegramBot/
COPY ./prompts.json ./apps/telegramBot/

RUN pnpm install --filter=telegram_bot --frozen-lockfile

COPY apps/telegramBot/handlers ./apps/telegramBot/handlers
COPY apps/telegramBot/helpers ./apps/telegramBot/helpers
COPY apps/telegramBot/middlewares ./apps/telegramBot/middlewares
COPY apps/telegramBot/types ./apps/telegramBot/types

EXPOSE ${BOT_PORT}

CMD ["bun", "run", "telegramBot:run"]