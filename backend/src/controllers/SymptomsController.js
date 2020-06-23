const knex = require('../../database/index');


  exports.list = async function(req, res) {
    const symptoms = await knex('symptoms').select('*');
  
    const serializedItems = symptoms.map(item => {
      return {
        id: item.id,
        symptom: item.symptom,
        level: item.level,
      }
    })
  
    return res.json(serializedItems);
  }

