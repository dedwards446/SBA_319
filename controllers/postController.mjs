// controllers/postController.js
const Post = import('../models/post.mjs'); // Assuming you have a Post model

// Define the createPost function
// controllers/postController.mjs

const createPost = async (req, res) => {
  try {
    // Assuming req.body contains the necessary data for creating a post
    const { title, content, author } = req.body;

    // Validate required fields
    if (!title || !content || !author) {
      return res.status(400).json({ error: 'Title, content, and author are required fields' });
    }

    // Create a new post
    const newPost = await Post.create({
      title,
      content,
      author,
    });

    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { createPost };
