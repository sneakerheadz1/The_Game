//  variables

let score = 0;
let computerSeq = [];
let playerOneSeq = []
let playerTwoSeq = [];


//  research more efficient  ways to write this code
// keyboard functions  --- https://www.section.io/engineering-education/keyboard-events-in-javascript/
document.addEventListener('keydown', (e) => {
    // console.log(e.code);     // -- https://developers.google.com/web/updates/2016/04/keyboardevent-keys-codes
    const key =  document.querySelector(`data-key="${e.keyCode}"`);
    console.log(key)
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(sound);
    // if(sound == null) return; // if no sound is associated with key stop function
    // sound.play();
    key.classList.add('playing')

  });

  let  RandInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




