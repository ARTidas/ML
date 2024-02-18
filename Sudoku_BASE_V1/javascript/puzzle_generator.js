class PuzzleGenerator {
    constructor(game_size) {
        this.iteration_counter = 0;
        this.game_size = game_size;
        this.game_puzzle_solution = new Array(game_size * game_size + 1)
            .fill(0)
            .map(() => new Array(game_size * game_size + 1).fill(0));
        
        if (!this.generatePuzzle()) {
            throw new Error("Sorry, failed to generate a playable sudoku board...");
        }

        document.getElementById("iteration_counter").innerHTML = (
            "It took " + this.iteration_counter + " recursive iterations to generate the puzzle."
        );
    }

    generatePuzzle() {
        return this.populatePuzzle(1, 1);
    }

    populatePuzzle(row, column) {
        this.iteration_counter++;
        
        if (row > this.game_size * this.game_size) {
            return true; // Reached the end
        }

        let next_row = row;
        let next_column = column + 1;
        if (next_column > this.game_size * this.game_size) {
            next_row++;
            next_column = 1;
        }

        if (this.game_puzzle_solution[row][column] !== 0) {
            return this.populatePuzzle(next_row, next_column); // Move to the next cell
        }

        const values = this.shuffleValues(); // Shuffle possible values for randomness
        for (let value of values) {
            if (this.isValidMove(row, column, value)) {
                this.game_puzzle_solution[row][column] = value;
                if (this.populatePuzzle(next_row, next_column)) {
                    return true; // Move to the next cell
                }

                // Backtrack if no solution found
                this.game_puzzle_solution[row][column] = 0;
            }
        }

        return false; // No valid value found, need to backtrack
    }

    shuffleValues() {
        const values = [];
        for (let i = 1; i <= this.game_size * this.game_size; i++) {
            values.push(i);
        }

        return values.sort(() => Math.random() - 0.5); // Shuffle the array
    }

    isValidMove(row, column, value) {
        return (
            this.isRowValid(row, value) &&
            this.isColumnValid(column, value) &&
            this.isSquareValid(row, column, value)
        );
    }

    isRowValid(row, value) {
        for (let column = 1; column <= this.game_size * this.game_size; column++) {
            if (this.game_puzzle_solution[row][column] === value) {
                return false;
            }
        }

        return true;
    }

    isColumnValid(column, value) {
        for (let row = 1; row <= this.game_size * this.game_size; row++) {
            if (this.game_puzzle_solution[row][column] === value) {
                return false;
            }
        }

        return true;
    }

    isSquareValid(row, column, value) {
        const startRow = Math.floor((row - 1) / this.game_size) * this.game_size + 1;
        const startColumn = Math.floor((column - 1) / this.game_size) * this.game_size + 1;
        for (let i = startRow; i < startRow + this.game_size; i++) {
            for (let j = startColumn; j < startColumn + this.game_size; j++) {
                if (this.game_puzzle_solution[i][j] === value) {
                    return false;
                }
            }
        }

        return true;
    }
}
