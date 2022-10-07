console.log('Lodash is loaded:', typeof _ !== 'undefined');
// create collection of four objects
// each object has a unique property name and hand
// create an object that represents a 52 card deck
// each card should have rank (Ace, 2, 3, 4, 5 ... King)
// each card should have a suit (club, spade, heart, diamonds)
// shuffle deck
// deal 2 cards to each player no players should be able to recieve the same card
// find player with highest score
// Ace = 11 face = 10 number = number
// create array with 4 objects with 2 prop name hand
// create array with 52 object
// random method
// if player is assigned a card remove obejct from 52 object
// access player hand property and add value

// function createPlayers() {
//   var playerNames = ['One', 'Two', 'Three', 'Four'];
//   var arrayOfPlayers = [];
//   for (var i = 0; i < playerNames.length; i++) {
//     var player = {
//       playerNames: playerNames[i],
//       hands: ''
//     };
//     arrayOfPlayers.push(player);
//   }
//   return arrayOfPlayers;
// }

// function createCardDeck() {
//   var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
//   var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
//   var deck = [];
//   for (var i = 0; i < suit.length; i++) {
//     for (var j = 0; j < rank.length; j++) {
//       var card = {
//         rank: rank[j],
//         suit: suit[i]
//       };
//       deck.push(card);
//     }
//   }
//   return deck;
// }
