// routes/yourRoutes.js
import { Router } from 'express';
const router = Router();
import UserController from '../controllers/userController.mjs';

router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);
router.put('/:userId', UserController.updateUser);
router.delete('/:userId', UserController.deleteUser);


// Define a callback function for the POST route
const createResourceCallback = async (req, res) => {
  try {
    // Your logic to handle the POST request and create a resource goes here
    // For example:
    // const newResource = await YourModel.create(req.body);
    // res.status(201).json({ message: 'Resource created successfully', resource: newResource });

    res.status(201).json({ message: 'Resource created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Assign the callback function to the POST route
router.post('/', createResourceCallback);

export default router;
