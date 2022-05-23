let iPlayerScore = 0;
let iComputerScore = 0;

function computerChooses(){
    let randomNumber = Math.random();
    
    if (randomNumber < 0.333){
        return 'rock';
    }
    else if (randomNumber< 0.6667){
        return 'scissors';
    }
    else{
        return 'paper';
    }
}



function playRound(playerChoice){

    
    let computerChoice = computerChooses();
    let score = 0;
    let message;

    if (playerChoice == 'paper'){
        switch(computerChoice){
            case 'paper' :
                message = "tie! Both papers";
                break;
            case 'scissors':
                message = "You lose! scissors cuts paper";
                score = -1;
                break;
            default:
                score = 1;
                message = "victory! Your paper wraps rock!";
        }
    }
    else if (playerChoice == 'scissors'){
        switch(computerChoice){
            case 'paper' :
                message = "win! You sliced the competition";
                score = 1;
                break;
            case 'scissors':
                message = "Tie!";
                break;
            default:
                message = "NOOOO! You were rocked!";
                score = -1;
        }
    }
    else if (playerChoice == 'rock'){
        switch(computerChoice){
            case 'paper' :
                message = "You were wrapped:(";
                score = -1;
                break;
            case 'scissors':
                message = "YAS! Rock the scissors!";
                score = 1;
                break;
            default:
                message = ("Tie!");
        }
    }
    else{
        console.log(playerChoice);
    }
    updateMessge(message, score);

}

function updateMessge(message, score){
    //update once - latest updates
    const roundResult = document.querySelector("#round-result");
    const computerScore = document.querySelector("#computer-score");
    const playerScore = document.querySelector("#player-score");

    roundResult.textContent = message;
    //update continuously - scoreboard

    if (score == 1){
        iPlayerScore ++;
    }
    else if (score == -1){
        iComputerScore ++;
    }
    playerScore.textContent = `You: ${iPlayerScore}`;
    computerScore.textContent = `Computer: ${iComputerScore}`;
    if (iPlayerScore>4){
        roundResult.textContent += " YOU WON!! :D";
        iPlayerScore = 0;
        iComputerScore = 0;
    }
    if (iComputerScore > 4){
        roundResult.textContent += " YOU LOST! D:";
        iPlayerScore = 0;
        iComputerScore = 0;
    }
}

let print = function(string){
    console.log(string);
}


let buttons = document.querySelectorAll(".game");
buttons.forEach(button => {
    button.addEventListener('click',()=>{
        playRound(button.id);
    });
});

