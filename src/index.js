//declaring express and handlebars
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 5000;


app.engine('hbs', handlebars.engine({
  extname: 'hbs',
}));

// view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


// Home page 
app.get('/', (req, res) => {
  res.render('home', {layout: false});
});

app.listen(port, () => console.log(`Server is listening on port ${port}...`));