//==========================
// DEPENDENCIES
//==========================
const express = require('express');
const cards = express.Router();
const Cards = require('../models/cards.js');
const seed = require('../models/seed.js')

//==========================
// SEED CARD DATA
//==========================
cards.get('/seed', (req, res) => {
	Cards.create(seed, (err, data) => {
		res.json(data)
	})
})

//==========================
// DROP COLLECTION
//==========================
cards.get('/drop-collection', (req, res) => {
	Cards.remove({}, (err, data) => {
		if (err) {
			console.log(err);
		}
	})
})

//==========================
// GET CARDS
//==========================
cards.get('/', (req, res) => {
  // res.send('index');
  Cards.find({}, (err, foundCards) => {
    res.json(foundCards);
  });
});

//==========================
// GET A SPECIFIC CARD
//==========================
cards.get('/:id', (req, res) => {
	Cards.findById(req.params.id, (err, foundHome) => {
		res.json(foundHome)
	})
})



module.exports = cards;
