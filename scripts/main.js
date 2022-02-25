/*
Main.js --> All core JS for the Rock Paper Scissors Game
Author: Adam Conner
Date: Feb, 2022
*/


//score variables
let player_score = 0;
let comp_score = 0;

//playRound() --> Takes str for playerVal and string for compVal and returns an array: [winner, comp pick, string result statement]
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


//getCompVal() --> uses a quick random to pick which play the comp will make and returns an appropriatre string value
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


//playRPS() --> Core game function to manipulate the DOM and play game
function playRPS()
{
  //grab clicked element
  let el = document.getElementById(event.target.id); 
  el.style.backgroundColor = "red";

  //Get the result of the game round
  let result = playRound(event.target.id, getCompVal())

  //make comp icon visible my moving it to the visible div rps-main
  let comp_el = document.getElementById(result[1]);
  document.querySelector('.rps-comp').append(comp_el); 

  //loop through and disable on-click for all of the buttons until the timer event is over
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

//resetGame() --> Sets everything bcak to where it was and re-enables onclick methods
function resetGame(player, comp)
{
  player.style.backgroundColor="#4284f5";
  document.querySelector('.rps-comp-hidden').appendChild(comp);
  document.querySelector('.winner').textContent='';
  document.querySelector('.rps-main').childNodes.forEach(function(e) {
    e.onclick=playRPS;
  })
}