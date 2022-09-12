const express = require('express')
const router = express.Router()

// quản lý các controllers

// Gọi dashboard
router.use('/api', require('../controllers/user_controller'))

module.exports = router;