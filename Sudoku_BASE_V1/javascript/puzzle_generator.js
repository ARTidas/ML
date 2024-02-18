class PuzzleGenerator {
    constructor(game_size) {
        this.game_size = game_size;
        this.game_puzzle_solution = new Array((this.game_size * this.game_size) + 1)
            .fill(0)
            .map(() => new Array((this.game_size * this.game_size) + 1).fill(0));
        
        if (!this.generatePuzzle()) {
            throw new Error("Sorry, failed to generate a playable sudoku board...");
        }
    }

    generatePuzzle() {
        for (let bruteforce_iterations = 0; bruteforce_iterations < 100000; bruteforce_iterations++) {
            if (this.generatePuzzleSolution(this.game_puzzle_solution)) {
                return true;
            }
        }

        return false;
    }

    generatePuzzleSolution(game_puzzle_solution) {
        const available_values = Array.from({ length: (this.game_size * this.game_size) + 1 }, () =>
            Array.from({ length: (this.game_size * this.game_size) + 1 }, () =>
                Array.from({ length: (this.game_size * this.game_size) }, (_, index) => index + 1)
            )
        );

        for (let row_index = 1; row_index <= (this.game_size * this.game_size); row_index++) {
            for (let column_index = 1; column_index <= (this.game_size * this.game_size); column_index++) {
                let recursive_iteration_counter = 0;
                const choosen_random_number = this.chooseNumberforField(
                    row_index,
                    column_index,
                    available_values,
                    ++recursive_iteration_counter
                );

                game_puzzle_solution[row_index][column_index] = choosen_random_number;

                for (let index = 1; index <= (this.game_size * this.game_size); index++) {
                    available_values[index][column_index] = available_values[index][column_index].filter(value => value !== choosen_random_number);
                    available_values[row_index][index] = available_values[row_index][index].filter(value => value !== choosen_random_number);
                }

                for (let subrow_index = (this.game_size - 1); subrow_index >= 0; subrow_index--) {
                    for (let subcolumn_index = (this.game_size - 1); subcolumn_index >= 0; subcolumn_index--) {
                        const row_coordinates = Math.ceil(row_index / this.game_size) * this.game_size - subrow_index;
                        const column_coordinates = Math.ceil(column_index / this.game_size) * this.game_size - subcolumn_index;

                        available_values[row_coordinates][column_coordinates] = (
                            available_values[row_coordinates][column_coordinates]
                                .filter(value => value !== choosen_random_number)
                        );
                    }
                }
            }
        }

        for (let row_index = 1; row_index <= (this.game_size * this.game_size); row_index++) {
            for (let column_index = 1; column_index <= (this.game_size * this.game_size); column_index++) {
                if (game_puzzle_solution[row_index][column_index] === 0) {
                    return false;
                }
            }
        }

        return true;
    }

    chooseNumberforField(row_index, column_index, available_values, recursive_iteration_counter) {
        if (recursive_iteration_counter > 40) {
            return 0;
        }

        const possible_values_list = (
            available_values[row_index][column_index]
                .filter(value => value !== 0)
        );

        if (possible_values_list.length < 1) {
            return 0;
        }

        return possible_values_list[Math.floor(Math.random() * possible_values_list.length)];
    }
}