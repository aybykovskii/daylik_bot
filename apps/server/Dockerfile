FROM aybykovskii/daylik-base:latest

WORKDIR /app

COPY apps/server/ ./apps/server/

EXPOSE ${SERVER_PORT}

CMD ["bun", "run", "server:run"]