const express = require('express');
const { getAllMembers, searchMembers } = require('../controllers/memberController');
const router = express.Router();

router.get('/', getAllMembers); 
router.get('/search', searchMembers);

module.exports = router;
