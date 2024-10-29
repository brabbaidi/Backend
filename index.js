import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'; // Import user routes
import productRoutes from './routes/productRoutes.js';

dotenv.config();

// Connect to the database
mongoose.connect(process.env.MONGODB_URI)
  

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("API is running!");
});

// User routes
app.use('/api/users', userRoutes); // Use user routes

app.use('/api/products', productRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
