const form = document.querySelector("#content");
const prevGuess = document.querySelector(".prevGuess");
const leftGuess = document.querySelector(".leftGuess");

let guess = 10;
let rndNUm;
let prevGuessArray = [];
function guessChecker(enteredNum) {
  if (rndNUm === enteredNum) {
    alert("You guessed right, you won!");
    guess = 10;
    leftGuess.innerHTML = " ";
    prevGuess.innerHTML = " ";
    prevGuess.length = 0;
  } else {
    prevGuessArray.push(enteredNum);
    prevGuess.innerHTML = `Previous Guesses: ${prevGuessArray}`;
    guess--;
    leftGuess.innerHTML = `Guesses Remaining: ${guess}`;
  }
}

form.addEventListener("submit", (e) => {
  rndNUm = Math.floor(Math.random() * 100 + 1);
  console.log(rndNUm);
  e.preventDefault();
  const input = parseInt(form.querySelector("#guessnum").value);
  if (guess > 0 || !isNaN(input)) {
    guessChecker(input);
  } else {
    alert("You don't have chances to guess");
  }
});