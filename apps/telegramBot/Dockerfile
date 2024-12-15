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

COPY apps/telegramBot/ ./apps/telegramBot/

EXPOSE ${BOT_PORT}

CMD ["bun", "run", "telegramBot:run"]