const knex = require("../../database/index");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

  exports.authenticate= async function(req, res) {
    const { email, password } = req.body;

    const SECRET = process.env.SECRET;

    const user = await knex("users").where({ email }).first()

    if (!user)
      return res.status(400).send({ error: 'User not found' });
    if (!await bcrypt.compare(password, user.password))
      return res.status(400).send({ error: 'Invalid password' })

    user.password = undefined;

    const token = jwt.sign({ id: user.id }, SECRET, {
      expiresIn: 86400,
    })

    return res.status(200).send({ user, token })
  }

  exports.create= async function(req, res, next) {
    const { email, password } = req.body;

    bcrypt.hash(password, 10)
      .then(hashedPassword => {
        return knex("users").insert({
          email: email,
          password: hashedPassword
        })
          .returning(["id", "email"])
          .then(users => {
            res.json(users[0])
          })
          .catch(error => next(error))
      })
  }
