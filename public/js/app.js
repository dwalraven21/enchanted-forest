//temporarily adding cards data here
const cards = [
{
	id: 0,
	key: 0,
	name: "The Beast",
	front: "images/beast.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 1,
	key: 1,
	name: "The Mermaid",
	front: "images/bride-of-the-sea.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 2,
	key: 2,
	name: "The Flower Queen",
	front: "images/flower-queen.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 3,
	key: 3,
	name: "The Frog Prince",
	front: "images/frog-prince.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 4,
	key: 4,
	name: "The Glass Slipper",
	front: "images/glass-slipper.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 5,
	key: 5,
	name: "The Lady In White",
	front: "images/lady-in-white.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 6,
	key: 6,
	name: "The Night Owl",
	front: "images/night-owl.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 7,
	key: 7,
	name: "Persephone",
	front: "images/persephone.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 8,
	key: 8,
	name: "The Walraven",
	front: "images/raven-flight.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 9,
	key: 9,
	name: "The Seelie Queen",
	front: "images/seelie-queen.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 10,
	key: 10,
	name: "The Shield Maiden",
	front: "images/shield-maiden.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 11,
	key: 11,
	name: "The Swan Princess",
	front: "images/swan-princess.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 12,
	key: 12,
	name: "The Golden Ball",
	front: "images/the-golden-ball.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 13,
	key: 13,
	name: "The White Dove",
	front: "images/white-dove.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 14,
	key: 14,
	name: "The White Stag",
	front: "images/white-stag.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 15,
	key: 15,
	name: "Mother Willow",
	front: "images/willow.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 16,
	key: 16,
	name: "The Wolf",
	front: "images/wolf.jpg",
	back: "images/back-of-card.png",
	flipped: false
}
];

// added king deck to try to fix issue where cards are being removed from game board
const kingDeck = [
{
	id: 0,
	key: 17,
	name: "The Beast",
	front: "images/beast.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 1,
	key: 18,
	name: "The Mermaid",
	front: "images/bride-of-the-sea.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 2,
	key: 19,
	name: "The Flower Queen",
	front: "images/flower-queen.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 3,
	key: 20,
	name: "The Frog Prince",
	front: "images/frog-prince.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 4,
	key: 21,
	name: "The Glass Slipper",
	front: "images/glass-slipper.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 5,
	key: 22,
	name: "The Lady In White",
	front: "images/lady-in-white.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 6,
	key: 23,
	name: "The Night Owl",
	front: "images/night-owl.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 7,
	key: 24,
	name: "Persephone",
	front: "images/persephone.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 8,
	key: 25,
	name: "The Walraven",
	front: "images/raven-flight.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 9,
	key: 26,
	name: "The Seelie Queen",
	front: "images/seelie-queen.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 10,
	key: 27,
	name: "The Shield Maiden",
	front: "images/shield-maiden.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 11,
	key: 28,
	name: "The Swan Princess",
	front: "images/swan-princess.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 12,
	key: 29,
	name: "The Golden Ball",
	front: "images/the-golden-ball.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 13,
	key: 30,
	name: "The White Dove",
	front: "images/white-dove.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 14,
	key: 31,
	name: "The White Stag",
	front: "images/white-stag.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 15,
	key: 32,
	name: "Mother Willow",
	front: "images/willow.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 16,
	key: 33,
	name: "The Wolf",
	front: "images/wolf.jpg",
	back: "images/back-of-card.png",
	flipped: false
}
];
// create starting stats for players.
// default names are Player 1 and Player 2
// empty hand arrays, score of zero and there is no leader.
const player1 = {
		id: 0,
		name: 'Player 1',
		hand: [],
		score: 0,
		leader: false
	};

const player2 =	{
		id: 1,
		name: 'Player 2',
		hand: [],
		score: 0,
		leader: false
	};

//default kingCard
const kingCard = {};

// register modal component
Vue.component('modal', {
	template: '#modal-template'
})

// start app
new Vue({
	el: '#app',
	data: {
		showRules: false,
		showAbout: false,
		showLogin: false,
		showSignup: false,
		showStats: false,
		cards: cards,
		kingDeck: kingDeck,
		kingCard: kingCard,
		player1: player1,
		player2: player2,
		playerTurn: player1.name,
		message: "Pick a card.",
		message2: "",
		randomIndex: 0,
	},
	methods: {
		// When player clicks start new game
		// player hands are reset
		shuffleDeck: function() {
			// game cards are shuffled and backs are displayed
	        for(let i = this.cards.length - 1; i > 0; i--) {
		        let randomIndex = Math.floor(Math.random() * i);
		        let temp = this.cards[i];
		        Vue.set(this.cards, i, this.cards[randomIndex]);
		        Vue.set(this.cards, randomIndex, temp);
			}
			// A random king card is displayed
			this.randomIndex = Math.floor(Math.random() * this.kingDeck.length);
			this.kingCard = this.kingDeck[this.randomIndex];

			// reset players stats
			this.player1 = player1;
			this.player2 = player2;

			// rest king deck
			this.kingDeck = kingDeck;

			// prompt player to choose a card
			this.message = "Pick a card.";
			this.message2 = "";
		},

		// when player clicks a card
	    flipCard: function(card){

		// self becomes this in scope
		var self = this;

		// card back is revealed
	      card.flipped = !card.flipped;
		  self.message = "You found: " + card.name + "."

		  // if card is a match, let player know
		  if (self.kingCard.name == card.name) {
			  self.message2 = "You win the King Card!"

			  // card is added to user hand & removed from cards array
			  // player score goes up by one
			  self.kingDeck.splice((self.randomIndex), 1)
			  if (self.playerTurn === player1.name){
				  self.player1.hand.push(self.kingCard)
				  self.player1.score++
			  } else {
				  self.player2.hand.push(self.kingCard)
				  self.player2.score++

			  }

			  // check if player is the leader
			  // update leader status
			  if (self.player1.score > self.player2.score) {
				  self.player1.leader = true;
				  self.player2.leader = false;
			  } else if (self.player2.score > self.player1.score) {
				  self.player1.leader = false;
				  self.player2.leader = true;
			  } else {
				  self.player1.leader = false;
				  self.player2.leader = false;
			  }

			  // check if score is 8
			  // if score is 8, player wins!
			  if (self.player1.score === 8 || self.player2.score === 8) {
				  self.message = "You Win!";
				  self.message2 = "Choose 'Start New Game' to play again.";
			  } else {
			  // if not, change the king card
				  self.randomIndex = Math.floor(Math.random() * self.kingDeck.length)
				  self.kingCard = self.kingDeck[self.randomIndex]
				// wait 2 seconds before prompting player to choose again
			    setTimeout(function(){
					self.message = "The new king card is " + self.kingCard.name;
					card.flipped = !card.flipped
					self.message2 = "Pick a card."
				}, 2000)
			  }

		  // if card is not a match, let player know
		  } else {
			self.message2 = "Sorry, it's not a match."
			// wait 2 seconds, then alternate player's turn
			setTimeout(function(){
				if (self.playerTurn === player1.name){
					self.playerTurn = player2.name
				} else {
					self.playerTurn = player1.name
				}
				//flip card and prompt player to pick a card
				card.flipped = !card.flipped
				self.message = "Pick a card."
				self.message2 = '';

			}, 2000);
		  }
		}

	},
	// on page load start a new game
	beforeMount(){
		this.shuffleDeck()
	 },
})
