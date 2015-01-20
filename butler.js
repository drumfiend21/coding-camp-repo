var energy = prompt("We'll use our complex matching system to pick a tie for you today. What energy do you want to portray? (Enter: '1' for power bold, '2' for conservative', or '3' for mute sophisticated)");

if(energy === "1")
{
console.log("We are matching so your look conveys a power bold energy.");
}
else if(energy === "2")
{
console.log("We are matching so your look conveys a conservative energy.");
}
else if(energy === "3")
{
console.log("We are matching so your look conveys a mute sophisticated energy.");
}
else
{
console.log("Did you enter that right? Please try it again.");
var energy = prompt("What energy do you want to portray? (Enter: '1' for power bold, '2' for conservative', or '3' for mute sophisticated)");

if(energy === "1")
{
console.log("We are matching so your look conveys a power bold energy.");
}
else if(energy === "2")
{
console.log("We are matching so your look conveys a conservative energy.");
}
else if(energy === "3")
{
console.log("We are matching so your look conveys a mute sophisticated energy.");
}
}


var clothingColor = prompt("Let's pick a tie for your shirt.  What color is your shirt? (Choose: red, orange, yellow, green, blue, pink, purple, brown, black, gray, white.");

if(clothingColor === "white")
{
    {
    var jacketVerify = prompt("You can pick any color tie for that shade shirt. We can match for a jacket. Are you wearing a jacket? (Answer: yes or no)");
    }
    if(jacketVerify === "yes")
    {
        var jacketColor = prompt("What color is your jacket? (Choose: red, orange, yellow, green, blue, pink, purple, brown, black, gray, white).");
        if(jacketColor === "white")
         {
    console.log("Feel free to choose whatever color tie you want. You'll look great!");    
         }
        else if (jacketColor === "black")
         {
    console.log("Feel free to choose whatever color tie you want. You'll look great!");    
         }
        else if (jacketColor === "gray")
         {
    console.log("Feel free to choose whatever color tie you want. You'll look great!");    
         }
        else
        {
            console.log("We are matching a tie for your jacket color: " + jacketColor + ".");
        }    
    }
    else
    {
    console.log("Feel free to choose whatever color tie you want. You'll look great!");    
    } 
}
else if(clothingColor === "black")
{
    {
    var jacketVerify = prompt("You can pick any color tie for that shade shirt. We can match for a jacket. Are you wearing a jacket? (Answer: yes or no)");
    }
    if(jacketVerify === "yes")
    {
        var jacketColor = prompt("What color is your jacket? (Choose: red, orange, yellow, green, blue, pink, purple, brown, black, gray, white).");
        if(jacketColor === "white")
         {
    console.log("Feel free to choose whatever color tie you want. You'll look great!");    
         }
        else if (jacketColor === "black")
         {
    console.log("Feel free to choose whatever color tie you want. You'll look great!");    
         }
        else if (jacketColor === "gray")
         {
    console.log("Feel free to choose whatever color tie you want. You'll look great!");    
         }
        else
        {
            console.log("We are matching a tie for your jacket color: " + jacketColor + ".");
        }    
    }
    else
    {
    console.log("Feel free to choose whatever color tie you want. You'll look great!");    
    } 
}
else if(clothingColor === "gray")
{
    {
    var jacketVerify = prompt("You can pick any color tie for that shade shirt. We can match for a jacket. Are you wearing a jacket? (Answer: yes or no)");
    }
    if(jacketVerify === "yes")
    {
        var jacketColor = prompt("What color is your jacket? (Choose: red, orange, yellow, green, blue, pink, purple, brown, black, gray, white).");
        if(jacketColor === "white")
         {
    console.log("Feel free to choose whatever color tie you want. You'll look great!");    
         }
        else if (jacketColor === "black")
         {
    console.log("Feel free to choose whatever color tie you want. You'll look great!");    
         }
        else if (jacketColor === "gray")
         {
    console.log("Feel free to choose whatever color tie you want. You'll look great!");    
         }
        else
        {
            console.log("We are matching a tie for your jacket color: " + jacketColor + ".");
        }    
    }
    else
    {
    console.log("Feel free to choose whatever color tie you want. You'll look great!");    
    } 
}
else
{
    console.log("We are matching a tie for your shirt color: " + clothingColor + ".");
}

if(jacketVerify === "yes")
{
    var clothingColor = jacketColor
}

if(clothingColor === "red")
{
    if(energy === "1")
    {
        console.log("For a power bold look, red will go best with a dark green tie.  Knock em dead, it's a surefire combo.");
    }
    else if(energy === "2")
    {
        console.log("For a conservative look, red will go best with a dark blue tie.  Tried and true, it's a surefire combo.");
    }
    else if(energy === "3")
    {
    console.log("For a mute sophisticated look, red will go best with a dark purple tie.  Lookin' sharp, it's a surefire combo.");
    }
}

else if(clothingColor === "orange")
{
    if(energy === "1")
    {
        console.log("For a power bold look, orange will go best with a dark blue tie.  Knock em dead, it's a surefire combo.");
    }
    else if(energy === "2")
    {
        console.log("For a conservative look, orange will go best with a dark red or dark green tie.  Tried and true, it's a surefire combo.");
    }
    else if(energy === "3")
    {
    console.log("For a mute sophisticated look, orange will go best with a light green or darker orange tie.  Lookin' sharp, it's a surefire combo.");
    }
}
else if(clothingColor === "yellow")
{
    if(energy === "1")
    {
        console.log("For a power bold look, yellow will go best with a dark purple tie.  Knock em dead, it's a surefire combo.");
    }
    else if(energy === "2")
    {
        console.log("For a conservative look, yellow will go best with a red-orange or blue-green tie.  Tried and true, it's a surefire combo.");
    }
    else if(energy === "3")
    {
    console.log("For a mute sophisticated look, yellow will go best with a light orange or light green tie.  Lookin' sharp, it's a surefire combo.");
    }
}
else if(clothingColor === "green")
{
    if(energy === "1")
    {
        console.log("For a power bold look, green will go best with a dark red or purple tie.  Knock em dead, it's a surefire combo.");
    }
    else if(energy === "2")
    {
        console.log("For a conservative look, green will go best with a dark orange, dark blue, or dark purple tie.  Tried and true, it's a surefire combo.");
    }
    else if(energy === "3")
    {
    console.log("For a mute sophisticated look, green will go best with a darker green or blue-green tie.  Lookin' sharp, it's a surefire combo.");
    }
}
else if(clothingColor === "blue")
{
    if(energy === "1")
    {
        console.log("For a power bold look, blue will go best with an orange tie.  Knock em dead, it's a surefire combo.");
    }
    else if(energy === "2")
    {
        console.log("For a conservative look, blue will go best with a purple or dark red tie.  Tried and true, it's a surefire combo.");
    }
    else if(energy === "3")
    {
    console.log("For a mute sophisticated look, blue will go best with a darker blue or dark green tie.  Lookin' sharp, it's a surefire combo.");
    }
}
else if(clothingColor === "pink")
{
    if(energy === "1")
    {
        console.log("For a power bold look, pink will go best with a green or khaki tie.  Knock em dead, it's a surefire combo.");
    }
    else if(energy === "2")
    {
        console.log("For a conservative look, pink will go best with a blue tie.  Tried and true, it's a surefire combo.");
    }
    else if(energy === "3")
    {
    console.log("For a mute sophisticated look, pink will go best with a purple tie.  Lookin' sharp, it's a surefire combo.");
    }
}
else if(clothingColor === "purple")
{
    if(energy === "1")
    {
        console.log("For a power bold look, purple will go best with a dark green tie.  Knock em dead, it's a surefire combo.");
    }
    else if(energy === "2")
    {
        console.log("For a conservative look, purple will go best with a dark orange or dark blue tie.  Tried and true, it's a surefire combo.");
    }
    else if(energy === "3")
    {
    console.log("For a mute sophisticated look, purple will go best with a darker purple or dark red tie.  Lookin' sharp, it's a surefire combo.");
    }
}
else if(clothingColor === "brown")
{
    if(energy === "1")
    {
        console.log("For a power bold look, brown will go best with a green tie.  Knock em dead, it's a surefire combo.");
    }
    else if(energy === "2")
    {
        console.log("For a conservative look, brown will go best with a dark blue or dark orange tie.  Tried and true, it's a surefire combo.");
    }
    else if(energy === "3")
    {
    console.log("For a mute sophisticated look, brown will go best with a red or purple tie.  Lookin' sharp, it's a surefire combo.");
    }
}


