const words = [
    "javascript",
    "hangman",
    "programming",
    "web",
    "developer",
    "algorithm",
    "variable",
    "function",
    "loop",
    "array",
    "object",
    "string",
    "integer",
    "boolean",
    "condition",
    "iteration",
    "method",
    "class",
    "inheritance",
    "encapsulation",
    "polymorphism",
    "parameter",
    "argument",
    "debugging",
    "compiler",
    "syntax",
    "semantics",
    "bug",
    "comment",
    "module",
    "library",
    "framework",
    "database",
    "API",
    "frontend",
    "backend",
    "responsive",
    "iteration",
    "recursion",
    "git",
    "repository",
    "merge",
    "branch",
    "commit",
    "pull request"
];
  const maxTries = 6; // Maximum number of incorrect guesses allowed

      let selectedWord;
      let guessedWord;
      let remainingTries;
      let guessedLetters;

      // Initialize the game
      function initializeGame() {
        selectedWord = getRandomWord(words);
        guessedWord = Array(selectedWord.length).fill("_");
        remainingTries = maxTries;
        guessedLetters = [];

        updateDisplay();
      }

      // Get a random word from the array
      function getRandomWord(wordArray) {
        const randomIndex = Math.floor(Math.random() * wordArray.length);
        return wordArray[randomIndex];
      }

      // Update the display
      function updateDisplay() {
        const hangmanContainer = document.getElementById("hangman");
        const wordContainer = document.getElementById("word");

        hangmanContainer.textContent = `Remaining Tries: ${remainingTries}`;
        wordContainer.textContent = guessedWord.join(" ");
      }

      // Handle a user's guess
      function handleGuess() {
        const guessInput = document.getElementById("guessInput");
        const guess = guessInput.value.toLowerCase();

        if (guessedLetters.includes(guess)) {
          alert("You've already guessed that letter.");
          guessInput.value = "";
          return;
        }

        guessedLetters.push(guess);
        guessInput.value = "";

        if (selectedWord.includes(guess)) {
          // Correct guess
          for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === guess) {
              guessedWord[i] = guess;
            }
          }
        } else {
          // Incorrect guess
          remainingTries--;
        }

        updateDisplay();

        if (guessedWord.join("") === selectedWord) {
          // Player wins
          alert("Congratulations! You've won!");
          endGame();
        } else if (remainingTries === 0) {
          // Player loses
          alert(`Game over! The word was "${selectedWord}".`);
          endGame();
        }
      }

      // End the game and show the "Play Again" button
      function endGame() {
        const guessButton = document.getElementById("guessButton");
        const playAgainButton = document.getElementById("playAgainButton");

        guessButton.disabled = true;
        guessButton.style.display = "none";
        playAgainButton.style.display = "block";
      }

      // Event listeners
      const guessButton = document.getElementById("guessButton");
      guessButton.addEventListener("click", handleGuess);

      const playAgainButton = document.getElementById("playAgainButton");
      playAgainButton.addEventListener("click", () => {
        initializeGame();
        guessButton.disabled = false;
        guessButton.style.display = "inline-block";
        playAgainButton.style.display = "none";
      });

      // Initialize the game when the page loads
      window.addEventListener("load", initializeGame);
