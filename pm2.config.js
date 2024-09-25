module.exports = {
  apps: [
    {
      name: 'server',
      script: 'bun run server:run',
    },
    {
      name: 'bot',
      script: 'bun run telegramBot',
    },
    {
      name: 'miniapp',
      script: 'bun run miniapp',
    }
  ],
}
