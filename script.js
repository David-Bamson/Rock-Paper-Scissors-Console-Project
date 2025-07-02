function playGame () {
    let humanScore = 0;
    let computerScore = 0;  

    function getComputerChoice () {
        const plays = ["rock" , "paper" , "scissors"];
        const randomPlay = Math.floor(Math.random() * 3);
        return plays[randomPlay];
    }


    function getHumanChoice (){
        const input = prompt("Enter [Rock, Paper or Scissors]: ");
        return(input); 
    }


    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase(); 

        if(humanChoice == computerChoice) {
            console.log("It's a tie");
        }
        else if (humanChoice == "rock" && computerChoice == "scissors"){
            console.log("You win! Rock beats scissors");
            humanScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "paper"){
            console.log("You lose! Paper beats rock");
            computerScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "rock"){
            console.log("You win! Paper beats rock");
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors"){
            console.log("You lose! Scissors beats paper");
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper"){
            console.log("You win! Scissors beats paper");
            humanScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock"){
            console.log("You lose! Rock beats scissors");
            computerScore++;
        }

    }
for(let i = 0; i < 5; i++) { 
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score -> Human: ${humanScore} | Computer: ${computerScore}`);
}
}
playGame();
