exports.up = function (knex, Promise) {
  return knex.schema.createTable("goals", table => {
    table.increments("id").primary();
    table.integer("rank");
    table.text("player");
    table.text("nation");
    table.text("club");
    table.integer("goals");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("goals");
};
