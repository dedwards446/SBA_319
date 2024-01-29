// routes/commentRoutes.js
import { Router } from 'express';
import CommentController from '../controllers/commentController.mjs'; 
const router = Router();

// Define a callback function for the POST route
const createCommentCallback = async (req, res) => {
  await CommentController.createComment(req, res);
};

// Assign the callback function to the POST route
router.post('/', createCommentCallback);

export default router;
