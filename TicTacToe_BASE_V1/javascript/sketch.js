let canvas = new Canvas();

let slider_space_height = 40 * 1;
let stroke_weight_slider;

let grid_size = 3;
let cell_size_x, cell_size_y;
let board;
let current_player = 'X';
let winner = null;

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight() - slider_space_height
    );

    stroke_weight_slider = createSlider(0, 80, 15, 1); // Slider for adjusting angle
    stroke_weight_slider.size(canvas.getWidth() - 20 - 200);
    stroke_weight_slider.position(200, canvas.getHeight() - slider_space_height + 20);
    createP("Stroke weight:").position(20, canvas.getHeight() - slider_space_height);

    background('#fff');
    strokeWeight(stroke_weight_slider.value());
    noFill();
    stroke('#000');

    cell_size_x = canvas.getWidth() / grid_size;
    cell_size_y = canvas.getHeight() / grid_size;
    initializeTicTacToe();

    const clear_canvas_button = document.getElementById('clear_canvas_button');
    clear_canvas_button.addEventListener('click', clearCanvas);
}

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    //frameRate(20);

    strokeWeight(stroke_weight_slider.value());
    //drawSeparators();
    drawTicTacToe();
    
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    if (mouseIsPressed && winner === null) {
        makeMove();
    }

    //noLoop();
}


function initializeTicTacToe() {
    board = new Array(grid_size).fill(null).map(
        () => new Array(grid_size).fill('')
    );
}

function drawSeparators() {
    for (let i = 1; i < grid_size; i++) {
        line(cell_size_x * i, 0, cell_size_x * i, canvas.getHeight()); // Vertical separator lines
        line(0, cell_size_y * i, canvas.getWidth(), cell_size_y * i); // Horizontal separator lines
    }
}

function makeMove() {
    let col = floor(mouseX / cell_size_x);
    let row = floor(mouseY / cell_size_y);

    if (isValidMove(row, col)) {
        board[row][col] = current_player;
        checkWinner();
        switchPlayer();
    }
}

function isValidMove(row, col) {
    return board[row][col] === '';
}

function switchPlayer() {
    current_player = current_player === 'X' ? 'O' : 'X';
}

function drawTicTacToe() {
    stroke(0);
    strokeWeight(2);

    for (let i = 1; i < grid_size; i++) {
        line(i * cell_size_x, 0, i * cell_size_x, canvas.getHeight());
        line(0, i * cell_size_y, canvas.getWidth(), i * cell_size_y);
    }

    textSize(32);
    textAlign(CENTER, CENTER);

    for (let i = 0; i < grid_size; i++) {
        for (let j = 0; j < grid_size; j++) {
            let x = j * cell_size_x + cell_size_x / 2;
            let y = i * cell_size_y + cell_size_y / 2;

            let symbol = board[i][j];
            if (symbol !== '') {
                text(symbol, x, y);
            }
        }
    }
}

function checkWinner() {
    for (let i = 0; i < grid_size; i++) {
        if (
            board[i].every(cell => cell === current_player) ||
            board.every(row => row[i] === current_player)
        ) {
            winner = current_player;
        }
    }

    if (
        board.every((row, index) => row[index] === current_player) ||
        board.every((row, index) => row[grid_size - 1 - index] === current_player)
    ) {
        winner = current_player;
    }

    if (winner) {
        console.log(`Player ${winner} wins!`);
        drawTicTacToe();
        noLoop();
    }
    else if (board.flat().every(cell => cell !== '')) {
        console.log("It's a draw!");
        drawTicTacToe();
        noLoop();
    }
}

function keyPressed() {
    if (keyCode === ENTER) {
        clearCanvas()
    }
}

function clearCanvas() {
    clear();
    background('#fff');
    stroke('#000');
    initializeTicTacToe();
    winner = null;
    loop();
}
