// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './auth2.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './seeds' },
  },
  testing: {
    client: 'sqlite3',
    connection: { filename: './test.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './seeds' },
  },
};
