FROM aybykovskii/daylik-base:latest

WORKDIR /app

COPY apps/miniapp/ ./apps/miniapp/

EXPOSE ${MINI_APP_PORT}

CMD ["bun", "run", "miniapp"]