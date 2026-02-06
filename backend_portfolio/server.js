// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const apiRoutes = require('./routes/api');
const app = express();

// Middleware
app.use(cors({
    origin: 'https://codelabportfolio-plum.vercel.app', // Apna Vercel link yahan dalo
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json()); // Body parser 
app.use('/api', apiRoutes);
app.get("/", (req, res) => res.send("Server is running! 🚀"));



// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected!"))
  .catch((err) => console.log("DB Connection Error:", err));
  

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});