//==========================
// DEPENDENCIES
//==========================
const express = require('express');
const players = express.Router();
const Player = require('../models/players.js');
const bcrypt = require('bcrypt');


//==========================
// FIND ALL PLAYERS
//==========================
players.get('/', (req, resp) => {
    resp.json(req.session)
});


//==========================
// CREATE A NEW PLAYER
//==========================
players.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password,
  bcrypt.genSaltSync(10));
  Player.create(req.body, (error, createdPlayer) => {
    res.status(201).json({
      status:201,
      message:"new player created"
    });
  });
});

//==========================
// UPDATE PLAYER STATS
//==========================
players.put('/:id', (req, res) => {
	Player.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPlayer) => {
      res.json(updatedPlayer);
	  // console.log(updatedPlayer);
	})
})

module.exports = players;
