// models/user.mjs

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Other user fields...
});

userSchema.index({ email: 1 }); // Adding index to the email field

export default mongoose.model('User', userSchema);
