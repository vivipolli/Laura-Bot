const express = require('express');
const db = require("../database/index");
const cors = require('cors');

const knex = require('../database/index');

const app = express();

app.use(express.json());
app.use(cors())


app.get("/patients", async (req, res) => {
  const patients = await db("patients");
  res.json({ patients });
});

app.post("/patients", async (req, res) => {
  const { name, step, status, description, symptoms } = req.body;

  const patient = { name, step, status, description };

  const trx = await knex.transaction();

  const [patient_id] = await trx('patients').insert(patient)
    .returning('id')

  const patientSymptoms = symptoms.map((symptom_id) => {
    return {
      symptom_id,
      patient_id,
    }
  })

  await trx('patient_symptom').insert(patientSymptoms)
  await trx.commit();

  return res.json({
    id: patient_id,
    ...patient,
   });
});

app.get("/patients/:id", async (req, res) => {
  const { id } = req.params;

  const patient = await knex('patients').where('id', id).first();

  if (!patient) {
    return res.status(400).json({ message: 'Patient not found'});
  }

  const symptoms = await knex('symptoms')
    .join('patient_symptom', 'symptoms.id', '=', 'patient_symptom.symptom_id')
    .where('patient_symptom.patient_id', id);

  return res.json({ patient, symptoms });

});



app.get("/symptoms", async (req, res) => {
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
);





app.listen(8080);


