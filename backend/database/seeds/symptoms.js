
exports.seed = function(knex) {
  return knex('symptoms').insert([
    { name: 'dor de cabeça', level: 5},
    { name: 'febre', level: 2},
    { name: 'dor muscular', level: 3},
    { name: 'falta de ar', level: 3},
    { name: 'tosse', level: 1},
    { name: 'fraqueza', level: 4},
  ]);
}; 