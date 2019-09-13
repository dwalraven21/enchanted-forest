//==================
//DEPENDENCIES
//===================
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session')
require('dotenv').config()
const app = express();
const db = mongoose.connection;

//====================
//PORT
//====================
const PORT = process.env.PORT || 3000;

//===================
//DATABASE
//===================
const ENCHANTED_DB = process.env.PROJECT3_DB

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Connect to Mongo
mongoose.connect(ENCHANTED_DB ,  { useNewUrlParser: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', ENCHANTED_DB));
db.on('disconnected', () => console.log('mongo disconnected'));

//==================
// MIDDLEWARE
//==================
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: false
}))

app.use(morgan('tiny'));

//====================
// ROUTES
//====================

//==================
// CONTROLLERS
//==================

//==================
// LISTENER
//==================
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
