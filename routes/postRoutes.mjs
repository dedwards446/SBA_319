// routes/postRoutes.mjs

import { Router } from 'express';
const router = Router();
import { createPost } from '../controllers/postController.mjs';

// Assign the createPost function to the POST route
router.post('/', createPost);

export default router;
