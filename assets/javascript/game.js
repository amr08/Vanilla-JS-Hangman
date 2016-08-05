var word = ["beachboys", "311"];
var random = Math.floor(Math.random() *2)
var actualLetters = word[random];
var length = actualLetters.length;
var hidden = [length];
var guessesLeft = 12;
var correct = length;
var output = " ";
var letters = actualLetters.split ('');
var losses = [];
var totalWins= [];
var list = [];





function gameStart() {
    for(var i = 0; i < actualLetters.length; i++) {
    hidden[i] = "_ ";
    output = output + hidden[i];
   
            
    }
        document.getElementById("secretAnswer").innerHTML = output;
    output = " ";


}

gameStart();



 function user() { 

document.onkeypress = function(event) {

        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  var music = userGuess + word;

for(var j = 0; j < actualLetters.length; j++) {

   

  if (userGuess == letters[j]) {
     
     hidden[j] = userGuess;
     correct--;

     }

     else {
        output = output + hidden[j] + " ";
     }

}
list.push(userGuess);
    document.getElementById("secretAnswer").innerHTML = output;
    document.getElementById("answersGuessed").innerHTML = list;
    
    output = " ";
    guessesLeft--;

     
     if (correct < 1) {
        totalWins++;
         if ( word ===)
        document.getElementById("game").innerHTML =  totalWins;
        var audio = "<audio autoplay = 'autoplay' >" + "<source src='https://ia801408.us.archive.org/1/items/TheBeachBoys-GreatestHits/04%20Surfin%27%20U.S.A..mp3'></audio>"   
        document.querySelector("#audio").innerHTML = audio;  
        var picture = "<img src='https://raw.githubusercontent.com/amr08/week-3-game/master/assets/images/onprinciple-beachboys-surfergirl-500.jpg'>"
        document.querySelector("#picture").innerHTML = picture;  
 
                    }


    else if (guessesLeft === 0) {
        losses++;
        document.getElementById("losses").innerHTML =  losses;
                            //how to restart game!?!!?!?!?!?!
       }

    else {

document.getElementById("guessesLeft").innerHTML = guessesLeft;


    }

}

}
  
  user();









            