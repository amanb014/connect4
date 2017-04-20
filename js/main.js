//For defining hpw big the elements are, based on the window size. 
var circleSize, containerSize;

var boardStatus, players, activePlayer, activePiece;

//DOM objects
var boardContainer, columns; // columns is an array of them all

//constants
const maxPerCol = 6;
const dom = 0, width = 1, height = 2, piecesIn = 3;
const p0 = 0, p1 = 1;

//initializes all important variables defined above. 
//The function is at the very bottom.
initVariables();

function selectColumn(col) {
	console.log('Hovering over a column.. ');
	activePiece.classList.remove('displayNone');
	activePiece.style.margin = '0 0 0 ' + col['DOM_Object'].offsetLeft + 'px';
}

// ADDING A PIECE TO THE GIVEN COLUMN.
function addPiece(col) {

	if(col['count'] < 6) {	
		boardStatus[5 - col['count']][col['ind']] = activePlayer;
		addPieceToUI(5 - col['count'], col['ind']);
		col['count']++;
		console.log(boardStatus);
		nextPlayer();
	} 
	else {
		console.log('Column FULL.')
	}
}

function addPieceToUI(row, col) {

	var piece = document.createElement('div');
	piece.classList.add('placedPiece', 'player-' + activePlayer);
	piece.id = row + '-' + col;
	let width = columns[1]['DOM_Object'].offsetWidth;
	piece.style.margin = (width * columns[col]['count'] + width) + '0 0 0';

	columns[col]['DOM_Object'].appendChild(piece);

}

//Resets all scores, player names.
//Basically refreshing the page
function resetGame() {

}

//Plays again with the same players, 
//keeping the scores intact.
function playAgain() {

}

function nextPlayer() {

	let next = (activePlayer === p0) ? p1 : p0;

	activePiece.classList.remove('player-' + activePlayer);
	activePlayer = next;
	activePiece.classList.add('player-' + next);

	activePlayer = next;
}

function initVariables() {

	//Data of columns
	columns = new Array();
	for(let i = 0; i < 7; i++) {
		let dom = document.getElementById('column-' + i)
		columns.push({
			DOM_Object: dom,
			id: 		'column-' + i,
			count: 		0,
			ind: 		i
		});
		columns[i]['DOM_Object'].addEventListener('click', function() {
			addPiece(columns[i]);
		});
		columns[i]['DOM_Object'].addEventListener('mouseover', function() {
			selectColumn(columns[i]);
		});;
	}

	//Data for columns - 
	// false = nothing in there
	// 0 = red
	// 1 = black
	boardStatus = new Array();
	for(let i = 0; i < 6; i++) {
		boardStatus.push([false,false,false,false,false,false,false]);
	}

	activePlayer = p0;

	activePiece = document.querySelector(".activePiece");
	activePiece.classList.add('displayNone', 'player-'+activePlayer);
		activePiece.style.width = columns[1]['DOM_Object'].offsetWidth + 'px';
		activePiece.style.height = columns[1]['DOM_Object'].offsetWidth + 'px';

	//DOM Variables
	boardContainer = document.getElementById('board-container');
	window.addEventListener('resize', function() {
		containerSize = boardContainer.offsetWidth;
		activePiece.style.width = columns[1]['DOM_Object'].offsetWidth + 'px';
		activePiece.style.height = columns[1]['DOM_Object'].offsetWidth + 'px';

		// console.log(document.querySelectorAll('.placedPiece').offsetWidth);


		// document.querySelectorAll('.placedPiece').style.width = (columns[1]['DOM_Object'].offsetHeight / 6) + 'px';
		// document.querySelectorAll('.placedPiece').style.height = (columns[1]['DOM_Object'].offsetHeight / 6) + 'px';

		console.log((columns[1]['DOM_Object'].offsetHeight / 6) + 'px');
	});
	containerSize = boardContainer.offsetWidth;

	//Two player objects in a new array
	players = new Array();
		for(let i = 0; i < 2; i++) {
			players.push({
				name: 'Player ' + (i+1),
				score: 0
			});
	}

	function resetPieceSizes() {


	}
}