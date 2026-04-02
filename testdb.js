const { Pool } = require("pg");

const DATABASE_URL =
  "postgresql://postgres.mpgyzrsqkpwpdmzefuks:uAhCymfPbsZk1twv@aws-1-eu-north-1.pooler.supabase.com:6543/postgres";

// Export the connection string so other modules can create a pool/client
module.exports = {
  DATABASE_URL,
};
