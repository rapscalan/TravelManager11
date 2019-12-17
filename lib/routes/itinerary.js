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

// module.exports = Router()
//   .post('/', (req, res) => {
//     Event
//       .create(req.body)
//       .then(event => res.send(event));
//   })

//   .get('/', (req, res) => {
//     Event
//       .find()
//       .select({ notes: false })
//       .then(events => res.send(events));
//   })
