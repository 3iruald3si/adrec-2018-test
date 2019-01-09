/**
 * Clear crosses and circles contains in the grid., dans nos case square on selectione les span square-text
 */
function clearGrid() {
    $squares.forEach(function ($square) {
        var $squareText = $square.querySelector('.square-text');
        $squareText.className = 'square-text';

        playerClasses.forEach(function (cssClass) {
            var 
        });
    });
}

/**
 *
 * @param {boolean} enable, display 'inline et 'none', on affiche et on disparait
 */
function enableRestartButton(enable) {
    if (enable) {
        $restartButton.style.display = 'inline';
    } else {
        $restartButton.style.display = 'none';
    }
}

/**
 * Enable or disable player inputs.
 * @param {boolean} enable
 */
function enablePlayerInputs(enable) {
    $playerInputs.forEach(function ($input) {
        $input.disabled = !enable;
    });
}

/**
 * Select the right player for the next turn.
 */
function nextPlayer() {
    //*****
    //*****

    updatePlayerName(currentPlayer);
}

/**
 * Return the current player's name.
 * @return {string}
 */
function getCurrentPlayerName() {
    var currentPlayerName = //***//;

    //*****
    //*****

    return currentPlayerName;
}

/**
 * Update the current player's name in the span.
 */
function updatePlayerName() {
    var $currentPlayerName = $playerInputs.item(currentPlayer);
    var playerName = $currentPlayerInput.value;
    $currentPlayerName.innerHTML = playerName;
}

/**
 * Apply the cross or the circle to the given square.
 * @param $square
 * @return {boolean} true if class applied, false otherwise.
 */
function applyTurnSquare($square) {
    var $squareText = $square.querySelector('.square-text');

    // Check if the given square has not already been set.
    var canApply = true;
    playerClasses.forEach(function (cssClass) {
        if ($squareText.classList.contains(cssClass)) {
            alert('Case déjà remplie !');
            canApply = false;
        }
    });

    if (canApply) {
        $squareText.classList.add(playerClasses[currentPlayer]);

        return true;
    }

    return false;
}

/**
 * Execute stuff to go to the next turn: select right player and run victory check.
 */
function nextTurn() {
    var isFinished = isGameFinished();

    if (true === isFinished) {
        setTimeout(function () {
            alert(getCurrentPlayerName() + ' à gagné !');
        });
    } else if (null === isFinished) {
        setTimeout(function () {
            alert('Match nul !');
        });
    } else{
        nextPlayer();
    }
}

/**
 * Ready to start a new game.
 */
function allowStartGame() {
    isGameStarted = //***//;
    currentPlayer = //***//;
    clearGrid();
    enablePlayerInputs(//***//);
    enableRestartButton(//***//);
    updatePlayerName();
}

/**
 * Run just after the beginning of the game. avec if on verifie si la game a démaré ou non, ma parti démare (true), false on viens désactiver lechangement de nom des joueurs.

 */
function startGame() {
    if (!isGameStarted) {
        isGameStarted = true;
        enablePlayerInputs(false);
        enableRestartButton(true);
    }
}

/**
 * Return true if the game is finished, false otherwise.
 * @return {boolean|null}
 */
function isGameFinished() {
    var currentMatrix = getWinMatrix();
    var classToCheck = playerClasses[currentPlayer];

    for (var i = 0; i < $squares.length; i++) {
        var $squareText = $squares[i].querySelector('.square-text');

        if ($squareText.classList.contains(classToCheck)) {
            for (var j = 0; j < currentMatrix.length; j++) {
                var winCase = currentMatrix[j];
                var hasWinIndex = winCase.indexOf(i);

                if (-1 !== hasWinIndex) {
                    winCase.splice(hasWinIndex, hasWinIndex + 1);

                    // WIN !!!
                    if (0 === winCase.length) {
                        return true;
                    }

                    currentMatrix[j] = winCase;
                }
            }
        }
    }

    if (clickCounter === $squares.length) {
        return null;
    }

    return false;
}

/**
 * Get the winning Matrix.
 * @return {[]}
 */
function getWinMatrix() {
    return [//***//];
}
