function getComputerChoice(){
    const choice = Math.random();
    if (choice < 1/3) {
        return "rock";
    } else if (choice > 1/3 && choice < 2/3){
        return "paper";
    } else {
        return "scissors";
    }
};

function getHumanChoice(){
    let choice = window.prompt("Choose between rock, paper or scissors");
    while (choice != "rock" && choice != "paper" && choice != "scissors"){
    choice = window.prompt("Choose between rock, paper or scissors");
    }
    return choice;
}
let choice = getHumanChoice();
console.log(choice);