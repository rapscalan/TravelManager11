const { Router } = require('express');
const ItineraryItem = require('../models/ItineraryItem');

module.exports = Router()
  .post('/', (req, res) => {
    ItineraryItem
      .create(req.body)
      .then(item => res.send(item));
  })

  .get('/', (req, res) => {
    ItineraryItem
      .find()
      .then(items => res.send(items));
  });
