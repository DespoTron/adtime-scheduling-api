// PG database client/connection setup
const pg = require('pg');
const Pool = pg.Pool;

let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  };
}
const client = new Pool(dbParams);

client.connect(() => {
  console.log('connected to database');
});

module.exports = client;
