 
const RPS = [
    "rock",
    "paper",
    "scissors"
];

// Plays a random element
function computerPlay() {
    let comp_play = Math.floor(Math.random() * RPS.length);
    return comp_play;
}


// Determins the winner
function round(plr_slct, cmptr_slct) {
    let outcome = plr_slct - cmptr_slct;
    
    // Tie
    if (outcome == 0) {
        return `It's a tie, both selected ${RPS[plr_slct]}`;
    
    // Player win
    } else if (outcome == 1 || outcome == -2){
        return `You win, ${RPS[plr_slct]} beats ${RPS[cmptr_slct]}`;
    
    // Player loses
    } else if (outcome == -1 || outcome == 2) {
        return `You lost, ${RPS[plr_slct]} looses against ${RPS[cmptr_slct]}`;
    }
}

// Get player input
function playerPlay() {
    let usr_slct = prompt("Rock Paper or Scissors");
    usr_slct = usr_slct.toLocaleLowerCase();
    
    // TODO: Error handeling
    return RPS.indexOf(usr_slct);
}

function game(plr_slct) {
    console.log(plr_slct);

    let cmptr_slct = computerPlay();
    console.log(cmptr_slct);

    let result = round(plr_slct, cmptr_slct);
    console.log(result);
    display_results(result);
}