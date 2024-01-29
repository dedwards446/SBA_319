// controllers/commentController.mjs

import Comment from '../models/comment.mjs';

const CommentController = {
  getAllComments: async (req, res) => {
    try {
      const comments = await Comment.find();
      res.status(200).json(comments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createComment: async (req, res) => {
    try {
      const { text, author } = req.body;

      // Validate required fields
      if (!text || !author) {
        return res.status(400).json({ error: 'Text and author are required fields' });
      }

      // Create a new comment
      const newComment = await Comment.create({
        text,
        author,
      });

      res.status(201).json({ message: 'Comment created successfully', comment: newComment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateComment: async (req, res) => {
    try {
      const commentId = req.params.commentId;
      const { text, author } = req.body;

      // Validate required fields
      if (!text || !author) {
        return res.status(400).json({ error: 'Text and author are required fields' });
      }

      // Update the comment
      const updatedComment = await Comment.findByIdAndUpdate(
        commentId,
        { text, author },
        { new: true } // Return the updated comment
      );

      if (!updatedComment) {
        return res.status(404).json({ error: 'Comment not found' });
      }

      res.status(200).json({ message: 'Comment updated successfully', comment: updatedComment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteComment: async (req, res) => {
    try {
      const commentId = req.params.commentId;

      // Delete the comment
      const deletedComment = await Comment.findByIdAndDelete(commentId);

      if (!deletedComment) {
        return res.status(404).json({ error: 'Comment not found' });
      }

      res.status(200).json({ message: 'Comment deleted successfully', comment: deletedComment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default CommentController;
