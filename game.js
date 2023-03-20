const choiceEnum = ["rock", "paper", "scissors"]
var sillyChoices = {}
let currentRound = 0
let playerScore = 0
let computerScore = 0

function resetGame() {
    console.clear()
    currentRound = 0  
    playerScore = 0
    computerScore = 0
    console.log("NEW GAME! best 3 out of 5 rounds wins!")
  }

function getComputerChoice() {
  var computerChoice = choiceEnum[Math.floor(Math.random() * choiceEnum.length)]

  return computerChoice
}

function addNewSillyChoice(sillyChoice) {
  
  if (sillyChoice in sillyChoices) {
    let sillyValue = sillyChoices[sillyChoice]
    console.log(`${sillyChoice} already plays as ${sillyValue}`)
    playerChoice = sillyValue

    return 
  }

  var validInput = choiceEnum.includes(sillyChoice)
  while (!validInput) {
    playerInput = prompt(`lol k... now tell me what you want '${sillyChoice}' to play as (rock paper or scissors pls)`,"").toLowerCase()
    validInput = choiceEnum.includes(playerInput)
  }
  let sillyValue = playerInput
  sillyChoices[sillyChoice] = sillyValue
  console.log(`new silly choice added: ${sillyChoice} will play as ${sillyValue}`)
  playerChoice = sillyValue
  return playerChoice
}  


function getPlayerChoice() {
  var playerInput = prompt("Choose your weapon","")
    playerInput = playerInput.toLowerCase()

  
  var validInput = choiceEnum.includes(playerInput) 
  if (!validInput) {
    console.log(`${playerInput} is a silly choice`)
    var sillyChoice = playerInput
    addNewSillyChoice(sillyChoice)

    return
  }
  playerChoice = playerInput
}

function displayScore() {
  console.log(`Computer Score: ${computerScore} | Player Score: ${playerScore}`)  

}

function singleRound() {
  currentRound++
  console.log(`ROUND ${currentRound} STARTED`)
  getPlayerChoice() 
  console.log (`Player chose ${playerChoice}`)

  let computerChoice = getComputerChoice() 
  console.log(`Computer chose ${computerChoice}`)

  if (playerChoice == computerChoice) {
    console.log("IT'S A TIE! Round restarted.")
    currentRound --
   
    return
  }

  if (playerChoice == "rock" && computerChoice == "scissors") {
    console.log(`YOU WIN ROUND ${currentRound}!`)
    playerScore ++
 
    return 
  }

  if (playerChoice == "rock" && computerChoice == "paper") {
    console.log(`YOU LOSE ROUND ${currentRound}!`)
    computerScore ++
   
    return
  }

  if (playerChoice == "paper" && computerChoice == "rock") {
    console.log(`YOU WIN ROUND ${currentRound}!`)
    playerScore ++
   
    return 
  }

  if (playerChoice == "paper" && computerChoice == "scissors") {
    console.log(`YOU LOSE ROUND ${currentRound}!`)
    computerScore ++

    return 
  }

  if (playerChoice == "scissors" && computerChoice == "paper") {
    console.log(`YOU WIN ROUND ${currentRound}!`)
    playerScore ++
   
    return
  }

  if (playerChoice == "scissors" && computerChoice == "rock") {
     console.log(`YOU LOSE ROUND ${currentRound}!`)
    computerScore ++

    return 
  }  
}

function displayWinner() {
  if (playerScore == 3) {
    console.log(`CONGRATULATIONS, YOU WON THE GAME!`)
    displayScore()

    return
  } 

  if (computerScore == 3) {
    console.log(`SORRY, YOU LOST THE GAME!`)
    displayScore()

    return 
  }
}

function gameplay(){
  resetGame()
  singleRound()
  displayScore()
  while (playerScore < 3 && computerScore < 3){
    singleRound()
    displayScore()
    
  } 
  displayWinner()


}



