const words = ["apple", "banana", "cherry", "orange"]; // Add more words
const selectedWord = words[Math.floor(Math.random() * words.length)];

function displayWord(word) {
  const wordContainer = document.getElementById("word");
  wordContainer.textContent = word.split('').map(letter => "_").join(' ');
}
displayWord(selectedWord);

const guessButton = document.getElementById("guessButton");
const guessInput = document.getElementById("guessInput");

guessButton.addEventListener("click", () => {
  const guess = guessInput.value.toLowerCase();
  checkGuess(guess);
  guessInput.value = "";
});

function checkGuess(guess) {
  // Compare guess with letters in selectedWord
  // Update the displayed word with correctly guessed letters
}

const hangmanStages = [
  /* List of hangman stages */
];

let currentStage = 0; // Keep track of current hangman stage

function updateHangmanDisplay() {
  // Update hangman display based on currentStage
}

function checkWinLose() {
  // Check for win condition
  // Check for lose condition
}

const playAgainButton = document.getElementById("playAgainButton");

playAgainButton.addEventListener("click", () => {
  resetGame();
});

function resetGame() {
  // Reset game state, hangman display, word, etc.
}


