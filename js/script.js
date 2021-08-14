// (classes to add and styles edit for winner)=>winner,winnerText, borderThree,borderTwo,borderOne
let winnerAnnouncement = document.querySelector(".winnerAnnouncement")
let normalWindow = document.querySelector(".selectPlay")
let playerWindow = document.querySelector(".playerSlection")
let computerWindow = document.querySelector(".computerSelection")
let morePlay = document.querySelector(".morePlay")
let morePlaybtn = document.querySelector(".morePlay button")
let morePlaytext = document.querySelector(".morePlay h2")
let imgGradComp = document.querySelector("#imgGradComp")
let imgGradPlayer = document.querySelector("#imgGradPlayer")
let selection1 = document.querySelector(".selection1")
let selection2 = document.querySelector(".selection2")
let score = 0
morePlaybtn.addEventListener("click", () => {
    winnerAnnouncement.setAttribute("style", "display: none")
    normalWindow.classList.remove("removeDisplay")
})
function random(min, max) {
    let randomNum = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(randomNum)
}
function computerPlayed() {
    let array = ["rock", "paper", "scissors"]
    return array[random(0, 2)]
}
function clearGrad() {
    selection2.classList.remove("paperGradient")
    selection2.classList.remove("rockGradient")
    selection2.classList.remove("scissorsGradient")
    selection1.classList.remove("paperGradient")
    selection1.classList.remove("rockGradient")
    selection1.classList.remove("scissorsGradient")
}
function playRound() {
    let buttons = document.querySelectorAll(".selectPlay")[0].children
    for (let item of buttons) {
        
        item.addEventListener("click", function (e) {
            normalWindow.classList.add("removeDisplay")
            winnerAnnouncement.setAttribute("style", "display: flex")
            let playerBtn = e.target.id
            let computerSelection = computerPlayed()
            clearGrad()
            switch (computerSelection) {
                case "paper":
                    imgGradComp.src = "assets/images/icon-paper.svg"
                    selection2.classList.add("paperGradient")
                    break;
                case "rock":
                    imgGradComp.src = "assets/images/icon-rock.svg"
                    selection2.classList.add("rockGradient")
                    break;
                case "scissors":
                    imgGradComp.src = "assets/images/icon-scissors.svg"
                    selection2.classList.add("scissorsGradient")
                    break;
            }

            switch (playerBtn) {
                case "paper":
                    imgGradPlayer.src = "assets/images/icon-paper.svg"
                    selection1.classList.add("paperGradient")
                    break;
                case "rock":
                    imgGradPlayer.src = "assets/images/icon-rock.svg"
                    selection1.classList.add("rockGradient")
                    break;
                case "scissors":
                    imgGradPlayer.src = "assets/images/icon-scissors.svg"
                    selection1.classList.add("scissorsGradient")
                    break;
            }


            if (computerSelection === playerBtn) {
                morePlaytext.textContent = "IT'S A TIE"
            } else if (computerSelection === 'paper' && playerBtn === 'rock' || computerSelection === 'scissors' && playerBtn === 'paper' || computerSelection === 'rock' && playerBtn === 'scissors') {
                morePlaytext.textContent = "YOU LOSE"
            } else if (playerBtn === 'paper' && computerSelection === 'rock' || playerBtn === 'scissors' && computerSelection === 'paper' || playerBtn === 'rock' && computerSelection === 'scissors') {
                morePlaytext.textContent = "YOU WIN"
                score++
                document.querySelector('.number').textContent = score
                document.querySelector(".morePlay Button").style.color = "green"
            } else {
            }
        })
    }
}
playRound()
