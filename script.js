const choiceStr = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0, computerScore = 0;
let gameActive = true;

const btns = document.querySelectorAll("button");
const resDiv = document.querySelector(".result-box");
const scoreDiv = document.querySelector(".score");

const resetBtn = document.querySelector("#reset");

// 0 - Rock; 1 - Paper; 2 - Scissors;
function getComputerChoice() 
{
    return Math.floor(Math.random() * 3);
}

function playRound(player, computer) 
{
    if (player == computer)
    {
        return -1;
    }  
    else if ((player + 1) % 3 == computer)
    {
        return 0;
    }
    else 
    {
        return 1;
    }
}

function printScore(playerScore, computerScore)
{
    console.log("You " + playerScore + " - Computer " + computerScore);
}

function updateResult(resDiv, resContent)
{
    let message = resDiv.removeChild(resDiv.firstChild);
    message.textContent = resContent;
    resDiv.appendChild(message);
}

function endGame(resetBtn)
{
    gameActive = false;
    resetBtn.style.display = "inline-block";
}

function updateGame(res, player, computer, resDiv, scoreDiv)
{
    if (res == -1)
    {
        updateResult(resDiv, "It's a Tie! " + choiceStr[player] + " against " + choiceStr[computer]);
    }
    else if (res == 0)
    {
        updateResult(resDiv, "You Lose! " + choiceStr[computer] + " beats " + choiceStr[player]);
        computerScore++;
    }
    else 
    {
        updateResult(resDiv, "You Win! " + choiceStr[player] + " beats " + choiceStr[computer]);
        playerScore++;
    }

    scoreDiv.textContent = "" + playerScore + " - " + computerScore;

    if (playerScore == 5)
    {
        updateResult(resDiv, "You win the game!");
        endGame(resetBtn);
    }
    else if (computerScore == 5)
    {
        updateResult(resDiv, "You lose the game.");
        endGame(resetBtn);
    }
}



btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (gameActive)
        {
            let computerChoice = getComputerChoice(), playerChoice = parseInt(btn.dataset.choice);
            let res = playRound(playerChoice, computerChoice);

            updateGame(res, playerChoice, computerChoice, resDiv, scoreDiv)
        }
    })
});

resetBtn.addEventListener("click", () => {
    playerScore = 0, computerScore = 0;
    updateResult(resDiv, "ROCK PAPER SCISSORS");
    scoreDiv.textContent = "0 - 0";

    gameActive = true;
    resetBtn.style.display = "none";
});
