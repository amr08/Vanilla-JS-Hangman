//Theme "Surf"

//html PRESS ANY KEY TO GET STARTED!

 alert("Press any key to get started");



var guessesLeft = 12;


var correct = {
	
	b: "b",
	e: "e",
	a: "a",
	c: "c",
	h: "h",
	secondb: "b",
	o: "o",
	y: "y",
	s: "s",

}


//answer: beachboys



var answer = ["b","e","a","c","h","b","o","y","s"];


         

//HTML Wins and guesses



        document.onkeyup = function(event) {

		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	    
	    
		var lettersGuessed = userGuess;
	   

	    

		//for(var i=0; i < answer.length; i++) {


		
             if(userGuess === correct.b) {
 			 guessesLeft--;
 			 document.getElementById("b").innerHTML = correct.b;
             
 			 
 			 }
 			
			if(userGuess === correct.e) {
 			 guessesLeft--;
 			  document.getElementById("e").innerHTML = correct.e;
           
             }
             if(userGuess === correct.a) {
 			 guessesLeft--;
 			 document.getElementById("a").innerHTML = correct.a;
            
             }
             if(userGuess === correct.c) {
 			guessesLeft--;
 			 document.getElementById("c").innerHTML = correct.c;
            
             }
             if(userGuess === correct.h) {
 			 guessesleft--;
 			 document.getElementById("h").innerHTML = correct.h;
            
             }
           
             
             if(userGuess === correct.secondb) {
 			 document.getElementById("secondb").innerHTML = correct.secondb;
            

             }if(userGuess === correct.o) {
 			 guessesLeft--;
 			 document.getElementById("o").innerHTML = correct.o;
            
             }
             if(userGuess === correct.y) {
 			guessesLeft--;
 			 document.getElementById("y").innerHTML = correct.y;
            
             }

              if(userGuess === correct.s) {
 			 guessesLeft--;
 			 document.getElementById("s").innerHTML = correct.s;
            
             }
         	

		

             else {
             	document.getElementById("lettersGuessed").innerHTML = userGuess;
             }
         

        






 

var html = "<p> Letters Guessed </p>" + lettersGuessed + "<br><br><p>Guesses Left </p>" + guessesLeft;

document.querySelector("#game").innerHTML = html;


			

}






//html Current word

//placeholder for letter guesses 


//placeholders go away


//stop a letter after guess


//HTML LETTERS ALREADY GUESSED

//list letters guessed



//Once guessed name correctly play song





            