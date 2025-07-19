const display = document.getElementById('display');
const score = document.getElementById('score');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const human = document.getElementById('humanpick');
const computer= document.getElementById('computerpick');



    let humanScore = 0;
    let computerScore = 0; 
    let gameover = false; 

    function getComputerChoice () {
        const plays = ["rock" , "paper" , "scissors"];
        const randomPlay = Math.floor(Math.random() * plays.length);
        return plays[randomPlay];
    }



    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase(); 

        if(humanChoice == computerChoice) {
            console.log("It's a tie");
        }

        else if ( 
                (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice == "paper" && computerChoice == "rock") ||
                (humanChoice == "scissors" && computerChoice == "paper")
        ){
                human.textContent = `You chose ${humanChoice}`;
                computer.textContent = `Computer chose ${computerChoice}`;
                display.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
                humanScore++;
        }

        else{
            display.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }

         score.textContent = `Score -> Human: ${humanScore} | Computer: ${computerScore}`;

         if (humanScore === 5 || computerScore === 5) {
            gameover = true;
            endgame();
         }
    }

function playGame(event) {
    if (gameover) return;



    const humanChoice = event.target.id;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

function endgame() {
    if(humanScore === 5) {
        display.textContent = " You reached 5! You win the game";
    }
    else if(computerScore === 5) {
        display.textContent = "Computer reached 5! You lose the game";
    }
}


rock.addEventListener('click', playGame);
paper.addEventListener('click', playGame);
scissors.addEventListener('click', playGame);
