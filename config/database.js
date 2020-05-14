
const {
  username,
  password,
  database,
} = require('./index').db;

module.exports = {
  development: {
    username,
    password,
    database,
    dialect: 'postgres',
    logging: false
  },
};
