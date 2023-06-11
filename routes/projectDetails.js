const express = require('express');

const router = express.Router();

const projectDetails = require('../controller/projectDetails');

const createIssue = require('../controller/createIssue');

router.get('/:id', projectDetails.index);
router.get('/:id/popup', projectDetails.showPopup);
router.post('/:id/popup/createissue', createIssue.index);

module.exports = router;