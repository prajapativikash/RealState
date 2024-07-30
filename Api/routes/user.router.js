const express = require('express');
const text = require('../controllers/user.controllers');

const router = express.Router()

router.get('/text', text)

module.exports = router