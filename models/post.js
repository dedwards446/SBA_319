// models/post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // Other post fields...
});

postSchema.index({ title: 'text', content: 'text' }); 

module.exports = mongoose.model('Post', postSchema);
