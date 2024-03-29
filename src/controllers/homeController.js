const router = require('express').Router();


const movieService = require('../services/movieService');

// Home page 
router.get('/', (req, res) => {
  const movies = movieService.getAll();
  res.render('home', {movies});
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/search', (req, res) => {
  const movies = movieService.getAll();
  res.render('search')
})

router.get('*', (req, res) => {
  res.render('404');
});

module.exports = router;

module.exports = router;