//temporarily adding cards data here
const cards = [
{
	id: 1,
	name: "The Beast",
	front: "images/beast.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 2,
	name: "The Mermaid",
	front: "images/bride-of-the-sea.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 3,
	name: "The Flower Queen",
	front: "images/flower-queen.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 4,
	name: "The Frog Prince",
	front: "images/frog-prince.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 5,
	name: "The Glass Slipper",
	front: "images/glass-slipper.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 6,
	name: "The Lady In White",
	front: "images/lady-in-white.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 7,
	name: "The Night Owl",
	front: "images/night-owl.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 8,
	name: "Persephone",
	front: "images/persephone.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 9,
	name: "The Walraven",
	front: "images/raven-flight.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 10,
	name: "The Seelie Queen",
	front: "images/seelie-queen.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 11,
	name: "The Shield Maiden",
	front: "images/shield-maiden.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 12,
	name: "The Swan Princess",
	front: "images/swan-princess.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 13,
	name: "The Golden Ball",
	front: "images/the-golden-ball.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 14,
	name: "The White Dove",
	front: "images/white-dove.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 15,
	name: "The White Stag",
	front: "images/white-stag.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 16,
	name: "Mother Willow",
	front: "images/willow.jpg",
	back: "images/back-of-card.png",
	flipped: false
},
{
	id: 17,
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
		id: 1,
		name: 'Player 1',
		hand: [],
		score: 0,
		leader: false
	};

const player2 =	{
		id: 2,
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
		player1: player1,
		player2: player2,
		kingCard: kingCard,
		playerTurn: player1.name,
		message: "Pick a card.",
		message2: ""
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
			let randomIndex = Math.floor(Math.random() * this.cards.length);
			this.kingCard = cards.find(card => card.id === randomIndex);

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
		  this.message = "You found: " + card.name + "."

		  // if card is a match, let player know
		  if (this.kingCard.name == card.name) {
			  this.message2 = "You win the King Card!"

			  // change the king card
			  let randomIndex = Math.floor(Math.random() * this.cards.length)
			  this.kingCard = cards.find(newCard => newCard.id === randomIndex)

			  // card is added to user hand & removed from cards array
			  // player score goes up by one
			  // check if player is the leader
			  // check if score is 8
				  // if score is 8, player wins!
			  // if not, prompt player to choose again

			  // wait 2 seconds before announcing new card
			    setTimeout(function(){
				self.message = "The new king card is " + self.kingCard.name;
				self.message2 = "Pick a card."
				}, 2000)

		  // if card is not a match, let player know
		  } else {
			this.message2 = "Sorry, it's not a match."
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
