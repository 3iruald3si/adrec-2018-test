///////////////// on commaence par le fichier varaibles c'est celui qui vien en premier.
// Game status //
/////////////////
/*
 * Keep save the state of the game (started or not)  @type {boolean}
 * (on garde l'etat du jeux, si il est démarrer ou pas)
 * (on met la toute première valeur, quand on ouvre la page) [true=commencer, false= n'a pas commencer]
 *  on met false car on a ouvert la page mais pas le jeux
 */ 
var isGameStarted = false;


/*
 *  Keep the index of the current player.  @type {number}
 * On stock les joueurs, 0 ou 1, car le joueur 1 est 0 et le joueur 2 est 1.
 * 
 *
 */
var currentPlayer = 0;

/**
 * Keep the number of click done on the grid.
 * @type {number}
 */
var clickCounter = ;

/**
 * Restart button
 * @type {HTMLButtonElement}  (on selectionne!!)
 */
var $restartButton = document.querySelector('button');

/////////////////
//   Players   //
/////////////////
/**
 * List of input use to set players' name.
 * @type {NodeListOf<HTMLInputElement>}  on selectionne les inputs (les joueurs) de la class form-control.
 */
var $playerInputs = document.querySelectorAll('input.form-control');

/**
 * Span use to display the current player's name.
 * @type {HTMLSpanElement}
 */
var $currentPlayerName = document.querySelector('span#player-name-display');

/**
 * List of css classes use in the grid to display crosses and circles.
 * Indexed by players' index.
 * @type {string[]}
 */
var playerClasses = [
	'square-text-red',
	'square-text-blue'
];

/////////////////
//    Grid     //
/////////////////
/**
 * List of div square.
 * @type {NodeListOf<HTMLDivElement>}  on récupére toute nos case du jeux, les 9
 */
var $squares = document.querySelectorAll('div.square');
