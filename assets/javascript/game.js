//Theme "Surf"

//html PRESS ANY KEY TO GET STARTED!

 alert("Press any key to get started");


	//document.onkeyup = function(event) {

		//var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	  //document.write(userGuess);

	//}

//beachboys
//targeted and printed alphabet



       document.onkeyup = function(event) {

		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	  alert(userGuess);

	var answer = ["b","e","a","c","h","b","o","y","s"]

	for(var i=0; i < event.length; i++) {
	console.log(answer[i]);

	}

 if (userGuess === answer[i]) {
 	alert("you got it");
 }
 
 }

//html Wins

//html Current word

//placeholder for letter guesses 

//HTML NUMBER OF GUESSES REMAINING (start with 12)

//Guess numbers go up

//placeholders go away


//stop a letter after guess


//HTML LETTERS ALREADY GUESSED

//list letters guessed



//Once guessed name correctly play song

