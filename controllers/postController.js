// controllers/postController.js
const Post = require('../models/post');

module.exports = {
    // Other functions...

    getAllPosts: async (req, res) => {
        try {
            // Your logic to fetch all posts goes here
            const allPosts = await Post.find();
            res.status(200).json({ posts: allPosts });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};
