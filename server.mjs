// server.mjs

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.mjs';
import postRoutes from './routes/postRoutes.mjs';
import commentRoutes from './routes/commentRoutes.mjs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/blogApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

app.get("/seed", async (req, res) => {
    try {
      // These methods should work for both, MongoDB Native Driver OR Mongoose
      // This will delete everything in the collection before the insetMany is ran,
      // this is done to prevent the database from getting cluttered. 
      // Below I'm using the Model like I would do in Mongoose but if you're using the Native Driver it'll be something like this (await collection.deleteMany({}) 
      await Model.deleteMany({}) 
      await Model.insertMany([
        {
          name: "Superman",
          powers: ["Flying", "Super Strength", "Laser Vision"],
          weakness: "Kryptonite"
        },
        {
          name: "Spiderman",
          powers: ["Web Slinging", "Super Strength", "Spidey Senses"],
          weakness: "Pizza"
        },
        {
          name: "Iron Man",
          powers: ["Flying", "Bulletproof", "Laser Blasters"],
          weakness: "Infinity Gauntlet"
        }
      ])
    } catch (err) {
      res.status(500).send("Something went wrong.")
    }
  })

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


