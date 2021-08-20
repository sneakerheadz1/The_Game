let firstCard = randomCards();
let secondCard = randomCards();
// let drawCardOne = "";
// let drawCardTwo = "" ;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let gameOn = false;
let round = 0;
let playMessage;

const gameMessage = document.querySelector(".game-message");
// console.log(gameMessage)
const gameSum = document.querySelector("#game-sum");
const cardOne = document.querySelector(".card-one");
const cardTwo = document.querySelector(".card-two");
const cardThree = document.querySelector(".card-three");
const cardFour = document.querySelector(".card-four");



// shuffle cards 
function randomCards () {
    let randomCard = Math.floor(Math.random() * 12) + 1
    if (randomCard > 10) {
      return 10
    } else if (randomCard === 1) {
      return 11
    } else {
      return randomCard;
    }
  }

  // allow player to draw card
  function newCard() {
    if (gameOn === true && BlackJack === false) {
      let drawCard = randomCards();
      sum += drawCard
     Game()
    }
  }



// game function  
function Game() {

  gameSum.textContent = "Sum:  " +  sum;
  cardOne.textContent = (`New Card : 
  ${firstCard} `)
  cardTwo.textContent = (`New Card :
   ${secondCard} `)
//   cardThree.textContent = (`Draw Card : 
//   ${drawCardOne} `)


  if (sum <= 20) {
    playerMessage = (`Want to draw another card or stay?`)
    // if(!draw){ `Wait for dealer to play ${sum}`}
  } else if( sum === 21) {
    BlackJack = true;
    round += 1
    playerMessage = (`You Won!!! ${round}`)
    Game()
  } else {
    playerMessage = (`You Lose!!!`)
    isAlive = false;
  }
  gameMessage.textContent = playMessage;
}


  // start game function
  function startGame() {
    gameOn = true;
    Game()
  }