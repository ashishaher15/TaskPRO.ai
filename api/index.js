import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';   
import Taskrouter from './routes/Task.route.js';




dotenv.config();


const PORT =  process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));



app.use('/api/tasks', Taskrouter);











mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });



app.get("/", (req, res) => {
  res.send("Server is up and running 🚀");
});




app.listen(PORT, () => {
  console.log(`✅ Server is running at: http://localhost:${PORT}`);
});