
//grab elements

//score held
let score0 = document.querySelector('#score--0')
let score1 = document.querySelector('#score--1')



//players
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')

const name0 = document.querySelector('#name--0')
const name1 = document.querySelector('#name--1')

//current points
let currentScore0 = document.querySelector('#current--0')
let currentScore1 = document.querySelector('#current--1')
let currentScore = 0;


//dice
const dice = document.querySelector('.dice')

//buttons
const btnRollDice = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


const resetGame = document.querySelector('.btn--new')


//starting conditions
score0.textContent = 0;
score1.textContent = 0;

currentScore0.textContent = 0;
currentScore1.textContent = 0;

dice.classList.add('hidden')

//button event listeners

btnRollDice.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdPoints);
resetGame.addEventListener('click', newGame)

function rollDice(e){
 //1. make random dice roll
 const randomNum = Math.floor(Math.random() * 6) + 1
 //2. display dice
 dice.classList.remove('hidden')
 dice.src = `./dice-${randomNum}.png`
 //3. check for rolled 1: if true, switch to next player
 if(randomNum == 1){ //if player0 lands a 1 switch to player1
     if(player0.classList.contains('player--active')){
         player0.classList.remove('player--active')
         player1.classList.add('player--active')
         currentScore0.textContent = 0;
         currentScore = 0;
     }else{ //if player1 lands a 1 switch to player0
         player1.classList.remove('player--active')
         player0.classList.add('player--active')
         currentScore1.textContent = 0;
         currentScore = 0;
     }
 }else{
     currentScore += randomNum;
     if(player0.classList.contains('player--active')){ //if its player0 turn
         currentScore0.textContent = currentScore;
     }else{ //if its player1 turn
         currentScore1.textContent = currentScore
     }
 }

}

function holdPoints(e){
    if(player0.classList.contains('player--active')){
        score0.textContent = parseInt(score0.textContent) + currentScore;
        player0.classList.remove('player--active')
        player1.classList.add('player--active')
        currentScore0.textContent = 0;
        currentScore = 0;

    }else{
        score1.textContent = parseInt(score1.textContent) + currentScore;
        player1.classList.remove('player--active')
        player0.classList.add('player--active')
        currentScore1.textContent = 0;
        currentScore = 0;
    }
}

function newGame(e){
    score0.textContent = 0;
    score1.textContent = 0;

    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    player0.classList.remove('player--winner')
    name0.classList.remove('player-winner')
    player1.classList.remove('player--winner')
    name1.classList.remove('player-winner')
    dice.classList.add('hidden')

    btnRollDice.addEventListener('click', rollDice);

    btnHold.addEventListener('click', holdPoints);
}

score0.textContent = 100;
//winning condition
if(parseInt(score0.textContent) >= 100){
    player0.classList.add('player--winner')
    name0.classList.add('player--winner')
    btnHold.removeEventListener('click', holdPoints)
    btnRollDice.removeEventListener('click', rollDice)
}else if(parseInt(score1.textContent) >= 100){
    player1.classList.add('player--winner')
    name1.classList.add('player--winner')
    btnHold.removeEventListener('click', holdPoints)
    btnRollDice.removeEventListener('click', rollDice)
}