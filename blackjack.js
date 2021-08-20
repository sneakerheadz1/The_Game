let firstCard = randomCards();
let secondCard = randomCards();
// let drawCardOne = "";
// let drawCardTwo = "" ;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let gameOn = false;
let playMessage;

const gameMessage = document.querySelector(".game-message");
// console.log(gameMessage)
const gameSum = document.querySelector("#game-sum");
const cardOne = document.querySelector(".card-one");
const cardTwo = document.querySelector(".card-two");
const cardThree = document.querySelector(".card-three");
const cardFour = document.querySelector(".card-four");



function startGame() {
  gameOn = true;
  Game()
}

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

  function newCard() {
    if (gameOn === true && BlackJack === false) {
      let drawCard = randomCards();
      sum += drawCard
     Game()
    }
  }



// game function  
function Game() {

    // display card numbers to page
    gameSum.textContent = "Card Total:  " + sum;
    cardOne.textContent = (` Card : \n  ${firstCard} `)
    cardTwo.textContent = (` Card : \n  ${secondCard} `)
    cardThree.textContent = (` Card : \n  ${drawCardOne} `)
    cardThree.textContent = (` Card : \n  ${drawCardTwo} `)
  
  
    if (sum <= 20) {
      playerMessage = "Want to draw another card"
    } else if( sum === 21) {
      BlackJack = true;
      playerMessage = "You Won!!!"
    } else {
      playerMessage = "You Lose!!!"
      gameOn = false;
    }
    gameMessage.textContent = playerMessage;
  }


