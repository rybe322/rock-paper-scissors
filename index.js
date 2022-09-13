function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function getComputerChoice() {
  switch(randomIntFromInterval(1,3)) {
    case 1 : return 'rock'; break;
    case 2 : return 'paper'; break;
    case 3 : return 'scissors'; break;
    default: break;
  }
}

function getPlayerChoice() {
  let choice = window.prompt("Choose rock paper or scissors")
  return choice;
}

function gameGrader(human, computer) {
  // Returns either 'human', 'computer' or 'tie'
  if (human === computer) return 'tie';
  if ( (human === 'paper') && (computer === 'rock') ) return 'human'
  if ( (human === 'rock') && (computer === 'scissors') ) return 'human'
  if ( (human === 'scissors') && (computer === 'paper') ) return 'human'
  return 'computer'
}

function playNRounds(rounds = 1) {
  for (let i = 0; i < rounds; i ++) {
    let human = getPlayerChoice()
    let computer = getComputerChoice()
    console.log(`human: ${human}.  Computer: ${computer}.  Winner: ${gameGrader(human, computer)}`)
  }
}

let playerScore = 0;
let computerScore = 0;

function playGame() {
  console.log(this)
  const resultDiv = document.querySelector('#result')


  const playerChoice = this.getAttribute('id')
  console.log(playerChoice)
  const computerChoice = getComputerChoice()
  const winner = gameGrader(playerChoice, computerChoice)
  if (winner === 'human') playerScore += 1
  if (winner === 'computer') computerScore += 1

  resultDiv.textContent = `Winner:  ${winner}.  Player Score:  ${playerScore}.  Computer Score:  ${computerScore}`
  
  checkWinner()
}

function checkWinner() {
  const resultDiv = document.querySelector('#result')
  if (playerScore === 5) {
    resultDiv.textContent = `Player wins!  Player Score: ${playerScore}.  Computer Score: ${computerScore}`
    playerScore = 0;
    computerScore = 0;
  }
  if (computerScore === 5) {
    resultDiv.textContent = `Computer Wins!  Player Score: ${playerScore}.  Computer Score:  ${computerScore}`
    playerScore = 0;
    computerScore = 0;
  }
}

function playRound() {

}


const buttons = document.querySelectorAll('.choice')
console.log(buttons)
buttons.forEach(button => button.addEventListener('click', playGame))


