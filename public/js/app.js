//temporarily adding cards data here
const cards = [
{
	name: "The Beast",
	front: "images/beast.jpg",
	back: "images/lost.jpg",
	flipped: false
},
{
	name: "The Mermaid",
	front: "images/bride-of-the-sea.jpg",
	back: "images/lost.jpg",
	flipped: false
},
{
	name: "The Flower Queen",
	front: "images/flower-queen.jpg",
	back: "images/lost.jpg",
	flipped: false
},
{
	name: "The Frog Prince",
	front: "images/frog-prince.jpg",
	back: "images/lost.jpg",
	flipped: false
},
{
	name: "The Glass Slipper",
	front: "images/glass-slipper.jpg",
	back: "images/lost.jpg",
	flipped: false
},
{
	name: "The Lady In White",
	front: "images/lady-in-white.jpg",
	back: "images/lost.jpg",
	flipped: false
},
{
	name: "The Night Owl",
	front: "images/night-owl.jpg",
	back: "images/lost.jpg",
	flipped: false
},
{
	name: "Persephone",
	front: "images/persephone.jpg",
	back: "images/lost.jpg",
	flipped: false
},
{
	name: "The Walraven",
	front: "images/raven-flight.jpg",
	back: "images/lost.jpg",
	flipped: false
},
{
	name: "The Seelie Queen",
	front: "images/seelie-queen.jpg",
	back: "images/lost.jpg",
	flipped: false
},
{
	name: "The Shield Maiden",
	front: "images/shield-maiden.jpg",
	back: "images/lost.jpg",
	flipped: false
},
{
	name: "The Swan Princess",
	front: "images/swan-princess.jpg",
	back: "images/lost.jpg",
	flipped: false
},
{
	name: "The Golden Ball",
	front: "images/the-golden-ball.jpg",
	back: "images/lost.jpg",
	flipped: false
},
{
	name: "The White Dove",
	front: "images/white-dove.jpg",
	back: "images/lost.jpg",
	flipped: false
},
{
	name: "The White Stag",
	front: "images/white-stag.jpg",
	back: "images/lost.jpg",
	flipped: false
},
{
	name: "Mother Willow",
	front: "../public/images/willow.jpg",
	back: "../public/images/lost.jpg",
	flipped: false
},
{
	name: "The Wolf",
	front: "../public/images/wolf.jpg",
	back: "../public/images/lost.jpg",
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
// When player clicks start new game
	// game cards are shuffled and backs are displayed
	// A random king card is displayed
	// player hands are reset
	// propmpt player to choose a card

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

// register modal component
Vue.component('modal', {
  template: '#modal-template'
})

// start app
new Vue({
  el: '#app',
  data: {
    showRules: false,
	showAbout: false
  }
})
