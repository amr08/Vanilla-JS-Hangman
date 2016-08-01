//Theme "Surf"

//html PRESS ANY KEY TO GET STARTED!

 alert("Press any key to get started");


//answer: beachboys


//HTML Wins and guesses
var wins = 0;
var guessesleft = 12;




var answer = ["b","e","a","c","h","b","o","y","s"];



	


        document.onkeyup = function(event) {

		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	    console.log(userGuess);



		//for(var i=0; i < answer.length; i++) {
		

		//if (answer.indexOf(guess) === -1) {
  // guessed letter is not in the answer
//} else {
  // remove correctly guessed letter from answer
  // so 'beachboys' becomes 'eachoys'
  // wins++;
//}

			if(userGuess == answer[0,5]) {
 			 wins++;
            
             }
         	

         

         if (userGuess !== answer[0,1,2,3,4,6,7,8]) {
        	guessesleft--;
           }

}

//create a function that user prints


 //HTML

var html = "<p>Wins: " + wins + "</p>" +
		"<p>Guessesleft " + guessesleft + "</p>";

document.querySelector("#game").innerHTML = html;
};
