//Theme "Surf"

//html PRESS ANY KEY TO GET STARTED!

 alert("Press any key to get started");


var wins = 0;
var guessesleft = 12;


var correct = {
	
	b: "b",
	e: "e",
	a: "a",
	c: "c",
	h: "h",
	b2: "b",
	o: "o",
	y: "y",
	s: "s",

}


//answer: beachboys

//var answer = ["b","e","a","c","h","b","o","y","s"];

//HTML Wins and guesses



        document.onkeyup = function(event) {

		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	   

		//for(var i=0; i < answer.length; i++) {


		
             if(userGuess === "b") {
 			 wins++;
 			 var correctb = "<p> " + correct.b + " _ _ _ _ " + correct.b2 + "_ _ _ </p>";
             document.querySelector("#name").innerHTML = correctb;
 			 }
 			

			if(userGuess === "e") {
 			 wins++;
 			 (correct.e);
           
             }
             if(userGuess === "a") {
 			 wins++;
 			 console.log(correct.a);
            
             }
             if(userGuess === "c") {
 			 wins++;
 			 console.log(correct.c);
            
             }
             if(userGuess === "h") {
 			 wins++;
 			 console.log(correct.h);
            
             }
            
             
             if(userGuess === "o") {
 			 wins++;
 			 console.log(correct.o);
            

             }if(userGuess === "y") {
 			 wins++;
 			 console.log(correct.y);
            
             }
             if(userGuess === "s") {
 			 wins++;
 			 console.log(correct.s);
            
             }
         	

		

             else {
             	guessesleft--;
             }
         

        







 

var html = "<p>Wins: " + wins + "</p>" +
		"<p>Guessesleft " + guessesleft + "</p>";

document.querySelector("#game").innerHTML = html;


//var corrects = "<p> _ _ _ _ _ _ _ _ _ </p>";
 //document.querySelector("#name").innerHTML = corrects;
			

}






//html Current word

//placeholder for letter guesses 


//placeholders go away


//stop a letter after guess


//HTML LETTERS ALREADY GUESSED

//list letters guessed



//Once guessed name correctly play song



            