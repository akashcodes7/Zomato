const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  location_id: {
    type: String,
  },
  location_name: {
    type: String,
  },
  state_id: {
    type: Number,
  },
  state: {
    type: String,
  },
  country_name: {
    Type: String,
  },
});

const location = mongoose.model('Location', LocationSchema);
module.exports = location;
