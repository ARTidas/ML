class GridSquare {
    constructor(grid, game_size, puzzle_difficulty, row_index, column_index, puzzle_generator) {
        this.grid = grid;
        this.game_size = game_size;
        this.puzzle_difficulty = puzzle_difficulty;
        this.row_index = row_index;
        this.column_index = column_index;
        this.selectableValues = Array.from({ length: this.game_size * this.game_size }, (_, index) => (index + 1).toString());
        this.puzzle_generator = puzzle_generator;

        this.square = document.createElement("div");
        this.square.style.backgroundColor = "#fff";
        this.square.style.margin = "0px";
        this.square.style.border = "1px solid #ddd";
        this.square.style.display = "flex";
        this.square.style.alignItems = "center";
        this.square.style.justifyContent = "center";
        this.square.style.fontWeight = "bold";
        this.square.style.fontSize = (this.gameFrameWidth / (this.game_size * this.game_size) * 0.75) + "px";
        //this.square.innerHTML = "0";
        //this.square.innerHTML = this.puzzle_generator.game_puzzle_solution[row_index][column_index];

        if ((Math.random() * 100) > this.puzzle_difficulty) {
            this.square.innerHTML = this.puzzle_generator.game_puzzle_solution[row_index][column_index];
        }
        else {
            this.square.innerHTML = "";
        }

        this.square.addEventListener("input", () => {
            this.fieldChanged();
        });
    }

    fieldChanged() {
        try {
            const enteredValue = parseInt(this.square.value);
            if (enteredValue !== this.puzzle_generator.game_puzzle_solution[this.row_index][this.column_index]) {
                this.findOtherGridSquaresAndWarnThem(this.row_index, this.column_index, "red");
            } else {
                this.findOtherGridSquaresAndWarnThem(this.row_index, this.column_index, "lightgray");
            }
        }
        catch (error) {
            console.error("ERROR: Error encountered!");
            console.error(error.toString());
        }
    }

    findOtherGridSquaresAndWarnThem(row_index, column_index, color) {
        for (let i = 1; i <= this.game_size * this.game_size; i++) {
            this.grid.gridSquares[row_index][i].square.style.backgroundColor = color;
            this.grid.gridSquares[i][column_index].square.style.backgroundColor = color;
        }

        for (let i = 0; i < this.game_size; i++) {
            for (let j = 0; j < this.game_size; j++) {
                const rowCoordinates = Math.ceil(row_index / this.game_size) * this.game_size - (this.game_size - 1) + i;
                const columnCoordinates = Math.ceil(column_index / this.game_size) * this.game_size - (this.game_size - 1) + j;
                this.grid.gridSquares[rowCoordinates][columnCoordinates].square.style.backgroundColor = color;
            }
        }
    }
}