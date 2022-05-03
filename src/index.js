const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');

/* Connect to DB */
db.connect();

/* Initialize app */
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

/* Template Engine */
app.engine(
    'hbs',
    engine({ extname: '.hbs', helpers: { sum: (a, b) => a + b } }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

/* ----- Middleware ---- */
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

/* -------- Routes -------- */
route(app);

/* ------- Listening ------ */
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
