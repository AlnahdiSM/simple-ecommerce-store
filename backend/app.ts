import http from "http";
import express, { Application } from "express";
import mongoose from "mongoose";
import productRouter from './routes/product';
import cors from 'cors';




const app: Application = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());
// Use the user router
app.use('/api',productRouter);

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Db", {
   
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

// Create an HTTP server
const server = http.createServer(app);

// Start the server
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
