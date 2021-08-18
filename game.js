let score = 0;
let computerSeq = [];
let playerOneSeq = []
// let playerTwoSeq = [];
let compTurn;
let intervalId;  // time interval set null
let strict = false;
let turn;




const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#bulls");
const topRight = document.querySelector("#lakers");
const bottomLeft = document.querySelector("#wizards");
const bottomRight = document.querySelector("#warriors");
const strictButton = document.querySelector("#strict"); //add strict option
const onButton = document.querySelector("#on"); // add or delete
const startButton = document.querySelector("#start");



  startButton.addEventListener('click', (event) => {
      play();
 
  });
  
  function play() {
    order = [];
    turn = 1;
    for (var i = 0; i < 4; i++) {
      order.push(Math.floor(Math.random() * 4) + 1);
      console.log(order)
    }
  }