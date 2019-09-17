const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
	name: {
		type:String,
		required:true
	},
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
	loses: {
		type: Number,
		default:0
	}
})

const User = mongoose.model('User', userSchema);
module.exports = User;
