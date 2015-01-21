//  This is Dragon Slayer game

//  This game is based around flipping a coin and rolling a 1-10 dice.

//  A 50% probability determines whether the user loses the game immediately to an imaginary dragon,
//  or rolls the dice.

//  The dice roll value exceeds '4,' the dragon is slain.
//  Else, the coin flip iteration begins again until the user loses or dice roll damages exceed '4'.

//  To play the game, the user must have the console open.

var slaying = true;
var youHit = Math.floor(Math.random() * 2); 
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

var confirmer = confirm("Play dragon slayer?  Press 'OK' to continue!")
if(confirmer === true)
  {
  while(slaying)
    {
    if(youHit)
      {
      console.log("You hit the dragon and did " + (totalDamage += damageThisRound) + " damage!");
      if(totalDamage >=4)
        {
        console.log("You slayed the dragon!")
        slaying = false;
        }
      else
        {
        youHit = Math.floor(Math.random() * 2);
        }
      }
    else
      {
      console.log("No dice. The dragon defeated you!");
      slaying = false;
      }
    }  
  }
else
{
console.log("There goes your chance of fighting a dragon.")
}
