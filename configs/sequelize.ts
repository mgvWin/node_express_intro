const {
  DB_PSQL_HOST,
  DB_PSQL_USER,
  DB_PSQL_PASSWORD,
  DB_PSQL_DB_NAME,
} = process.env;

export = {
  development: {
    username: DB_PSQL_USER,
    password: DB_PSQL_PASSWORD,
    database: DB_PSQL_DB_NAME,
    host: `${DB_PSQL_HOST}`,
    dialect: 'postgres',
  },
};
