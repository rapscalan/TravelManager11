const { Router } = require('express');

const Trip = require('../models/Trip');

module.exports = Router()
  .post('/', (req, res)=> {
    Trip
      .create(req.body)
      .then(trip => res.send(trip));
  })
  .get('/', (req, res)=> {
    Trip
      .find()
      .then(trips => res.send(trips));
  });
