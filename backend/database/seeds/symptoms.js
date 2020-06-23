
exports.seed = function(knex) {
  return knex('symptoms').del()
    .then(function () {
  return knex('symptoms').insert([
    { name: 'dor de cabeça', level: 5},
    { name: 'febre', level: 2},
    { name: 'dor muscular', level: 1},
    { name: 'falta de ar', level: 3},
    { name: 'tosse', level: 0},
    { name: 'fraqueza', level: 4},
    { name: 'fraqueza', level: 3},
    { name: 'falta de ar', level: 5},
  ]);
})
}; 