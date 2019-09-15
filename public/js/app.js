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
const players = [
	{
		name: 'Player 1',
		hand: [],
		score: 0,
		leader: false
	},
	{
		name: 'Player 2',
		hand: [],
		score: 0,
		leader: false
	}
]

//default kingCard
const kingCard = {
    	name: "The Frog Prince",
    	front: "images/frog-prince.jpg",
    }

// register modal component
Vue.component('modal', {
	template: '#modal-template'
})

// When player clicks start new game
	// game cards are shuffled and backs are displayed
	// A random king card is displayed
	// player hands are reset
	// prompt player to choose a card

// when player clicks a card
		// card is flipped
		// check if it is the same as king card
			// if it matches
				// card is added to user hand
				// a new king card is taken from the deck
				// * must actually REMOVE it from the deck
				// player score goes up by one
				// check if player is the leader
					// if so display crown
					// if not, don't display crown
				// check if score is 8
					// if score is 8, player wins!
					// if not, prompt player to choose again
					// repeat
			// if it doesnt match
				// alternate player's turn
				// propmpt player to choose a card

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
		players: players,
		kingCard: kingCard,
		message: "Pick a card.",
		message2: ""
	},
	methods: {
		shuffleDeck: function() {
	        for(let i = this.cards.length - 1; i > 0; i--) {
		        let randomIndex = Math.floor(Math.random() * i);

		        let temp = this.cards[i];
		        Vue.set(this.cards, i, this.cards[randomIndex]);
		        Vue.set(this.cards, randomIndex, temp);
			}
			let randomIndex = Math.floor(Math.random() * this.cards.length);
			this.kingCard = cards.find(card => card.id === randomIndex);
			this.message = "Pick a card.";
			this.message2 = "";
		},

	    flipCard: function(card){
		// card back is revealed
	      card.flipped = !card.flipped;
		  this.message = "You found: " + card.name + "."

		  // if card is a match, let player know
		  if (this.kingCard.name == card.name) {
			  this.message2 = "You win the King Card!"

			  // change the king card
			  let randomIndex = Math.floor(Math.random() * this.cards.length)
			  this.kingCard = cards.find(newCard => newCard.id === randomIndex)

			  // wait 2 seconds before announcing new card
			  setTimeout(() =>
			  this.message = "The new king card is: " + this.kingCard.name,
			  2000)
			  setTimeout(() => this.message2 = "", 2000)

		  } else {
			this.message2 = "Sorry, it's not a match."
		  }
		  setTimeout(() => card.flipped = !card.flipped, 2500);
		}

	},
	beforeMount(){
		this.shuffleDeck()
	 },
})
