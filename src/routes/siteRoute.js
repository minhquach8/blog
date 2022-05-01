const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.route('/search').get(siteController.search);
router.route('/').get(siteController.index);

module.exports = router;
