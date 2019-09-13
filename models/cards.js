const mongoose = require('mongoose');

const cardsSchema = new mongoose.Schema({
  name: String,
  front: String,
  back: String
});

const Cards = mongoose.model('Cards', cardsSchema);

module.exports = Cards;
