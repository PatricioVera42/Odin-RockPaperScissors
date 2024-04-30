let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
document.getElementById("rock").addEventListener("click",getHumanChoiceRock);
document.getElementById("paper").addEventListener("click",getHumanChoicePaper);
document.getElementById("scissors").addEventListener("click",getHumanChoiceScissors);

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

function getHumanChoiceRock(){
    computerChoice = getComputerChoice();
    humanChoice = "rock";
    playGame();
}

function getHumanChoicePaper(){
    computerChoice = getComputerChoice();
    humanChoice = "paper";
    playGame();
}

function getHumanChoiceScissors(){
    computerChoice = getComputerChoice();
    humanChoice = "scissors";
    playGame();
}


function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        document.getElementById("result").innerText = "It's a draw! you both choose " + humanChoice;
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        humanScore++;
        document.getElementById("result").innerText = "You win! " + humanChoice + " beats " + computerChoice;
    } else {
        computerScore++;
        document.getElementById("result").innerText = "You lost! " + computerChoice + " beats " + humanChoice;
    }
    document.getElementById("score").innerText = "Score:\n Human: " + humanScore + " - " + computerScore + " Computer";
    document.getElementById("finalResult").innerText = ""
}

function playGame(){
    let humanSelection, computerSelection
    humanSelection = humanChoice;
    computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
    if (humanScore == 5){
        document.getElementById("finalResult").innerText = "You have won the match!"
        humanScore = 0
        computerScore = 0
    }
    else if (computerScore == 5){
        document.getElementById("finalResult").innerText = "You have lost the match!"
        humanScore = 0
        computerScore = 0
    }
}



