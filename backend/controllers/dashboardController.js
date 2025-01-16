const User = require('../models/User');

const getDashboardData = async (req, res, next) => {
  try {
    const totalMembers = await User.countDocuments();
    const recentMembers = await User.find({}).sort({ createdAt: -1 }).limit(10);

    res.status(200).json({
      updates: [
        { id: 1, message: 'New event coming up!', date: '2025-01-20' },
        { id: 2, message: 'Welcome our new members!', date: '2025-01-15' },
      ],
      metrics: { totalMembers, recentJoiners: recentMembers.length },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getDashboardData };
