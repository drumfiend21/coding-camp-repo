//  This is citationchecker.  It checks a scientific publication (any supplied text) for the number of times your research (by your name) was cited.  //
//  The user must have access to the console.  //
//  To use this program, visit: http://htmlpreview.github.io/?https://github.com/drumfiend21/coding-camp-repo/blob/master/citationchecker.html  //

var text = "Citations: 'Solving emotion logic paradigms,' Siddharth Joshi, Journal of Psychology. 2013; 'Rattling the cage: questions of altruism in the meat industry', Michael Baliff, Ethics. 2014; 'The unified field: unified in relation to what?' Siddharth Joshi, Journal of Physics. 2015."

console.log(text);

confirm("Do you want to search this article for number of times your research was cited?");

var yourName = "Siddharth"

var hits = []

for(var i=0; i< text.length; i++)
  { 
      if(text[i]==="S")
        {
        if(text[i+8]==="h")
          {        
          for(var j=i; j<(yourName.length+i); j++)
            {
            hits.push(text[j]);
            }
          }
        }
  }
if(hits.length === 0)
  {
  console.log("Your name wasn't found!");
  }
  
var count = 0;
    
  for(var i=0; i< hits.length; i++)
    {
    if(hits[i]==="S")
      {
      count+=1;
      }
    }

console.log("You were cited in this research " + count + " times.");