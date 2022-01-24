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
  eventCity: {
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
//schema.methods.
// animalSchema.methods.findSimilarTypes = function(cb) {
//   return this.model('Animal').find({ type: this.type }, cb);
// };
module.exports = mongoose.model('ItineraryItem', schema);
