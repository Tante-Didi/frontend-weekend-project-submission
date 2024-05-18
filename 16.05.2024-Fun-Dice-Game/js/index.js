const diceEl1 = document.getElementById("dice1");
const diceEl2 = document.getElementById("dice2");

// Roll the dice
function rollDice() {
  if (gamePlaying) {
    // Generate random dice rolls
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    // Display the dice rolls
    diceEl1.src = `/16.05.2024-Fun-Dice-Game/imgaes-icons-fontfamily/dice-${dice1}.png`;
    diceEl2.src = `/16.05.2024-Fun-Dice-Game/imgaes-icons-fontfamily/dice-${dice2}.png`;
    diceEl1.classList.add("active");
    diceEl2.classList.add("active");

    // Update the round score if the player didn't roll a double six
    if (dice1 !== 6 || dice2 !== 6) {
      roundScore += dice1 + dice2;
      document.querySelector(`#current-${activePlayer}`).textContent =
        roundScore;
    } else {
      // Switch to the next player if the player rolled a double six
      switchPlayer();
    }
  }
}
