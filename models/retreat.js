const mongoose = require('mongoose');

const retreatsSchema = new mongoose.Schema({
  className: { type: String },
  address: { type: String},
  location: { lat: Number, lng: Number },
  date: { type: String },
  time: { type: Number, max: 24 },
  price: { type: Number }
});

module.exports = mongoose.model('Retreat', retreatsSchema);
