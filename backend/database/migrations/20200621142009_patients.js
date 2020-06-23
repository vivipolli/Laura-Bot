
exports.up = knex =>
knex.schema.createTable("patients", table => {
  table.increments('id').primary();
  table.string('name').notNullable();
  table.integer('step').notNullable();
  table.integer('level').notNullable();
  table.dateTime('create_at').notNullable();
  table.string('status').notNullable();
  table.string('description');
});

exports.down = knex => knex.schema.dropTableIfExists("patients");
