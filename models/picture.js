const mongoose = require('mongoose');

const picturesSchema = new mongoose.Schema({
  posterImage: { type: String }
});

module.exports = mongoose.model('Picture', picturesSchema);
