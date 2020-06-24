// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './auth4.db3' },
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run("PRAGMA foreign_keys = ON", done);
    //   },
    // },
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
