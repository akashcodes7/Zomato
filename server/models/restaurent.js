const mongoose = require('mongoose');

const RestaurentSchema = new mongoose.Schema({
  restaurant_id: {
    type: String,
  },
  restaurant_name: {
    type: String,
  },
  location_id: {
    type: Number,
  },
  state_id: {
    type: String,
  },
  address: {
    Type: String,
  },
});

const restaurent = mongoose.model('restaurentdatas', RestaurentSchema);
module.exports = restaurent;
