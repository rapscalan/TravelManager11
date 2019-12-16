const mongoose = require('mongoose');

const schema = mongoose.Schema({
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Trip'
  },
  event: {
    type: String,
    required: true
  },
  beginTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  }
});
module.exports = mongoose.model('ItineraryItem', schema);
