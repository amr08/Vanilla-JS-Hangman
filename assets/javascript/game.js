//Theme "Surf"

var guessesLeft= 12;
var correct = 0;
var losses = 0;
var totalWins = 0;

//Hangman Choices

var answerBoys = ["b","e","a","c","h","b","o","y","s"];
//var anotherGame = ["a","n","o""....]
var secret = [];

//placeholder grabber
    for(var i = 0; i < answerBoys.length; i++) {
      secret.push(" _ ");
      
     var secretAnswer = document.getElementById("secretAnswer").innerHTML = secret;
            
    }

//userAnswer grabber
    document.onkeypress = function(event) {

        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  

    if (answerBoys.indexOf(userGuess) == -1) {
    guessesLeft--;
    var list = userGuess;

     document.getElementById("answersGuessed").innerHTML = list;
     document.getElementById("guessesLeft").innerHTML = guessesLeft;
    }
  
  else {
    correct++
    var reveal = secret.pop(userGuess);

    document.getElementById("secretAnswer").innerHTML = reveal;
      }
    
//results if wins or looses
    if (correct === answerBoys.length) {
                        totalWins++;
                        document.getElementById("game").innerHTML = "<p> TotalWins</p>" + totalWins;
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
   
    }
      








            