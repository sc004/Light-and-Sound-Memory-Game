//Global Constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//const clueHoldTime = 1000; // how long to hold each clue's light/sound

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000; // how long to hold each clue's light/sound


function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    randPattern(); // generate a random pattern 
    clueHoldTime = 1000; // make sure start of each game has same clueHoldTime
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function randPattern(){ 
  for (let i = 0; i < 8; i++) { // populate the pattern array with random numbers 1 - 6
    pattern[i] = Math.round(Math.random() * 5 + 1); 
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 272,
  2: 330,
  3: 392,
  4: 450,
  5: 510,
  6: 600
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    clueHoldTime -= 10;
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  if (btn == pattern[guessCounter]) {
    if (guessCounter == progress) {
      if (pattern.length - 1 == progress){ 
        winGame();
      }
      else {
        progress++;
        playClueSequence();
      }
    }
    else {
      guessCounter++;
    }
  }
  else {
    loseGame();
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Congratulations! You Won!");
}
