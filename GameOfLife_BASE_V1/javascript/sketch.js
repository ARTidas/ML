let canvas = new Canvas();

let columns, rows;
let cell_size = 10;
let grid;
let next_grid;

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
 function setup() {
    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight()
    );

    columns = floor(canvas.getWidth() / cell_size);
    rows = floor(canvas.getHeight() / cell_size);
    grid = createRandomGrid(columns, rows);
}

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    frameRate(10);
    background('#ddd');
    
    displayGrid();
    updateGrid();
}


function createRandomGrid(columns, rows) {
    let new_grid = [];

    for (let i = 0; i < columns; i++) {
        new_grid[i] = [];
        for (let j = 0; j < rows; j++) {
            new_grid[i][j] = floor(random(2)); // alive (1) or dead (0)
        }
    }

    return new_grid;
}

function createEmptyGrid(columns, rows) {
    let new_grid = [];

    for (let i = 0; i < columns; i++) {
        new_grid[i] = [];
        for (let j = 0; j < rows; j++) {
            new_grid[i][j] = 0;
        }
    }

    return new_grid;
}

function displayGrid() {
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * cell_size;
            let y = j * cell_size;

            if (grid[i][j] === 1) {
                fill(0);
                stroke('#fff');
                rect(x, y, cell_size - 1, cell_size - 1);
            }
        }
    }
}

function updateGrid() {
    next_grid = createEmptyGrid(columns, rows);

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            let neighbors_count = countNeighbors(grid, i, j);

            // If cell is dead
            // and neighbours not too many, not too few = Alive
            if (grid[i][j] === 0 && neighbors_count === 3) {
                next_grid[i][j] = 1;
            }
            // If cell is alive 
            // and neighbours too few (not able to reproduce) or too many (starve) = Dead
            else if (grid[i][j] === 1 && (neighbors_count < 2 || neighbors_count > 3)) {
                next_grid[i][j] = 0;
            }
            else {
                next_grid[i][j] = grid[i][j];
            }
        }
    }

    grid = next_grid;
}

function countNeighbors(grid, x, y) {
    let sum = 0;

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            sum += grid[((x + i + columns) % columns)][((y + j + rows) % rows)];
        }
    }
    sum -= grid[x][y]; // Subtract the current cell, as we counted it twice with the above iteration loops.

    return sum;
}