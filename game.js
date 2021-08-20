let score = 0;
let game = true;
const computerSeq = [];
const playerOneSeq = [];
const keyCodes = ["keyD", "keyF", "keyG", "keyH"]
let compTurn;
let playerTurn;
let intervalId;
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
      while(game) {
        computerSeq.push(keyCodes[Math.floor(Math.random() * 4) + 1]);
        userMove()
        game = false;
      }
  };

  function userMove (){
    document.addEventListener('keydown', function(event) {
    playerOneSeq.push(event.code)
    });
  };
  
