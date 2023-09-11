// class/Board.js

export default class Board {
    constructor() {
        this.grid = this.initializeBoard(); 
        this.hasWinner = false; 
    }

    initializeBoard() {
        const rows = 3; 
        const cols = 3; 
        const emptyCell = "-";


        const board = [];
        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < cols; j++) {
                row.push(emptyCell);
            }
            board.push(row);
        }

        return board;
    }

    displayBoard() {
        const boardDiv = document.getElementById("board");
        boardDiv.innerHTML = "";

        for (let i = 0; i < this.grid.length; i++) {
            const rowDiv = document.createElement("div");
            rowDiv.className = "row";

            for (let j = 0; j < this.grid[i].length; j++) {
                const cellButton = document.createElement("button");
                cellButton.className = "case";
                cellButton.id = `btn-${i}-${j}`;
                cellButton.textContent = this.grid[i][j];

                rowDiv.appendChild(cellButton);
            }

            boardDiv.appendChild(rowDiv);
        }
    }

    placeMove(row, col, symbol) {
        if (this.grid[row][col] === "-") {
            this.grid[row][col] = symbol;
            return true;
        } else {
            return false;
        }
    }

    checkVictory() {

    }

    isFull() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                if (this.grid[i][j] === "-") {
                    return false;
                }
            }
        }
        return true;
    }

    resetBoard() {
        this.grid = this.initializeBoard();
        this.hasWinner = false;
        this.displayBoard();
    }

 
}
