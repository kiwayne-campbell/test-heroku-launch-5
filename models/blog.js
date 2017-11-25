const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  image: { type: String },
  body: { type: String, required: true, trim: true}
});

module.exports = mongoose.model('Blog', blogsSchema);
