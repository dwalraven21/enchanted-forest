//==========================
// DEPENDENCIES
//==========================
const express = require('express');
const sessions = express.Router();
const Player = require('../models/players.js');
const bcrypt = require('bcrypt');

//==========================
// LOG OUT / END SESSION
//==========================
sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.status(200).json({
      status:200,
      message:'logout complete'
    });
  });
});

//==========================
// FIND SESSION
//==========================
sessions.get('/', (req, resp)=>{
    resp.status(200).json({
      status: 200,
      message: "found session"
    });
});

//==========================
// CREATE SESSION / LOG IN
//==========================
sessions.post('/', (req, res) => {
  Player.findOne({username:req.body.username}, (error, foundPlayer) => {
    if (foundPlayer) {
		if(bcrypt.compareSync(req.body.password,foundPlayer.password)){
	      req.session.currentUser = foundPlayer;
	      res.status(201).json({
	        status:201,
	        message:'session created'
	      });
	  } else {
	      res.status(401).json({
	        status:401,
	        message:'login failed'
	      });
	    }
	} else {
		res.status(401).json({
		  status:401,
		  message:'login failed'
		});
	  }
  })
})

module.exports = sessions;
