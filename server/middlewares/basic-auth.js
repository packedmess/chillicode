const basicAuth = require('express-basic-auth');

module.exports = basicAuth({
  users: {
    [process.env.BASIC_AUTH_USER]: process.env.BASIC_AUTH_PASSWORD,
  },
  challenge: true,
});
