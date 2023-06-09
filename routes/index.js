const express = require('express');

const router = express.Router();

const homeController = require('../controller/homeController');

router.get('/', homeController.index);
router.use('/create', require('./createProject'));
router.use('/projectdetails', require('./projectDetails'));

module.exports = router;