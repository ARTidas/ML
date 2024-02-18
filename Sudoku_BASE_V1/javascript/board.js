class Board {
    constructor(game_size, puzzle_difficulty, game_frame_width, game_frame_height, grid) {
        this.game_size = game_size;
        this.puzzle_difficulty = puzzle_difficulty;
        this.game_frame_width = game_frame_width;
        this.game_frame_height = game_frame_height;
        this.grid = grid;
    }

    display() {
        const game_panel = document.createElement("div");
        game_panel.style.width = this.game_frame_width + "px";
        game_panel.style.height = this.game_frame_height + "px";
        game_panel.style.backgroundColor = "lightgray";
        game_panel.style.margin = "0px";
        game_panel.style.display = "grid";
        game_panel.style.gridTemplateRows = `repeat(${this.game_size}, 1fr)`;
        game_panel.style.gridTemplateColumns = `repeat(${this.game_size}, 1fr)`;
        document.body.appendChild(game_panel);

        for (let i = 0; i < this.game_size; i++) {
            for (let j = 0; j < this.game_size; j++) {
                const sub_panel = document.createElement("div");
                sub_panel.style.backgroundColor = "gray";
                sub_panel.style.margin = "3px";
                /*sub_panel.style.width = "100%";
                sub_panel.style.height = "100%";*/
                sub_panel.style.display = "grid";
                sub_panel.style.gridTemplateRows = `repeat(${this.game_size}, 1fr)`;
                sub_panel.style.gridTemplateColumns = `repeat(${this.game_size}, 1fr)`;
                game_panel.appendChild(sub_panel);

                for (let m = 1; m <= this.game_size; m++) {
                    for (let n = 1; n <= this.game_size; n++) {
                        sub_panel.appendChild(
                            this.grid.grid_squares[i * this.game_size + m][j * this.game_size + n].square
                        );
                    }
                }
            }
        }
    }
}