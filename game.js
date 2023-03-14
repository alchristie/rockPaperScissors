const choiceEnum = ["rock", "paper", "scissors"]
var sillyChoices = {}

function resetGame() {
    console.clear()
  }

function getComputerChoice() {
  var computerChoice = choiceEnum[Math.floor(Math.random() * choiceEnum.length)]

  return computerChoice
}

function addNewSillyChoice(sillyChoice, validChoice) {

  console.log(`sillyChoice set to: ${sillyChoice}`) 
  console.log(`validChoice set to: ${validChoice}` )
  //check if sillychoices[key] exists
  if (sillyChoice in sillyChoices) {
    //if it exists, break/return
    console.log(`${sillyChoice} is already in silly choices list as ${validChoice}`)

    return validChoice
  }

  //otherwise, add sillychoice,validchoice to sillychoices
  // do something
  // console.log('new silly choice: ${silly choice}')
  // return something

  }



function getPlayerChoice() {
  var playerInput = prompt("Choose your weapon","")
    playerInput = playerInput.toLowerCase()
  
  var validInput = choiceEnum.includes(playerInput)
  if (!validInput) {
    console.log(playerInput + " is invalid")
    var sillyChoice = playerInput
    while (!validInput) {
      playerInput = prompt(`lol k... now tell me what you want '${sillyChoice}' to play as (rock paper or scissors pls)`,"").toLowerCase()
      validInput = choiceEnum.includes(playerInput)
    }
    var validChoice = playerInput
    addSillyChoice(sillyChoice,validChoice)
    
    return sillyChoice
  }
      
     

    var playerChoice = playerInput
    
    return playerChoice
  }

  function getWinner() {
    // logic function and get function
    
  }

  function displayWinner() {
    // doing function
  }
 
  function singleRound() {
    let computerChoice = getComputerChoice() 
    console.log("Computer chose " + computerChoice)

    let playerChoice = getPlayerChoice() 
    console.log (`Player chose ${playerChoice}`)


    // getWinner() //get value //hint: needs parameters

    // displayWinner() // display choices and winner to console //hint: needs parameters
  }
    
    // is PlayerInput a valid value in choiceEnum
      //if yes
        //play round
        //declare winner
        //tally round count and score
        //ask to start next round
      //if no
        //convert answer
        //play round
        //declare winner
        //tally round count and score
        //ask to start next round


    //computer asks players
    //who submit unknown answers for the first time which option they meant 
    //with a choice to click one of the three hand signs. If playerChoice has 
    //been chosen the most times as 
    //one of the valid choices 
    //it will be played as such and
    //pop up says we identified your
    //choice as rock, is that what you
    //meant? (gives choice rock paper scissors)

    
    //run arguments through game engine, return winner
      // zaddy hint:: var winner = getWinner(player, computer)


    //display message win/loss/tie