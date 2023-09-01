const words = [
  "algorithm", "variable", "function", "loop",
  "array", "object", "string", "integer",
  "boolean", "condition", "iteration", "method",
  "class", "inheritance", "encapsulation", "polymorphism",
  "parameter", "argument", "debugging", "compiler",
  "syntax", "semantics", "bug", "comment",
  "module", "library", "framework", "database",
  "API", "frontend", "backend", "responsive",
  "iteration", "recursion", "git", "repository",
  "merge", "branch", "commit", "pull request"
];

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
  function updateDisplayedWord(guessedLetter) {
    let updatedWord = "";

    for (const letter of selectedWord) {
      if (guessedLetter === letter) {
        updatedWord += guessedLetter;
      } else {
        updatedWord += "_"; // Replace with underscore for missing letters
      }
    }

    return updatedWord;
  }

  // Example usage:
  const guessedLetter = "a"; // Replace this with the actual guessed letter
  const updatedDisplay = updateDisplayedWord(guessedLetter);



}

const hangmanStages = [
  `
     ------
     |    |
          |
          |
          |
          |
  =========
  `,
  `
     ------
     |    |
     O    |
          |
          |
          |
  =========
  `,
  `
     ------
     |    |
     O    |
     |    |
          |
          |
  =========
  `,
  `
     ------
     |    |
     O    |
    /|    |
          |
          |
  =========
  `,
  `
     ------
     |    |
     O    |
    /|\\   |
          |
          |
  =========
  `,
  `
     ------
     |    |
     O    |
    /|\\   |
    /     |
          |
  =========
  `,
  `
     ------
     |    |
     O    |
    /|\\   |
    / \\   |
          |
  =========
  `,
];

function updateHangmanDisplay() {
  const hangmanContainer = document.getElementById("hangman");
  hangmanContainer.innerHTML = hangmanStages[currentStage];
}

let currentStage = 0; // Keep track of the current hangman stage

// Function to update the current hangman stage
function updateHangmanStage() {
  // Increment the current stage
  currentStage++;


  // Check if the player has reached the maximum stage
  if (currentStage === hangmanStages.length - 1) {
    console.log("Game Over. You lost!");
    // You can also add additional logic here for game over actions
  }
}

// Example: Call the updateHangmanStage function
updateHangmanStage(); // This will display the second hangman stage

function checkWinLose() {
  // Check for a win condition and lose condition
  // ... (your win and lose logic here) ...
}

const playAgainButton = document.getElementById("playAgainButton");

playAgainButton.addEventListener("click", () => {
  resetGame();
});

function resetGame() {
  // Reset game state, hangman display, word, etc.
}
