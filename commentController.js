// controllers/commentController.js
const Comment = require('../models/comment');

module.exports = {
  getAllComments: async (req, res) => {
    try {
      const comments = await Comment.find();
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Implement other CRUD functions...
};
