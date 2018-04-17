exports.up = function (knex, Promise) {
  return knex.schema.createTable("champions", table => {
    table.increments("id").primary();
    table.text("year");
    table.text("winner");
    table.text("loser");
    table.text("points");
    table.text("series");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("champions");
};
