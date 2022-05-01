const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

router.route('/:slug').get(newsController.show);
router.route('/').get(newsController.index);

module.exports = router;
