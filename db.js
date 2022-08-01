const Pool = require("pg").Pool;

const pool = new Pool({
  user: "apeterson",
  password: "",
  host: "localhost",
  port: 5432,
  database: "ssnm",
});

module.exports = pool;
