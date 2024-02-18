class Sudoku {

    constructor(game_arguments) {
        this.game_size         = 3;   // Argument 1
        this.puzzle_difficulty = 50;  // Argument 2
        this.game_frame_width  = 300; // Argument 3
        this.game_frame_height = 300; // Argument 4

        try {
            if (game_arguments.length > 0) {
                if (game_arguments[0] !== null) {
                    this.game_size = parseInt(game_arguments[0]);
                    if (this.game_size < 2 || this.game_size > 5) {
                        throw new Error("The given game size argument is invalid! Must be between 2 and 5.");
                    }
                }
                this.puzzle_difficulty = parseInt(game_arguments[1]);
                if (game_arguments[1] !== null) {
                    this.puzzle_difficulty = parseInt(game_arguments[1]);
                    if (this.puzzle_difficulty < 0 || this.puzzle_difficulty > 100) {
                        throw new Error("The given missing number of puzzle squares is invalid...");
                    }
                }
                if (game_arguments[2] !== null) {
                    this.game_frame_width = parseInt(game_arguments[2]);
                    if (this.game_frame_width < 1 || this.game_frame_width > 6000) {
                        throw new Error("The given game frame width argument is invalid! Must be between 1 and 6000.");
                    }
                }
                if (game_arguments[3] !== null) {
                    this.game_frame_height = parseInt(game_arguments[3]);
                    if (this.game_frame_height < 1 || this.game_frame_height > 6000) {
                        throw new Error("The given game frame height argument is invalid! Must be between 1 and 6000.");
                    }
                }
            }
        }
        catch (error) {
            console.error("ERROR: Error encountered!");
            console.error(error.toString());
        }
    }

    run() {
        new Board(
            this.game_size,
            this.puzzle_difficulty,
            this.game_frame_width,
            this.game_frame_height,
            new Grid(
                this.game_size,
                this.puzzle_difficulty,
                new PuzzleGenerator(this.game_size)
            )
        ).display();
    }
}