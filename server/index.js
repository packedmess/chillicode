const express = require('express');
const next = require('next');

async function main() {
  const app = next({
    dev: process.env.NODE_ENV === 'development',
  });

  await app.prepare();
  const server = express();

  // Middlewares
  if (process.env.BASIC_AUTH_ENABLED) {
    server.use(require('./middlewares/basic-auth'));
  }

  // Handle all requests by NextJS
  server.get('*', app.getRequestHandler());

  await server.listen(process.env.PORT);
  console.log(`> Ready on http://localhost:${process.env.PORT}`);
}

main();
