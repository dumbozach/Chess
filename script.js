const gridContainer = document.querySelector(".grid-container");
const gridItems = gridContainer.children;

/*for (const item of gridItems) {
  item.style.backgroundColor = "lightblue";
}*/

function createChessboard() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div");
      square.classList.add("square");

      if ((row + col) % 2 === 0) {
        square.classList.add("light");
      } else {
        square.classList.add("dark");
      }
      square.dataset.row = row;
      square.dataset.col = col;
      gridContainer.appendChild(square);
    }
  }
}

createChessboard();

const PIECES = Object.freeze({
  PAWN: 0,
  KING: 1,
  QUEEN: 2,
  ROOK: 3,
  BISHOP: 4,
  KNIGHT: 5,
});

const PIECE_COLORS = Object.freeze({
  BLACK: 0,
  WHITE: 1,
});

function placePiece(row, col, pieceColor, piece) {
  const pieceImage = document.createElement("img");
  switch (piece) {
    case PIECES.PAWN:
      if (pieceColor === PIECE_COLORS.BLACK) {
        pieceImage.src = "pieces/pawn-b.svg";
      } else {
        pieceImage.src = "pieces/pawn-w.svg";
      }
      break;
    case PIECES.KING:
      if (pieceColor === PIECE_COLORS.BLACK) {
        pieceImage.src = "pieces/king-b.svg";
      } else {
        pieceImage.src = "pieces/king-w.svg";
      }
      break;
    case PIECES.QUEEN:
      if (pieceColor === PIECE_COLORS.BLACK) {
        pieceImage.src = "pieces/queen-b.svg";
      } else {
        pieceImage.src = "pieces/queen-w.svg";
      }
      break;
    case PIECES.ROOK:
      if (pieceColor === PIECE_COLORS.BLACK) {
        pieceImage.src = "pieces/rook-b.svg";
      } else {
        pieceImage.src = "pieces/rook-w.svg";
      }
      break;
    case PIECES.BISHOP:
      if (pieceColor === PIECE_COLORS.BLACK) {
        pieceImage.src = "pieces/bishop-b.svg";
      } else {
        pieceImage.src = "pieces/bishop-w.svg";
      }
      break;
    case PIECES.KNIGHT:
      if (pieceColor === PIECE_COLORS.BLACK) {
        pieceImage.src = "pieces/knight-b.svg";
      } else {
        pieceImage.src = "pieces/knight-w.svg";
      }
      break;
  }
  pieceImage.style.maxWidth = "100%";
  document
    .querySelector(`[data-row="${row}"][data-col="${col}"]`)
    .appendChild(pieceImage);
}

for (let col = 0; col < 8; col++) {
  const piecesArray = [
    PIECES.ROOK,
    PIECES.KNIGHT,
    PIECES.BISHOP,
    PIECES.QUEEN,
    PIECES.KING,
    PIECES.BISHOP,
    PIECES.KNIGHT,
    PIECES.ROOK,
  ];
  placePiece(0, col, PIECE_COLORS.BLACK, piecesArray[col]);
  placePiece(1, col, PIECE_COLORS.BLACK, PIECES.PAWN);
  placePiece(7, col, PIECE_COLORS.WHITE, piecesArray[col]);
  placePiece(6, col, PIECE_COLORS.WHITE, PIECES.PAWN);
}

gridContainer.addEventListener("click", (e) => {
  //if (e.target && e.target.children.PIECES)
  console.log(e.target);
});

function movePiece() {}
