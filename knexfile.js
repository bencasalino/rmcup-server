module.exports = {
  development: {
    client: "pg",
    connection: "postgres:///rmcup"
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL
  }
};
