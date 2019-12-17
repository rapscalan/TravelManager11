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
  })
  .get('/:id', (req, res)=> {
    Trip
      .findById(req.params.id)
      .then(trip => res.send(trip.toJSON({ virtuals: true })));
  })
  .patch('/:id', (req, res)=> {
    Trip
      .findByIdAndUpdate(req.params.id, { name: 'Italy' }, { new: true })
      .then(result => res.send(result));
  })
  .delete('/:id', (req, res) => {
    Trip
      .findOneAndDelete(req.params.id)
      .then(result => res.send(result));
  });
