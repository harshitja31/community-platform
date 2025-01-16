const User = require('../models/User');

const getAllMembers = async (req, res, next) => {
  try {
    const members = await User.find({}, 'name email');
    res.status(200).json(members);
  } catch (err) {
    next(err);
  }
};

const searchMembers = async (req, res, next) => {
  try {
    const query = req.query.q;
    const members = await User.find({ name: { $regex: query, $options: 'i' } }, 'name email');
    res.status(200).json(members);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllMembers, searchMembers };
