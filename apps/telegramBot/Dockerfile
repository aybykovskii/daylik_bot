FROM aybykovskii/daylik-base:latest

WORKDIR /app

COPY apps/telegramBot ./apps/telegramBot
RUN pnpm install --filter=telegram_bot --frozen-lockfile

ENV NODE_ENV=production

ARG BOT_PORT
ARG TG_BOT_TOKEN
ARG OPENAI_API_KEY

ENV BOT_PORT=${BOT_PORT}
ENV TG_BOT_TOKEN=${TG_BOT_TOKEN}
ENV OPENAI_API_KEY=${OPENAI_API_KEY}

EXPOSE ${BOT_PORT}

CMD ["bun", "./apps/telegramBot/bot.ts"]