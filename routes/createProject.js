const express = require('express');

const router = express.Router();

const createProject = require('../controller/createProject');

router.get('/', createProject.index);
router.use('/newproject', require('./newProject'));

module.exports = router;