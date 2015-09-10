var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'client'
    },
    port: 3000,
    db: {db: 'client_development'}
  },

  test: {
    root: rootPath,
    app: {
      name: 'client'
    },
    port: 3000,
    db: {db: 'client_test'}
  },

  production: {
    root: rootPath,
    app: {
      name: 'client'
    },
    port: 3000,
    db: {db: 'client_production'}
  }
};

module.exports = config[env];
