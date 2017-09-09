$(document).ready(function() {
    
var redVal= Math.floor(Math.random() * 10) +1; 
var greenVal= Math.floor(Math.random() * 10) +1;
var yellowVal= Math.floor(Math.random() * 10) +1;
var orangeVal= Math.floor(Math.random() * 10) +1; 
var numToWin = Math.floor(Math.random() * 10) +30;
var yourScore = 0;
var wins = 0
var losses = 0

$("#numToWin").html(numToWin);
    
function reset(){
    redVal= Math.floor(Math.random() * 10) +1; 
    greenVal= Math.floor(Math.random() * 10) +1;
    yellowVal= Math.floor(Math.random() * 10) +1;
    orangeVal= Math.floor(Math.random() * 10) +1; 
    numToWin = Math.floor(Math.random() * 10) +30;
    yourScore = 0
    $("#numToWin").html(numToWin);
    $("#yourScore").html(yourScore);
};
    
$("#redCryst").on("click", function(){
    yourScore += redVal
    $("#yourScore").html(yourScore);
    
});

$("#greenCryst").on("click", function(){
    yourScore += greenVal
    $("#yourScore").html(yourScore);
    
}); 
    
$("#yellowCryst").on("click", function(){
    yourScore += yellowVal
    $("#yourScore").html(yourScore);
  
}); 
    
$("#orangeCryst").on("click", function(){
    yourScore += orangeVal
    $("#yourScore").html(yourScore);
   
}); 
   
    $(".cryst").on("click", function(){
       if(yourScore === numToWin) {
         
          alert("YOU WIN!!!")
         wins++
         $("#wins").html(wins);
        reset();
  
     } else if(yourScore > numToWin){
            alert("YOU LOSE!!!")
             losses++
             $("#losses").html(losses);
        reset();
        }
    });

});



