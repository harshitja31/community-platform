require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const memberRoutes = require('./routes/memberRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(passport.initialize());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/communityPlatform', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connection successful'))
  .catch((err) => console.error('Database connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/members', memberRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
