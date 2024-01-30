//declaring express and handlebars
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const routes = require('./routes');
const configHandlebars = require('./config/configHandlebars');
const configExpress = require('./config/configExpress');

const app = express();
const port = 5000;

configHandlebars(app);
configExpress(app);


app.engine('hbs', handlebars.engine({
  extname: 'hbs',
}));

// view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);  

app.listen(port, () => console.log(`Server is listening on port ${port}...`));