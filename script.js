const choiceStr = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0, computerScore = 0;

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

function updateGame(res, player, computer, resDiv, scoreDiv)
{
    if (res == -1)
    {
        resDiv.textContent = "It's a Tie! " + choiceStr[player] + " against " + choiceStr[computer]; 
    }
    else if (res == 0)
    {
        resDiv.textContent = "You Lose! " + choiceStr[computer] + " beats " + choiceStr[player];
        computerScore++;
    }
    else 
    {
        resDiv.textContent = "You Win! " + choiceStr[player] + " beats " + choiceStr[computer];
        playerScore++;
    }

    scoreDiv.textContent = "" + playerScore + " - " + computerScore;

    if (playerScore == 5)
    {
        resDiv.textContent = "You win the game!"
    }
    else if (computerScore == 5)
    {
        resDiv.textContent = "You lose the game."
    }
}

const btns = document.querySelectorAll("button");
const resDiv = document.querySelector(".result-message");
const scoreDiv = document.querySelector(".score");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        let computerChoice = getComputerChoice(), playerChoice = parseInt(btn.dataset.choice);
        let res = playRound(playerChoice, computerChoice);

        updateGame(res, playerChoice, computerChoice, resDiv, scoreDiv)
    })
});

