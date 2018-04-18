exports.up = function (knex, Promise) {
  return knex.schema.createTable("shutouts", table => {
    table.increments("id").primary();
    table.integer("rank");
    table.text("player");
    table.text("nation");
    table.text("club");
    table.integer("shutouts");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("shutouts");
};
