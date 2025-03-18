    // Game state variables
    let health = 100;
    let coins = 0;

    // Dice roll function (1-100)
    function diceRoll() {
      return Math.floor(Math.random() * 100) + 1;
    }

    // Event handling function
    function eventRoll() {
      let roll = diceRoll();
      let message = "";

      if (roll >= 1 && roll <= 25) {
        message = damageRoll();
      } else if (roll >= 26 && roll <= 75) {
        message = healthRoll();
      } else {
        message = nothingRoll();
      }

      // If health reaches zero, end game
      if (health <= 0) {
        message += " You have perished. Game Over!";
      }

      // Rewrite the page with updated stats
      updateGameScreen(message);
    }

    // Functions for different events
    function damageRoll() {
      let damage = diceRoll();
      health -= damage;
      if (health < 0) health = 0;
      return "Oh no! You took " + damage + " damage!";
    }

    function healthRoll() {
      let coinsFound = diceRoll();
      coins += coinsFound;
      return "Lucky! You found " + coinsFound + " coins!";
    }

    function nothingRoll() {
      return "Nothing happened this round.";
    }

    // Function to clear and rewrite the game screen
    function updateGameScreen(message) {
      document.open();  // Clears the page
      document.write(`
        <h1>Welcome to the Adventure!</h1>
        <button onclick="eventRoll()">Adventure!</button>
        <p>${message}</p>
        <p>Health: ${health}</p>
        <p>Coins: ${coins}</p>
      `);
      document.close(); // Finishes writing
    }

    // Initialize the game screen when the page loads
    window.onload = function () {
      updateGameScreen("Click the button to start your journey.");
    };
