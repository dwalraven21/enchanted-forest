//==========================
// DEPENDENCIES
//==========================
const express = require('express');
const users = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');


//==========================
// FIND ALL USERS
//==========================
users.get('/', (req, res) => {
    res.json(req.session)
});

//==========================
// FIND ONE SPECIFIC USER
//==========================
users.get('/:id', (req, res) => {
	User.findById(req.params.id, (err, foundUser) => {
		res.json(foundUser)
	})
})

//==========================
// CREATE A NEW USER
//==========================
users.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password,
  bcrypt.genSaltSync(10));
  User.create(req.body, (error, createdUser) => {
    res.status(201).json({
      status:201,
      message:"new user created"
    });
  });
});

//==========================
// UPDATE USER STATS
//==========================
users.put('/:id', (req, res) => {
	User.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUser) => {
      res.json(updatedUser);
	})
})

module.exports = users;
