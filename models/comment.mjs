// models/comment.mjs

import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  // Other comment fields...
});

export default mongoose.model('Comment', commentSchema);
