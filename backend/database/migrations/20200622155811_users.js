
exports.up = knex =>
knex.schema.createTable("users", table => {
  table.increments('id').primary();
  table.string('email').notNullable();
  table.string('password').notNullable();
});

exports.down = knex => knex.schema.dropTableIfExists("users");
