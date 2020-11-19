 
const RPS = [
    "rock",
    "paper",
    "scissors"
];

// Game logic
const games_amount = 5;
let games_played = 0;
let score = 0;
function round_complete(result){
    if(result == 1) score++;
    if(result == 2) score--;
    games_played ++;
    console.log(`SCORE: ${score}`);

    if(games_played >= games_amount){
        console.log("END OF GAME");
    }

}


// Let computer play a random element
function computerPlay() {
    let comp_play = Math.floor(Math.random() * RPS.length);
    return comp_play;
}


// Generate results message
function genOutputMsg(results, plr_slct, cmptr_slct){
    // Tie
    if (results == 0) {
        return `It's a tie, both selected ${RPS[plr_slct]}`;

    // Player win
    } else if (results == 1){
        return `You win, ${RPS[plr_slct]} beats ${RPS[cmptr_slct]}`;

    // Player loses
    } else if (results == 2) {
        return `You lost, ${RPS[plr_slct]} looses against ${RPS[cmptr_slct]}`;
    }
}


// Determins the winner
// 0 == tie
// 1 == Player Win
// 2 == Computer Win 
function round(plr_slct, cmptr_slct) {
    let outcome = plr_slct - cmptr_slct;
    if (outcome < 0) outcome += 3;
    
    return outcome;
}


// Plays a single round 
function game(plr_slct) {
    console.log(`PLR_SLCT: ${plr_slct}`);

    let cmptr_slct = computerPlay();
    console.log(`CMPTR_SLCT: ${cmptr_slct}`);

    let result = round(plr_slct, cmptr_slct);
    let result_msg = genOutputMsg(result, plr_slct, cmptr_slct);
    console.log(`RESULT: ${result}`);
    display_results(result_msg);
    round_complete(result)
}