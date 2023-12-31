
   // strapi-api/config/database.js
  //  module.exports = ({ env }) => ({
  //   connection: {
  //     client: 'postgres',
  //     connection: {
  //       host: env('DATABASE_HOST', 'localhost'),
  //       port: env.int('DATABASE_PORT', 5432),
  //       database: env('DATABASE_NAME', 'whizhack'),
  //       user: env('DATABASE_USERNAME', 'postgres'),
  //       password: env('DATABASE_PASSWORD', '12345'),
  //       schema: env('DATABASE_SCHEMA', 'public'), // Not required
  //       ssl: false,
  //       // {
  //       //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
  //       // },
  //     },
  //     debug: false,
  //   },
  // });

  module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', '40.88.24.216'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('POSTGRES_NAME', 'mydatabase'),
        user: env('POSTGRES_USERNAME', 'host'),
        password: env('POSTGRES_PASSWORD', 'mypassword'),
        ssl: false,
      },
      debug: false,
    },
  });
