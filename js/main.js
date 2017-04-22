
var boardStatus, players, activePlayer, activePiece;

//DOM objects
var boardContainer, columns; // columns is an array of them all

//constants
const maxPerCol = 6;
const dom = 0, width = 1, height = 2, piecesIn = 3;
const p0 = 0, p1 = 1;
var flag = true;

window.onload = function() {
	columns = [];
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

	//DOM Variables
	boardContainer = document.getElementById('board-container');
	activePiece = document.querySelector('.activePiece');

	//Window Listeners
	window.addEventListener('resize', function() {
		containerSize = boardContainer.offsetWidth;
		activePiece.style.width = columns[1]['DOM_Object'].offsetWidth + 'px';
		activePiece.style.height = columns[1]['DOM_Object'].offsetWidth + 'px';

		console.log((columns[1]['DOM_Object'].offsetHeight / 6) + 'px');
	});

	activePiece.classList.add('player-'+activePlayer);
	activePiece.style.width = columns[1]['DOM_Object'].offsetWidth + 'px';
	activePiece.style.height = columns[1]['DOM_Object'].offsetWidth + 'px';

	//Two player objects in a new array
	players = [];
		for(let i = 0; i < 2; i++) {
			players.push({
				name: 'Player ' + (i+1),
				score: 0,
				pieces: 0
			});
	}

	resetBoardData();
	playAgain();
}

function selectColumn(col) {
	console.log('Hovering over a column.. ');

	if(flag) {
		// activePiece.classList.remove('displayNone');
		flag = false;
	}
	activePiece.style.margin = '0 0 0 ' + col['DOM_Object'].offsetLeft + 'px';
}

// ADDING A PIECE TO THE GIVEN COLUMN.
function addPiece(col) {

	if(col['count'] < 6) {	
		boardStatus[5 - col['count']][col['ind']] = activePlayer;
		addPieceToUI(5 - col['count'], col['ind']);
		col['count']++;
		players[activePlayer].pieces++;
		// console.log(boardStatus);
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

//Plays again with the same players, 
//keeping the scores intact.
function playAgain() {

	//first player is the new active player
	activePlayer = p0;

	//reset the count of pieces in each column. 
	//reset the UI inside each column
	for(let i = 0; i < 7; i++) {
		columns[i]['count'] = 0;
		columns[i]['DOM_Object'].innerHTML = '';
	}

	for(let i = 0; i < 2; i++) {
		players[i].score = 0;
		players[i].pieces = 0;
	}
}

//Change the name of players
function changeNames() {

}

//Chooses the next player after each turn
function nextPlayer() {

	let next = (activePlayer === p0) ? p1 : p0;

	activePiece.classList.remove('player-' + activePlayer);
	activePlayer = next;
	activePiece.classList.add('player-' + next);

	activePlayer = next;
}

function resetBoardData() {
	//Data for columns - 
	// false = nothing in there
	// 0 = red
	// 1 = black
	boardStatus = [];
	for(let i = 0; i < 6; i++) {
		boardStatus.push([false,false,false,false,false,false,false]);
	}
}