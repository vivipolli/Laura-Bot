
exports.up = knex =>
knex.schema.createTable("patient_symptom", table => {
  table.increments('id').primary();
  table.integer('patient_id').notNullable().references('id').inTable('patients');
  table.integer('symptom_id').notNullable().references('id').inTable('symptoms');
});

exports.down = knex => knex.schema.dropTableIfExists("patient_symptom");