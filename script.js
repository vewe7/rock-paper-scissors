const choiceStr = ['Rock', 'Paper', 'Scissors'];

function capitalize(str)
{
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function getComputerChoice() 
{
    return choiceStr[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) 
{
    playerSelection = capitalize(playerSelection);

    if (playerSelection == computerSelection)
    {
        return "It's a Tie! " + playerSelection + " against " + computerSelection; 
    }  
    else if ((choiceStr.indexOf(playerSelection) + 1) % 3 == choiceStr.indexOf(computerSelection))
    {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else 
    {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
}

function printScore(playerScore, computerScore)
{
    console.log("You " + playerScore + " - Computer " + computerScore);
}

function game() 
{
    let playerScore = computerScore = 0;
    let input = prompt("Rock, Paper, or Scissors?", 'Rock');
    let round = playRound(input, getComputerChoice());

    console.log(round);
    
    if (round.charAt(4) == 'W')
    {
        playerScore++;
    }
    else if (round.charAt(4) == 'L')
    {
        computerScore++;
    }

    printScore(playerScore, computerScore);

    if (playerScore > computerScore) 
    {
        console.log("You Win!");
    }
    else if (computerScore > playerScore)
    {
        console.log("You Lose!");
    }
    else 
    {
        console.log("It's a Tie!");
    }
}

const btns = document.querySelectorAll("button");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log(playRound(btn.id, getComputerChoice()));
    })
});