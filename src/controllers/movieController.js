const router = require('express').Router(); 

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', (req, res) => {
  const newMovie = req.body;
  movieService.create(newMovie)
  res.send('movie should be created')
})

module.exports = router;