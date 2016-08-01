//Theme "Surf"

//html PRESS ANY KEY TO GET STARTED!

 alert("Press any key to get started");



var maxGuesses =  12;
var guessesLeft= 12;

var losses = 0

var wins = 0

var li = document.getElementsByTagName("li");

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
 			 wins++;
 			 document.getElementById("b").innerHTML = correct.b;
             
 			 
 			 }
 			
			if(userGuess === correct.e) {
 			 wins++;
 			  document.getElementById("e").innerHTML = correct.e;
           
             }
             if(userGuess === correct.a) {
 			 wins++;
 			 document.getElementById("a").innerHTML = correct.a;
            
             }
             if(userGuess === correct.c) {
 			wins++;
 			 document.getElementById("c").innerHTML = correct.c;
            
             }
             if(userGuess === correct.h) {
 			 wins++;
 			 document.getElementById("h").innerHTML = correct.h;
            
             }
           
             
             if(userGuess === correct.secondb) {
 			 document.getElementById("secondb").innerHTML = correct.secondb;
            

             }if(userGuess === correct.o) {
 			 wins++;
 			 document.getElementById("o").innerHTML = correct.o;
            
             }
             if(userGuess === correct.y) {
 			wins++;
 			 document.getElementById("y").innerHTML = correct.y;
            
             }

              if(userGuess === correct.s) {
 			 wins++;
 			 document.getElementById("s").innerHTML = correct.s;
            
             }  

             if (userGuess !== correct)
             	guessesLeft--;
         	
         	 if (guessesLeft === 0) {
                losses++; // restart game
            
            }

            if (wins === 9) {
            	var audio = "<audio autoplay = 'autoplay' >" + "<source src='https://ia801408.us.archive.org/1/items/TheBeachBoys-GreatestHits/04%20Surfin%27%20U.S.A..mp3'></audio>"   

               document.querySelector("#audio").innerHTML = audio;  
 

            }
            
         	



         

        






 

var html = "<p> Letters Guessed </p>" + lettersGuessed + "<br><br><p>Guesses Left </p>" + guessesLeft  + "<p> losses </p>" + losses;

document.querySelector("#game").innerHTML = html;


			





}

//html Current word

//placeholder for letter guesses 


//placeholders go away


//stop a letter after guess


//HTML LETTERS ALREADY GUESSED

//list letters guessed



//Once guessed name correctly play song





            