const express = require('express');

const router = express.Router();

const movieController = require('./controllers/movieController');
const homeController = require('./controllers/homeController');

router.use(homeController);
router.use(movieController);

module.exports = router;