module.exports = {
  apps: [
    {
      name: 'server',
      script: 'bun run server',
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
