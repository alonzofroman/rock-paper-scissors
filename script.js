var input = ["rock", "paper", "scissors"];

var playerInput = window.prompt("Enter rock, paper, or scissors");

// function checkInput(player) {
//     for (var i; i < input.length; i++) {
//         if (playerInput===input[i]) {
//             return player;
            
//         }
//         else {window.prompt("Error")}
//     }
// }

var compInput = input[Math.floor(Math.random()*3)];

var playerWin = 0;
var compWin = 0;

function game(p,c) {
    if (p==="rock" && c==="scissors") {
       playerWin++;
        if (window.confirm("You Win! Your Win Streak is: " + playerWin + " Computer wins: " + compWin + " Play Again?")) {
            var playerInput = window.prompt("Enter rock, paper, or scissors");
            compInput = input[Math.floor(Math.random()*3)];
            game (playerInput, compInput);
        }
        
    }
    else if (p==="scissors" && c==="paper") {
        playerWin++;
        if (window.confirm("You Win! Your Win Streak is: " + playerWin + " Computer wins: " + compWin + " Play Again?")) {
             playerInput = window.prompt("Enter rock, paper, or scissors");
             compInput = input[Math.floor(Math.random()*3)];
            game (playerInput, compInput);
        }
     }
     else if (p==="paper" && c==="rock") {
        playerWin++;
        if (window.confirm("You Win! Your Win Streak is: " + playerWin + " Computer wins: " + compWin + " Play Again?")) {
            playerInput = window.prompt("Enter rock, paper, or scissors");
            compInput = input[Math.floor(Math.random()*3)];
            game (playerInput, compInput);
        }
 
     }
     else if (p===c) {
       if (window.confirm("Draw! Your Win Streak is: " + playerWin + " Computer wins: " + compWin + " Play Again?")) {
         playerInput = window.prompt("Enter rock, paper, or scissors");
         compInput = input[Math.floor(Math.random()*3)];
        game (playerInput, compInput);
       }
     }
     else {
         compWin++
        if (window.confirm("You Lose! Your Win Streak is: " + playerWin + " Computer wins: " + compWin + " Play Again?")) {
             playerInput = window.prompt("Enter rock, paper, or scissors");
             compInput = input[Math.floor(Math.random()*3)];
            game (playerInput, compInput);
        }
     }
} 

game (playerInput, compInput);



