let player_score = 0;
let comp_score = 0;

function playRound(playerVal, compVal) {
  if(playerVal == "rock")
  {
    if(compVal == "comprock")
    {
      return ["tie",compVal,"Tie Game! Rock vs. Rock."];
    }
    else if (compVal == "comppaper")
    {
      return ["comp",compVal,"Computer Wins. Paper Beats Rock"];
    }
    else {
      return ["player",compVal,"Player Wins, Rock beats Scissors"];
    }
  }

  else if(playerVal == "paper")
  {
    if(compVal == "comprock")
    {
      return ["player",compVal,"Player Wins! Paper beats Rock!"];
    }
    else if (compVal == "comppaper")
    {
      return ["tie",compVal,"Tie Game. Paper vs. Paper!"];
    }
    else {
      return ["comp",compVal,"Computer Wins! Scissors cut Paper"];
    }
  }

  else {
    if(compVal == "comprock")
    {
      return ["comp",compVal,"Computer Wins! Rock crushes Paper"];
    }

    else if(compVal == "comppaper")
    {
      return ["player",compVal,"Player Wins! Scissors cut Paper"];
    }

    else {
      return ["tie",compVal,"Tie Game! Scissors vs. Scissors"];
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
    return "comprock";
  }

  else if(compRand==1)
  {
    return "comppaper";
  }

  else {
    return "compscissors";
  }
}

function playRPS()
{
  let el = document.getElementById(event.target.id);
  el.style.backgroundColor = "red";

  //Play the game round
  let result = playRound(event.target.id, getCompVal())

  let comp_el = document.getElementById(result[1]);
  
  comp_el.style.visibility="visible";
  console.log(result[2]);

  document.querySelector('.rps-main').childNodes.forEach(function(e) {
    e.onclick='';
  })

  //print winner
  document.querySelector('.winner').textContent=result[2];

  //increment score variables
  if(result[0]=='player')
  {
    player_score++;
  }

  else if(result[0]=='comp')
  {
    comp_score++;
  }
  
  document.querySelector('#playerwins').textContent=player_score;
  document.querySelector('#compwins').textContent=comp_score;

  //Reset the game
  window.setTimeout(resetGame, 4000, el, comp_el);
  
}

function resetGame(player, comp)
{
  player.style.backgroundColor="#4284f5";
  comp.style.visibility="hidden";
  document.querySelector('.winner').textContent='';
  document.querySelector('.rps-main').childNodes.forEach(function(e) {
    e.onclick=playRPS;
  })
}