//For defining hpw big the elements are, based on the window size. 
var circleSize, columnSize, containerSize;

var columnFilled, players;

//DOM objects
var boardContainer, columns;

//constants
const maxPerCol = 6;
const dom = 0, width = 1, height = 2, piecesIn = 3;

//DOM Objects
boardContainer = document.getElementById('board-container');

//initialize column array with default values from the page
columns = new Array();
for(var i = 0; i < 7; i++) {
	columns.push({
		DOM_Object: document.getElementById('column-' + i),
		width: 		'width of container', 
		height: 	'height of container',
		physicalCount: 'number of pieces'
	});
	columns[i]['DOM_Object'].addEventListener('click', addPiece);
}
console.log(columns);

players = new Array();
for(var i = 0; i < 2; i++) {
	players.push({
		name: 'Player ' + (i+1),
		score: 0
	});
}
console.log(players);

columnFilled = [
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0]
				];
console.log(columnFilled);

//Player system
var p1 = {
	name: 'Player 1',
	score: 0
}
var p2 = {
	name: 'Player 2',
	score: 0
}

// ADDING A PIECE TO THE GIVEN COLUMN.
function addPiece(column) {
	console.log('Adding piece to a column');
}

//Resets all scores, player names.
//Basically refreshing the page
function resetGame() {

}

//Plays again with the same players, 
//keeping the scores intact.
function playAgain() {

}