// array for computers choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//variables for wins, loses, and attempts left
var wins = 0;
var losses = 0;
var attemptsLeft = 10;

//linking variables to html
var winsText = document.getElementById("wins-text");
var lossesTest = document.getElementById("losses-text");
var attemptsText = document.getElementById("attempts-left");

//what happens when the user presses a key
document.onkeyup = function(event);
