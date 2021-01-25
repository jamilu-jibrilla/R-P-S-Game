let scores = document.querySelector('.scores');
let buttons = document.querySelectorAll('button')

function compPlay() {
    let weapon = ['rock', 'paper', 'scissors'];
    let selection = weapon[Math.floor(Math.random() * weapon.length)];
    return selection
}
let playerScore = 0;
let computerScore = 0;
function playRound(e) {
    let computerSelection = compPlay()
    console.log('player: '+ e.target.id)
    console.log('computer: '+ computerSelection)
    if (computerSelection === 'paper' && e.target.id === 'rock' || computerSelection === 'scissors' && e.target.id === 'paper' || computerSelection === 'rock' && e.target.id === 'scissors') {
        console.log('computer wins! ');
        computerScore++
    } else if (e.target.id === 'paper' && computerSelection === 'rock' || e.target.id === 'scissors' && computerSelection === 'paper' || e.target.id === 'rock' && computerSelection === 'scissors') {
        console.log('you win!!');
        playerScore++;
    } else {
        console.log('enter rock paper or scissors')
    }
    scores.innerHTML = `<h4  class="mt text-white"> human <span class="wd"> ${playerScore} : ${computerScore} </span> computer </h4>`
    if (computerSelection === e.target.id) {
        scores.innerHTML += ` <br> <h4 class="text-success">Tie Play again</h4>`
    }
    if (playerScore === 5) {
        scores.innerHTML = `<h4 class="text-success">You win the match!!</h4>`
        playerScore = 0;  
        computerScore = 0; 
    } else if (computerScore === 5) {
        scores.innerHTML = `<h4 class="text-success">computer wins the match!!</h4> `
        
        playerScore = 0;  
        computerScore = 0; 
    }

}


buttons.forEach(button => {
    button.addEventListener('click',playRound) 
})











// function playerSelect() {
//     let playerSlct = prompt('enter your selection (rock, paper, scissors)'.toLowerCase());
//     return playerSlct
// }
// let computerSelect = compPlay()

// function compPlay() {
//     let weapon = ['rock', 'paper', 'scissors'];
//     let selection = weapon[Math.floor(Math.random() * weapon.length)];
//     return selection
// }
// let playerScore = 0; 
// let computerScore = 0; 
// function playRound(computerPlay, playerSelection) {
//     console.log('player:'+ playerSelection + ' computer:'+computerPlay )

//     if (computerPlay === 'paper' && playerSelection === 'rock' || computerPlay === 'scissors' && playerSelection === 'paper' || computerPlay === 'rock' && playerSelection === 'scissors') {
//         console.log('computer wins! ');
//         return computerScore++;
//     } else if (playerSelection === 'paper' && computerPlay === 'rock' || playerSelection === 'scissors' && computerPlay === 'paper' || playerSelection === 'rock' && computerPlay === 'scissors') {
//         console.log('you win!!');
//         return playerScore++;
//     } else if(computerPlay === playerSelection) {
//         console.log("it's a tie, play again");
//     } else {
//       console.log('enter rock paper or scissors')
//     }
// }



// function game() {
//     let i = 0;
//     while(i < 5) {
//         playRound(compPlay(), playerSelect())
//         i++
//     }

//     if(playerScore > computerScore) {
//         console.log('player wins')
//         return `player ${playerScore} : computer${computerScore}`
//     } else if(computerScore > playerScore) {
//         console.log('computer wins')
//         return `computer ${computerScore} : ${playerScore} player`
//     }
// }
// game()