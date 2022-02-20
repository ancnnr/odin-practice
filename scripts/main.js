function playRound(playerVal, compVal) {
  if(playerVal == "R")
  {
    if(compVal == "Rock")
    {
      return "Tie Game! Rock vs. Rock.";
    }
    else if (compVal == "Paper")
    {
      return "Computer Wins. Paper Beats Rock";
    }
    else {
      return "Player Wins, Rock beats Scissors";
    }
  }

  else if(playerVal == "P")
  {
    if(compVal == "Rock")
    {
      return "Player Wins! Paper beats Rock!";
    }
    else if (compVal == "Paper")
    {
      return "Tie Game. Paper vs. Paper!";
    }
    else {
      return "Computer Wins! Scissors cut Paper";
    }
  }

  else {
    if(compVal == "Rock")
    {
      return "Computer Wins! Rock crushes Paper";
    }

    else if(compVal == "Paper")
    {
      return "Player Wins! Scissors cut Paper";
    }

    else {
      return "Tie Game! Scissors vs. Scissors";
    }
  }
}

function getPlayVal()
{
  let userVal = "";

  while(userVal != "R" && userVal != "P" && userVal != "S")
  {
    userVal = prompt("Enter (R)ock, (P)aper or (S)cissors: ");
  }
  
  return userVal;
}

function getCompVal()
{
  let compRand = parseInt(Math.random()*3);
  if(compRand==0)
  {
    return "Rock";
  }

  else if(compRand==1)
  {
    return "Paper";
  }

  else {
    return "Scissors";
  }
}

function playRPS()
{
  console.log(playRound(getPlayVal(), getCompVal()));
}
