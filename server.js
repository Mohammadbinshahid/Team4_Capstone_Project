// Importing path module
const path = require('path');

// Import express npm package
const express = require('express');

// Import express-session npm package
const session = require('express-session');

// Import express-handlebars npm package
const exphbs = require('express-handlebars');

// Create an instance of an Express.js app
const app = express();

// Define a port
const PORT = process.env.PORT || 3001;

// Import connection to the database
const sequelize = require("./config/connection");

// Import the connect-session-sequelize npm package
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Define session configuration
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Middleware for creating a session
app.use(session(sess));

// Importing helper functions
const helpers = require('./utils/helpers');

// Creating handlebars templates using the helper functions
const hbs = exphbs.create({ helpers });

// Initializing handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

// Synchronizing sequelize with the database and then starting the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});