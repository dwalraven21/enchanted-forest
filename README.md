# Enchanted Forest

A card game that requires players to remember the locations of fairytale treasures. Based on the board game of the same name, published by Ravensburger in Germany in 1981.

## Technology Used

* Front-End: HTML, CSS, JavaScript, Vue.js
* Database: MongoDB / mongoose
* Back-End: Node.js / Express.js

## Deployment

* Deployed on Heroku: https://enchanted-forest.herokuapp.com/

## Inspiration

I was inspired to build this project for a number of reasons.

First, my favorite thing to develop is game logic. I love the challenge and the puzzle-solving aspect of it. To me, building a game is more fun than playing it.

My second favorite part of development is front-end design and animation. What better way to flex my designer and animator muscles than by building a card game with a fairytale theme? The design and animation potential is endless! My favorite effect is the shuffle animation when the player clicks "Start New Game".

Finally, there is a bit of a nostalgia factor. Enchanted Forest was my favorite board game as a kid. It is fairly easy to learn and while it requires a bit of mental concentration, it is accessible to any age group. I always loved the beautiful illustrations on the board and cards and wanted to bring that artistic element to my game as well.

While I love design, I'm not an artist myself, but I was fortunate enough to find an artist who's work was a perfect fit for the ascetic I wanted the game to have.

## Acknowledgments

I would like to give a special thank you to artist, Liiga Klavina, for giving me permission to use her artwork on the game cards. I feel her artwork is really what makes my game special and I can't thank her enough for her lovely work.

You can see more of her artwork online at the following links:

* DeviantArt: https://www.deviantart.com/liigaklavina/gallery
* Instagram: https://www.instagram.com/liigaklavina
* Facebook: https://www.facebook.com/liigaklavinaillustrations/
* Society6: https://society6.com/lgakavia/s?q=popular+prints

## Mockups

![](public/mockups/game.jpg)

![](public/mockups/match.jpg)

![](public/mockups/no-match.jpg)

![](public/mockups/rules.jpg)

## User Stories - This is my MVP

1. When a user lands on the homepage a new game board should be set up (with a randomly generated king card and game cards displayed face down in a random order).
2. A user should be able click a button to see game rules.
3. A user should be able to click a button to start a new game (shuffle cards and generate random king card).
3. A user should see the target or king card displayed at the top of the board.
4. A user should be able to click on a game card to flip it over and reveal a unique image.
5. If the card is a match (same as king card), they should get a point, the card should be added to their hand, they should get to play again, and a new king card should be revealed.
6. If the card is not a match, the turn should switch to the next player.
7. If a player is in the lead this should be indicated visually.
8. Once a player obtains 8 king cards, they are declared the winner and the game is over.
9. A user should be able to register an account and log in to see an authenticated view.
10. If authenticated, player 1 will be the user's name and a record of wins and loses will be maintained.
11. If authenticated, a player can click a button to see all their stats.

## Stretch Goals - These are updates I plan to make in the future

1. A player can set the winning number of cards.
2. A player can choose to play 1 player or 2 player mode.
3. A player can choose to play against a computer on beginner, intermediate, or expert mode:
	* Beginner mode would mean the computer picks cards at random.
	* Intermediate mode would mean the computer remembers if it has seen a card before and will pick the correct card 50% of the time.
	* Expert mode would mean that if the computer has seen the card before, it will choose the correct card 100% of the time.
4. A player can play against a friend who is also registered on the site. The player 2 will become the friend's name and their score will also be recorded.
5. An admin sign in will allow me to delete, update and add cards from the front end.
6. I'll learn React Native or Swift and make a mobile app version of the game.

## Marvel At My Spaghetti Code!

This one function is basically the entire game logic. I named it flip card, because when I first started writing it I had the naive idea that it would just be the function for the actual card flip. I'll refactor this later (is what I'm telling myself).

```JavaScript
// when player clicks a card
// basically the entire game logic is in here
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

		if (self.playerTurn !== player2.name){
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
			self.showCards = false;
			self.kingCard = kingCard;
			card.flipped = !card.flipped

			//if player is logged in, save update their wins or losses
			if (this.currentUser && self.player1.score === 8) {
				fetch('/users/' + this.currentUser._id, {
					method: 'PUT',
					body:JSON.stringify({
						wins: Number(this.currentUser.wins) + 1
					}),
					headers: {
						'Accept': 'application/json, text/plain, */*',
						'Content-Type': 'application/json'
					 }
				})
				.then((res) => res.json())
				.then((data) =>  {

					this.currentUser = data.wins

				})
				.catch((err) => console.error(err))
			} else if (this.currentUser && self.player2.score === 8) {
				fetch('/users/' + this.currentUser._id, {
					method: 'PUT',
					body:JSON.stringify({
						losses: Number(this.currentUser.losses) + 1
					}),
					headers: {
						'Accept': 'application/json, text/plain, */*',
						'Content-Type': 'application/json'
					}
				})
				.then((res) => res.json())
				.then((data) =>  {

					this.currentUser.losses = data.losses
				})
				.catch((err) => console.error(err))
			}
		} else {
			self.kingCard.flipped = true;
			setTimeout(function(){
				self.randomIndex = Math.floor(Math.random() * self.kingDeck.length)
				self.kingCard = self.kingDeck[self.randomIndex]
			}, 1000)

			// wait 2 seconds before prompting player to choose again
			setTimeout(function(){
				// if not, change the king card
				self.kingCard.flipped = false;
				self.message = "The new king card is " + self.kingCard.name;
				card.flipped = !card.flipped
				self.message2 = "Pick a card."
			}, 1500)
		}

	// if card is not a match, let player know
	} else {
		self.message2 = "Sorry, it's not a match."
		// wait 2 seconds, then alternate player's turn
		setTimeout(function(){
			if (self.playerTurn !== player2.name){
				self.playerTurn = player2.name
			} else {
				self.playerTurn = player1.name
			}
			//flip card and prompt player to pick a card
			card.flipped = !card.flipped
			self.message = "Pick a card."
			self.message2 = '';

		}, 2500);
	}
},
```
