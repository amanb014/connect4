//For defining hpw big the elements are, based on the window size. 
var circleSize, containerSize;

var columnFilled, players, activePlayer, activePiece;

//DOM objects
var boardContainer, columns; // columns is an array of them all

//constants
const maxPerCol = 6;
const dom = 0, width = 1, height = 2, piecesIn = 3;
const red = 1, black = 2;

//initializes all important variables defined above. 
//The function is at the very bottom.
initVariables();

function selectColumn(arg) {
	console.log('Hovering over a column.. ');
	activePiece.classList.remove('displayNone');
	activePiece.style.margin = '0 0 0 ' + arg['DOM_Object'].offsetLeft + 'px';
}

// ADDING A PIECE TO THE GIVEN COLUMN.
function addPiece(arg) {
	console.log('Adding piece to a column');
	activePlayer = (activePlayer === 0) ? 1 : 0;
}

//Resets all scores, player names.
//Basically refreshing the page
function resetGame() {

}

//Plays again with the same players, 
//keeping the scores intact.
function playAgain() {

}

function initVariables() {

	//Data of columns
	columns = new Array();
	for(let i = 0; i < 7; i++) {
		let dom = document.getElementById('column-' + i)
		columns.push({
			DOM_Object: dom,
			id: 		'column-' + i,
			count: 		0
		});
		columns[i]['DOM_Object'].addEventListener('click', function() {
			addPiece(columns[i]);
		});
		columns[i]['DOM_Object'].addEventListener('mouseover', function() {
			selectColumn(columns[i]);
		});;
	}

	//Data for columns - 
	// 0 = nothing in there
	// 1 = red
	// 2 = black
	columnFilled = new Array();
	for(let i = 0; i < 6; i++) {
		columnFilled.push([0,0,0,0,0,0,0]);
	}

	activePiece = document.querySelector(".activePiece");
	activePiece.classList.add('displayNone');
	activePiece.style.width = columns[1]['DOM_Object'].offsetWidth + 'px';
	activePiece.style.height = columns[1]['DOM_Object'].offsetWidth + 'px';

	//DOM Variables
	boardContainer = document.getElementById('board-container');
	window.addEventListener('resize', function() {
		containerSize = boardContainer.offsetWidth;
		activePiece.style.width = columns[1]['DOM_Object'].offsetWidth + 'px';
		activePiece.style.height = columns[1]['DOM_Object'].offsetWidth + 'px';
	});
	containerSize = boardContainer.offsetWidth;

	//MISC
	activePlayer = 0;

	//Two player objects in a new array
	players = new Array();
		for(let i = 0; i < 2; i++) {
			players.push({
				name: 'Player ' + (i+1),
				score: 0
			});
	}
}