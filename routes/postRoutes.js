// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const PostController = require('../controllers/postController');

// CRUD routes for posts
router.get('/', PostController.getAllPosts);
router.post('/', PostController.createPost);
router.put('/:postId', PostController.updatePost);
router.delete('/:postId', PostController.deletePost);

module.exports = router;
