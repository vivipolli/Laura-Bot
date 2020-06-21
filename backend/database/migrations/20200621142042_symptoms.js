
exports.up = knex =>
knex.schema.createTable("symptoms", table => {
  table.increments('id').primary();
  table.string('name').notNullable();
  table.integer('level').notNullable();
});

exports.down = knex => knex.schema.dropTableIfExists("symptoms");