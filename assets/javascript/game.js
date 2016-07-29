//Theme "Surf"

//html PRESS ANY KEY TO GET STARTED!

 alert("Press any key to get started");


//answer: beachboys

var answer = ["b","e","a","c","h","b","o","y","s"];

//HTML Wins and guesses
var wins = 0;
var guessesleft = 25;
	
        document.onkeyup = function(event) {

		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	    console.log(userGuess);

		for(var i=0; i < answer.length; i++) {
		
			 if(userGuess == answer[i]) {
 			 wins++;
  
         	}
         }

         if (userGuess !== answer[i]) {
        	guessesleft--;
           }
 //HTML
var html = "<p>Wins: " + wins + "</p>" +
		"<p>Guessesleft " + guessesleft + "</p>";

document.querySelector("#game").innerHTML = html;

	}		












//html Current word

//placeholder for letter guesses 

//HTML NUMBER OF GUESSES REMAINING (start with 12)

//Guess numbers go up

//placeholders go away


//stop a letter after guess


//HTML LETTERS ALREADY GUESSED

//list letters guessed



//Once guessed name correctly play song

