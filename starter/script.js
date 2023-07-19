console.log("hello")
//grab elements

//score
const score0 = document.querySelector('#score--0')
const score1 = document.querySelector('#score--1')

score0.value = 0;
//points held
const heldScore0 = document.querySelector('#current--0')
const heldScore1 = document.querySelector('#current--1')

//dice
const dice = document.querySelector('.dice')

//buttons
const rollDice = document.querySelector('.btn--roll')
const hold = document.querySelector('.btn--hold')

const resetGame = document.querySelector('.btn--new')
console.log(score0.textContent)
//starting conditions

score1.textContent = 0;

heldScore0.textContent = 0;
heldScore1.textContent = 0;




function rollingDice(){

    dice.src = "./dice-1.png"
}

addEventListener('click', rollingDice)