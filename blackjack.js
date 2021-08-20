// variable
let firstCard = randomCards();
let secondCard = randomCards();
// let drawCardOne = "";
// let drawCardTwo = "" ;
let sum = firstCard + secondCard;
let BlackJack = false;
let gameOn = false;
let round = 0;
let playMessage;


// DOM elements
const gameMessage = document.querySelector(".game-message");
// console.log(gameMessage)
const gameSum = document.querySelector("#game-sum");
// console.log(gameSum)
const cardOne = document.querySelector(".card-one");
const cardTwo = document.querySelector(".card-two");
const cardThree = document.querySelector(".card-three");
const cardFour = document.querySelector(".card-four");




function Game() {

  gameSum.textContent = "Sum:  " +  sum;
  cardOne.textContent = (`New Card : 
  ${firstCard} `)
  cardTwo.textContent = (`New Card :
   ${secondCard} `)
//   cardThree.textContent = (`Draw Card : 
//   ${drawCardOne} `)


  if (sum <= 20) {
    playMessage = (`Want to draw another card or stay?`)
    // if(!draw){ `Wait for dealer to play ${sum}`}
  } else if( sum === 21) {
    BlackJack = true;
    round += 1
    playMessage = (`You Won!!! ${round}`)
    Game()
  } else {
    playMessage = (`You Lose!!!`)
    isAlive = false;
  }
  gameMessage.textContent = playMessage;
}

function randomCards ()  {

  let randomCard = Math.floor(Math.random() * 12) + 1
  if (randomCard > 10) {
    return 10
  } else if (randomCard === 1) { // allow player to make choice
    return 11
  } else {
    return randomCard;
    //console.log(randomCard)
  }
}

function newCard () {
  if (gameOn === true && BlackJack === false) {
    drawCardOne = randomCards();
    cardThree.textContent = (`Draw Card : 
  ${drawCardOne} `)
  
  }
  // else{
  //   if (gameOn === true && BlackJack === false) {
  //     drawCardTwo = randomCards();
  //     cardFour.textContent = (`Draw Card : 
  //   ${drawCardTwo} `)
    
  //   }
  // }
  gameSum.textContent = (`Sum : ${sum += drawCardOne}`)
    Game()
}

function startGame() {
  gameOn = true;
  Game()
}