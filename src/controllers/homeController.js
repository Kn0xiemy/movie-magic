const router = require('express').Router();

// Home page 
router.get('/', (req, res) => {
  res.render('home');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('*', (req, res) => {
  res.render('404');
});

module.exports = router;

module.exports = router;