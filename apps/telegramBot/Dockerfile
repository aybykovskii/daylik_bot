FROM aybykovskii/daylik-base:latest

WORKDIR /app

COPY apps/telegramBot/ ./apps/telegramBot/
COPY ./prompts.json ./apps/telegramBot/

EXPOSE ${BOT_PORT}

CMD ["bun", "run", "telegramBot:run"]