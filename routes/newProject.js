const express = require('express');

const router = express.Router();

const newProject = require('../controller/newProject');

router.post('/', newProject.index);

module.exports = router;