const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.route('/stored/courses').get(meController.storedCourses);
router.route('/trash/courses').get(meController.trashCourses);

module.exports = router;
