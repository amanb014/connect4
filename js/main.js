//For defining hpw big the elements are, based on the window size. 
var circleSize, columnSize, containerSize;

//DOM objects
var boardContainer, columns;

//constants
const maxPiecesPerColumn = 6;

//DOM Objects
boardContainer = document.getElementById('board-container');
columns = new Array();

for(var i = 0; i < 7; i++) {
	columns.push(document.getElementById('column-' + i));
	columns[i].addEventListener('click', addPiece);
}

console.log(columns);

//scoring system
var p1 = {
	name: 'Player 1',
	score: 0
}
var p2 = {
	name: 'Player 2',
	score: 1
}

function addPiece(column) {
	console.log('Adding piece to a column');
}