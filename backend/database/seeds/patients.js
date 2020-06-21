
exports.seed = function(knex) {
  return knex('patients').insert([
    {
      name: 'Eduardo de Almeida Junior',      
      step: 1,
      status: 'Pendente',
    },
    {
      name: 'Ana Vitória de Assis',      
      step: 2,
      status: 'Pendente',
    },
    {
      name: 'João Carlos da Silva',      
      step: 3,
      status: 'Pendente',
    },
    {
      name: 'Pedro Junior Souza',      
      step: 4,
      status: 'Pendente',
    },
  ]);
}; 
