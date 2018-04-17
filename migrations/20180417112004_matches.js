exports.up = function (knex, Promise) {
  return knex.schema.createTable("matches", table => {
    table.increments("id").primary();
    table.text("date");
    table.text("home");
    table.text("away");
    table.text("score");
    table.text("series");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("matches");
};
