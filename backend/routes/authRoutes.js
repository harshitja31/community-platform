const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { verifyToken } = require('../middlewares/authMiddleware');
const User = require('../models/User');
const router = express.Router();

router.get('/me', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch user information.' });
  }
});

router.post('/register', registerUser);

router.post('/login', loginUser);

module.exports = router;
