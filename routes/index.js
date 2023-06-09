const express = require('express');

const router = express.Router();

const homeController = require('../controller/homeController');

router.get('/', homeController.index);
router.use('/create', require('./createProject'));

module.exports = router;