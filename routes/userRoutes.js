// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Correctly define the post route with a callback function
router.post('/', UserController.createUser);

// Other routes...

module.exports = router;
