const mongoose = require('mongoose');

const cardsSchema = new mongoose.Schema({
  name: String,
  front: String,
  back: {
	  type: String,
	  default: "images/lost.jpg"
  },
  flipped: {
	  type: Boolean,
	  default: false
  }
});

const Cards = mongoose.model('Cards', cardsSchema);

module.exports = Cards;
