// routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/commentController');

// CRUD routes for comments
router.get('/', CommentController.getAllComments);
router.post('/', CommentController.createComment);
router.put('/:commentId', CommentController.updateComment);
router.delete('/:commentId', CommentController.deleteComment);

module.exports = router;
