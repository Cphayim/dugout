const { join } = require('path');
const config = {
  viewDir: join(__dirname, '..', 'views'),
  staticDir: join(__dirname, '..', 'assets')
};

module.exports = config;
