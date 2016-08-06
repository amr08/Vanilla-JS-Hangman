var word = ["beachboys", "jackjohnson", "dickdale", "311", "bobmarley"];
var random = Math.floor(Math.random() * 5)
var actualLetters = word[random];
var length = actualLetters.length;  
var hidden = [];
var guessesLeft = 12;
var correct = length;
var output = "";
//var letters = actualLetters.split ('');

var losses = 0;
var wins= 0;
var list = [];
var totalWins = 0;




//works
function gameStart() {
    
    for(var i = 0; i < actualLetters.length; i++) {
        hidden[i] = "_";
        //output = output + hidden[i];

    }
        

    document.getElementById("secretAnswer").innerHTML = hidden;
    
output = "";

}

//end


document.onkeypress = function(event) {

        output = "";
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        
            for(var j = 0; j < actualLetters.length; j++) {

                if (userGuess == actualLetters[j]) {
                    hidden[j] = userGuess;
                    correct--;
                    
                 }

                 //else {
                    //output= output + hidden[j];

                 //}

            }

document.getElementById("secretAnswer").innerHTML = hidden;

                

//Works!! Leave it
if(actualLetters.indexOf(userGuess) == - 1) {
          
    list.push(userGuess);
    document.getElementById("answersGuessed").innerHTML = list;
    guessesLeft--;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    }   
 //
     
    
    //music works!
 output = " ";

            if (correct <= 0 && guessesLeft > 0 && actualLetters == "beachboys") {
                wins++;
         
                        document.getElementById("game").innerHTML =  wins;
                        var audio = "<audio autoplay = 'autoplay' >" + "<source src='https://ia800202.us.archive.org/27/items/14TheBeachBoysTheWarmthOfTheSun/The%20Beach%20Boys%20-%20Good%20Vibrations.mp3'></audio>"   
                        document.querySelector("#audio").innerHTML = audio;  
                        var picture = "<img src='https://raw.githubusercontent.com/amr08/week-3-game/master/assets/images/onprinciple-beachboys-surfergirl-500.jpg'>"
                        document.querySelector("#picture").innerHTML = picture; 
                       
  restart();
                       }

                    
    
            else if (correct <= 0 && guessesLeft > 0 && actualLetters == "jackjohnson") {
                wins++;
         
                        document.getElementById("game").innerHTML =  wins;
                        var audio = "<audio autoplay = 'autoplay' >" + "<source src='https://ia601008.us.archive.org/31/items/JackJohnsonSittingWaitingWishingToqueMP3/jack%20johnson%20banana%20pancakes%20-%20[Toque%20MP3].mp3'></audio>"   
                        document.querySelector("#audio").innerHTML = audio;  
                        var picture = "<img src='https://raw.githubusercontent.com/amr08/week-3-game/master/assets/images/800beb7840472ea335bcd4dfe59d4fca.jpg'>"
                        document.querySelector("#picture").innerHTML = picture; 
                        restart(); 
                        
                    }   

             else if (correct <= 0 && guessesLeft > 0 && actualLetters == "dickdale") {
                wins++;
         
                        document.getElementById("game").innerHTML =  wins;
                        var audio = "<audio autoplay = 'autoplay' >" + "<source src='https://ia801606.us.archive.org/31/items/DickDaleAndTheDeltones-01-50/DickDaleAndTheDel-tones-Misirlou.mp3'></audio>"   
                        document.querySelector("#audio").innerHTML = audio;  
                        var picture = "<img src='https://raw.githubusercontent.com/amr08/week-3-game/master/assets/images/216931.jpg'>"
                        document.querySelector("#picture").innerHTML = picture; 
                        restart();
                    }
                   

             else if (correct <= 1 && guessesLeft > 0 && actualLetters == "311") {
                wins++;
         
                        document.getElementById("game").innerHTML =  wins;
                        var audio = "<audio autoplay = 'autoplay' >" + "<source src='https://ia601008.us.archive.org/18/items/311IllBeHereAwhile/311%20-%20I%27ll%20Be%20Here%20Awhile.mp3'></audio>"   
                        document.querySelector("#audio").innerHTML = audio;  
                        var picture = "<img src='https://raw.githubusercontent.com/amr08/week-3-game/master/assets/images/311thumb2_400x400.jpg'>"
                        document.querySelector("#picture").innerHTML = picture; 
                           restart();
                    }

            else if (correct <= 0 && guessesLeft > 0 && actualLetters == "bobmarley") {
                wins++;
         
                        document.getElementById("game").innerHTML =  wins;
                        var audio = "<audio autoplay = 'autoplay' >" + "<source src='https://ia802605.us.archive.org/9/items/BobMarley_201410/Bob%20Marley%20-%20DISCOGRAFIA/Bob%20Marley-Legend/15%20Jamming.mp3'></audio>"   
                        document.querySelector("#audio").innerHTML = audio;  
                        var picture = "<img src='https://raw.githubusercontent.com/amr08/week-3-game/master/assets/images/bob-marley-beach-6929.jpg'>"
                        document.querySelector("#picture").innerHTML = picture; 
                         restart();
                    }


            else if (guessesLeft =< 0) {
                        losses++;
                        location.reload ();
        
                    }
        
        
         function restart() {
          if (wins === 2) {
        location.reload ();

    }
 }


};
 

//end

window.onload = function() {

  gameStart();
  
  }
  





            