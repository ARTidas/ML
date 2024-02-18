class Grid {
    constructor(game_size, puzzle_difficulty, puzzle_generator) {
        this.game_size = game_size;
        this.puzzle_difficulty = puzzle_difficulty;
        this.grid_squares = new Array((this.game_size * this.game_size) + 1)
            .fill(0)
            .map(() => new Array((this.game_size * this.game_size) + 1).fill(0));
        this.puzzle_generator = puzzle_generator;

        for (let row_index = 1; row_index <= (this.game_size * this.game_size); row_index++) {
            for (let column_index = 1; column_index <= (this.game_size * this.game_size); column_index++) {
                this.grid_squares[row_index][column_index] = new GridSquare(
                    this,
                    this.game_size,
                    this.puzzle_difficulty,
                    row_index,
                    column_index,
                    this.puzzle_generator
                );
            }
        }
    }
}