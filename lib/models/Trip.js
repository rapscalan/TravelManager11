const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  beginDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  
});
schema.virtual('itinerary', {
  ref: 'ItineraryItem',
  localField: '_id',
  foreignField: 'tripId'
});

module.exports = mongoose.model('Trip', schema);
