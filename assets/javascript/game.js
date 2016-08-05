var word = ["beachboys", "jackjohnson", "dickdale"];
var random = Math.floor(Math.random() * 3)
var actualLetters = word[random];
var length = actualLetters.length;  
var hidden = [length];
var guessesLeft = 15;
var correct = length;
var output = "";
var letters = actualLetters.split ('');

var losses = 0;
var totalWins= 0;
var list = [];



//works
function gameStart() {
    
    for(var i = 0; i < actualLetters.length; i++) {
        hidden[i] = "_ ";
        output = output + hidden[i];

    }
        

    document.getElementById("secretAnswer").innerHTML = output;
    
output = "";

}

//end


document.onkeypress = function(event) {

        output = "";
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        
            for(var j = 0; j < actualLetters.length; j++) {

                if (userGuess == letters[j]) {
                    hidden[j] = userGuess;
                    correct--;
                    
                 }

                 else {
                    output= output + hidden[j];

                 }

            }

document.getElementById("secretAnswer").innerHTML = output;

                

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

            if (correct < 0 && guessesLeft > 0 && actualLetters == "beachboys") {
                totalWins++;
         
                        document.getElementById("game").innerHTML =  totalWins;
                        var audio = "<audio autoplay = 'autoplay' >" + "<source src='https://ia801408.us.archive.org/1/items/TheBeachBoys-GreatestHits/04%20Surfin%27%20U.S.A..mp3'></audio>"   
                        document.querySelector("#audio").innerHTML = audio;  
                        var picture = "<img src='https://raw.githubusercontent.com/amr08/week-3-game/master/assets/images/onprinciple-beachboys-surfergirl-500.jpg'>"
                        document.querySelector("#picture").innerHTML = picture;  
 
                    }

            if (correct < 0 && guessesLeft > 0 && actualLetters == "jackjohnson") {
                totalWins++;
         
                        document.getElementById("game").innerHTML =  totalWins;
                        var audio = "<audio autoplay = 'autoplay' >" + "<source src='https://ia601008.us.archive.org/31/items/JackJohnsonSittingWaitingWishingToqueMP3/jack%20johnson%20banana%20pancakes%20-%20[Toque%20MP3].mp3'></audio>"   
                        document.querySelector("#audio").innerHTML = audio;  
                        var picture = "<img src='https://s-media-cache-ak0.pinimg.com/736x/80/0b/eb/800beb7840472ea335bcd4dfe59d4fca.jpg'>"
                        document.querySelector("#picture").innerHTML = picture;  
 
                    }          
             if (correct < 0 && guessesLeft > 0 && actualLetters == "dickdale") {
                totalWins++;
         
                        document.getElementById("game").innerHTML =  totalWins;
                        var audio = "<audio autoplay = 'autoplay' >" + "<source src='https://ia801606.us.archive.org/31/items/DickDaleAndTheDeltones-01-50/DickDaleAndTheDel-tones-Misirlou.mp3'></audio>"   
                        document.querySelector("#audio").innerHTML = audio;  
                        var picture = "<img src='https://images.alphacoders.com/216/216931.jpg'>"
                        document.querySelector("#picture").innerHTML = picture;  
                    }
            else if (guessesLeft < 0) {
                        losses++;
                        document.getElementById("losses").innerHTML =  losses ;
                             //how to restart game!?!!?!?!?!?!
                     }
         

};

//end

window.onload = function() {

  gameStart();
  
  }





            