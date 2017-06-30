// EXERCISE 2: Shuffling

console.log("hello");

function generateDeck(){
  var tempDeck = [];

  for(var n = 1; n <= 52; n += 1){
    tempDeck.push(n);
  }
  return tempDeck;
}

var deck = generateDeck();

// console.log("my deck is:", deck);

function shuffle(deckIn){
  for(var n = 0; n < deckIn.length; n += 1){
    var currentIndex = deckIn.indexOf(deckIn[n]);
    var swapIndex = deckIn.indexOf(deckIn[Math.floor(Math.random() * deckIn.length)]);
    var tempCard = deckIn[currentIndex];

    deckIn[currentIndex] = deckIn[swapIndex];
    deckIn[swapIndex] = tempCard;
  }

  console.log("SHUFFLED DECK:", deckIn);
  console.log("SHUFFLED DECK LENGTH:", deckIn.length);
  return deckIn;
}

deck = shuffle(deck);
var checkArray = [];

deck.forEach(function(card,index){
  if(deck.indexOf(card) === index){
    checkArray.push(card);
  }
})

console.log("CHECK ARRAY LENGTH:",checkArray.length);
