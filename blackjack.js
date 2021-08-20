// variable
let firstCard = randomCards();
let secondCard = randomCards();
let drawCardOne = randomCards();
let drawCardTwo = randomCards();
let sum = firstCard + secondCard + drawCardOne + drawCardOne;
let BlackJack = false;
let gameOn = false;
let playerMessage;


// DOM elements
const gameMessage = document.querySelector("#game-message");
// console.log(gameMessage)
const gameSum = document.querySelector(".game-sum");
// console.log(gameSum)
const cardOne = document.querySelector(".card-one");
// console.log(cardOne)
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


