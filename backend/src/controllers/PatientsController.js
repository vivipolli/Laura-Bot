const knex = require('../../database/index');

  exports.list = async function(req, res) {
    const patients = await knex("patients");
    const { filter } = req.query;

    const formatedName = filter && filter.charAt(0).toUpperCase() + filter.slice(1)

    const results = () => {
      if (filter) {
        return patients.filter(
          patient => (patient.name).includes(formatedName) ?
            (patient.name).includes(formatedName)
            :
            (patient.status).includes(formatedName)
        )
      } else return patients;
    }
    res.json(results());
  }

  exports.create = async function(req, res){
    const { name, step, status, description, symptoms, level } = req.body;
    const create_at = new Date;
  
    const patient = { name, step, status, description, level, create_at, };
  
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
  }
  exports.get = async function(req, res) {
    const { id } = req.params;
  
    const patient = await knex('patients').where('id', id).first();
  
    if (!patient) {
      return res.status(400).json({ message: 'Patient not found' });
    }
  
    const symptoms = await knex('symptoms')
      .join('patient_symptom', 'symptoms.id', '=', 'patient_symptom.symptom_id')
      .where('patient_symptom.patient_id', id);
  
    return res.json({ patient, symptoms });  
  }

  exports.update = async function(req, res) {
    const { id } = req.params;
    const { description, status } = req.body;
  
    const patient = await knex('patients').where('id', id).first();
  
    if (patient < 0) {
      return res.status(400).json({ error: "Patient not found" })
    }
    const {
      name,
      step,
      level,
      create_at,
    } = patient;
  
    const patientUpdated = {
      description,
      status,
      name,
      step,
      level,
      create_at
    };
  
    await knex('patients')
      .where('id', id)
      .update(patientUpdated)
      .then(() => res.status(200).json(patientUpdated))
  }
