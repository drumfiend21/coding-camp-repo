//  Do you want to get enlightened?

//  This program was a coding exercise that I developed based on my love for meditation and spirituality.

//  It is coded using prompts, switch cases, operators, and if else.

//  To view program results, the user must have console open. 


var user= prompt("Do you want to become enlightened?  Yes, no or maybe?").toUpperCase();
switch(user){
    case 'YES':
        var meditate = prompt("Do you meditate?").toUpperCase();
        var guru = prompt("Do you have a Guru?").toUpperCase();
        if(meditate === 'YES' || guru === 'YES'){
            console.log("If you meditate, you will find the guru!  If you have a guru you will find meditation!  And both lead you to the truth!");
        }
        else{
         console.log("Meditation is the source of growth on any path!  It is actually a natural human state that we all move away from, along with happiness and childlike qualities, so it is the core of any spiritual practice or religion.  Get initiated by a teacher and start meditating today to reach your goal!  Art of Living has a world class program.  Perhaps the best.");       
        }
    break;
    case 'NO':
        var inception = prompt("Did you see the movie Inception?").toUpperCase();
        var matrix = prompt("Did you see the movie The Matrix?").toUpperCase();
        if(inception=== 'YES' || matrix === 'YES'){
            console.log("Enlightenment is like how the main character discovers the world is a dream or illusion and then finds freedom, peace, and all skills and heroic qualities blossoming.  You'll love it.  Check out Art of Living.");
        }
        else{
        console.log("You will love it.  You know many of the world's most successful people are on a spiritual path, including Forbes CEO's, presidents and prime ministers, and top athletes.  It gives you more energy and that edge... and less need for sleep!  But I didn't tell you that!");
        }
        break;
    case 'MAYBE':
        var energy= prompt("Do you want more energy? Yes or no.").toUpperCase();
        var happy = prompt("Do you want to be happy no matter what? Yes or no.").toUpperCase();
        if(energy === 'YES' && happy === 'YES'){
            console.log("Well you're a natural then!  Get initiated in meditation by a teacher to reach your goals!  Art of Living has a world class program.  Perhaps the best.");
        }
        else{
        console.log("Who doesn't want to be happy no matter what AND have more energy?  What are you crazy?  All positive qualities blossom in an individual who is on a spiritual path.  It gives people better relationships, happiness, more energy, and success in work!  Check out Art of Living.");
        }
        break;
    default: 
        console.log("I didn't understand your input.  Please retry.")
        break;
}