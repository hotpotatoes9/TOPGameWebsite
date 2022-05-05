let playerChoice;
let computerChoice;


function computerChooses(){
    let randomNumber = Math.random();
    console.log(randomNumber);
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



function getPlayerChoice(){
    while(playerChoice == false){
        playerChoice =  prompt("what will you choose?");
        playerChoice = playerChoice.toLowerCase();
        if (playerChoice == "rock" || playerChoice == 'scissors'||playerChoice == 'paper'){
            return playerChoice
        }
        else{
            alert("i did not understand your selection");
            playerChoice = false;
        }
    
    }
}

function playRound(computerChoice, playerChoice){
    if (playerChoice == 'paper'){
        switch(computerChoice){
            case 'paper' :
                alert("tie! Both papers");
                break;
            case 'scissors':
                alert("You lose! scissors cuts paper");
                break;
            default:
                alert ("victory! Your paper wraps rock!");
        }
    }
    else if (playerChoice == 'scissors'){
        switch(computerChoice){
            case 'paper' :
                alert("win! You sliced the competition");
                break;
            case 'scissors':
                alert("Tie!");
                break;
            default:
                alert ("NOOOO! You were rocked!");
        }
    }
    else if (playerChoice == 'rock'){
        switch(computerChoice){
            case 'paper' :
                alert("You were wrapped:(");
                break;
            case 'scissors':
                alert("YAS! Rock the scissors!");
                break;
            default:
                alert ("Tie!");
        }
    }
}

for (let round = 0; round< 5; round ++){
    playerChoice = false;
    computerChoice = false;
    computerChoice = computerChooses();
    //note that computer must choose first
    playRound(computerChoice, getPlayerChoice());
    
}