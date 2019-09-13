const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = Schema({
  username: {
	  type:String,
	  required:true
  },
  password: {
	  type:String,
	  required:true
  },
  wins: {
	  type: Number,
	  default:0
  },
  losers: {
	  type: Number,
	  default:0
  }
})

const Player = mongoose.model('Player', playerSchema);
