const express = require('express');

const router = express.Router();

const projectDetails = require('../controller/projectDetails');

router.get('/:id', projectDetails.index);
router.get('/:id/popup', projectDetails.showPopup);

module.exports = router;