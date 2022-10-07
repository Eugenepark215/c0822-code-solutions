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
// for loop for players
// shift 2 elements in shuffled deck
// assign shifted elements to players hand
// set function to variable
// function to assign face cards and ace integer values
// for loop to iteratere thought player and hands
// conditional to assign 11 to ace and 10 to face
// create variable = 0 for score, add to score and assign to player
// loop through players check for score
// based on which player has highest score console.log player
var players = createPlayers();
var shuffledDeck = _.shuffle(createCardDeck());
var playersWithTwoCards = dealTwoCardsToPlayers();
var playerWithHighestScore = whichPlayerHasHighestScore();

function createPlayers() {
  var playerNames = ['One', 'Two', 'Three', 'Four'];
  var arrayOfPlayers = [];
  for (var i = 0; i < playerNames.length; i++) {
    var player = {
      playerNames: playerNames[i],
      hands: []
    };
    arrayOfPlayers.push(player);
  }
  return arrayOfPlayers;
}

function createCardDeck() {
  var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
  var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  var deck = [];
  for (var i = 0; i < suit.length; i++) {
    for (var j = 0; j < rank.length; j++) {
      var card = {
        rank: rank[j],
        suit: suit[i]
      };
      deck.push(card);
    }
  }
  return deck;
}

function dealTwoCardsToPlayers() {
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < 2; j++) {
      players[i].hands.push(shuffledDeck.shift());
    }
  }
  return players;
}

function whichPlayerHasHighestScore() {
  for (var i = 0; i < playersWithTwoCards.length; i++) {
    var scores = 0;
    var highestScore = 0;
    for (var j = 0; j < playersWithTwoCards[i].hands.length; j++) {
      if (playersWithTwoCards[i].hands[j].rank === 'Ace') {
        playersWithTwoCards[i].hands[j].rank = 11;
      } else if (playersWithTwoCards[i].hands[j].rank === 'Jack' || playersWithTwoCards[i].hands[j].rank === 'Queen' || playersWithTwoCards[i].hands[j].rank === 'King') {
        playersWithTwoCards[i].hands[j].rank = 10;
      }
      scores += playersWithTwoCards[i].hands[j].rank;
      playersWithTwoCards[i].scores = scores;
      if (playersWithTwoCards[i].scores > highestScore) {
        highestScore = playersWithTwoCards[i];
      }
    }
  }
  return highestScore;
}

console.log(playerWithHighestScore);
