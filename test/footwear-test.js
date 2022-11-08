const assert = require('assert');
const reggie = require('');



const pgp = require('pg-promise')();
const local_database_url = 'postgres://postgres:codex123@localhost:5432/';
const connectionString = process.env.DATABASE_URL || local_database_url;

const config = {
  connectionString
}

if (process.env.NODE_ENV == "production") {
  config.ssl = {
    rejectUnauthorized: false
  }
}

const db = pgp(config);
const staff = reggie(db)


describe("", async function () {
    
    
});