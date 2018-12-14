// array for computers choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//variables for wins, loses, and attempts left
var wins = 0;
var losses = 0;
var attemptsLeft = 10;
var lettersGuessed = []
var computerGuess;

//reset function
function reset() {
lettersGuessed = []
attemptsLeft = 10;
computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
};

reset();

//linking variables to html
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var attemptsText = document.getElementById("attempts-left");
var lettersGuessedText = document.getElementById("letters-guessed")

//what happens when the user presses a key
document.onkeyup = function(event) {
  userGuess = event.key;

//computer chooses letter
  if (userGuess === computerGuess) {
  wins++
  alert("You win!")
  reset();
  }

  else (userGuess !== computerGuess); 
  attemptsLeft--
  lettersGuessed.push(userGuess);

  if (attemptsLeft === 0) {
  losses++
  alert("You lose. Try again.")
  reset();
  }

  if (!computerChoices.includes(userGuess)) {
    alert("Pick a letter.")
    attemptsLeft++
  }

  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  attemptsText.textContent = "Attempts left: " + attemptsLeft;
  lettersGuessedText.textContent = "Letters guessed: " + lettersGuessed
}; 
