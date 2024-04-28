function getComputerChoice(){
    const choice = Math.random();
    if (choice < 1/3) {
        return "rock";
    } else if (choice > 1/3 && choice < 2/3){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = window.prompt("Choose between rock, paper or scissors").toLowerCase();
    while (choice != "rock" && choice != "paper" && choice != "scissors"){
    choice = window.prompt("Choose between rock, paper or scissors").toLowerCase();
    }
    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;
    function playRound(humanChoice, computerChoice){
        if (humanChoice == computerChoice){
            console.log("It's a draw, you both choose:",humanChoice);
        } else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
            humanScore++;
            console.log("You win!",humanChoice,"beats",computerChoice);
        } else {
            computerScore++;
            console.log("You lost!",computerChoice,"beats",humanChoice);
        }
    }
    for (let i = 1; i <= 5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore){
        console.log("You won!", humanScore, "against", computerScore);
    } else if (computerScore > humanScore){
        console.log("You lost!", computerScore, "against", humanScore);
    } else{
        console.log("Its a draw!");
    }
}

playGame();