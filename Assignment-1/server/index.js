// Main server entry point
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const { authenticateJWT } = require('./middleware/auth');
const connectDB = require('./config/db.js');

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL
      ? [process.env.CLIENT_URL]
      : ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use('/api/auth', authRoutes);
app.use('/api/tasks', authenticateJWT, taskRoutes);

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));
