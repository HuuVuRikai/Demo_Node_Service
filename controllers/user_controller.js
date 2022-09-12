const express = require('express')
const router = express.Router()

// Gọi model user
const userModel = require('../models/user_model')

router.get('/get-user', (req, res) => {

    const user = new userModel('Nguyen Van A', '18')

    res.send({kq:0, user: user})

})

router.post('/post-user', function (req, res) {

    const body = req.body;
    const user = new userModel(body.name, body.age)
    res.send({kq:0, user: user})

})

module.exports = router