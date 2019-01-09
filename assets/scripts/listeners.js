/**
 * Listener to update the current player's name if updated.
 */
$playerInputs.forEach(function ($playerInput, index) {
    $playerInput.onchange = $playerInput.onkeyup = function () {
        if (currentPlayer === index) {
            updatePlayerName(currentPlayer);
        }
    };
});

/**
 * Listener for square click.  evement click sur nos carré, on démare le jeux, on click dans nos case vide, et on fini la game
 */
$squares.forEach(function ($square) {
    $square.onclick = function () {
        startGame();
        if (applyTurnSquare($square)) {
            nextTurn();
        }
    };
});

/**
 * Restart the game.
 */
$restartButton.onclick = function () {
    allowStartGame();
};
