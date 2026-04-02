const { Pool } = require("pg");

const DATABASE_URL =
  "postgresql://postgres:mabab@localhost:5432/mababa";

// Export the connection string so other modules can create a pool/client
module.exports = {
  DATABASE_URL,
};
