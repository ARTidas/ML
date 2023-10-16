let canvas = new Canvas();

let learning_rate = 0.1; //Learning rate for gradient descent
let current_x = 0; //Initial value of the parameter
let target = canvas.getCanvasWidth() / 2; //Target value we want to reach
let history_x = []; //Store the history of parameter values for visualization

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getCanvasWidth(),
        canvas.getCanvasHeight()
    );
};

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    //frameRate(10);
    background('#888');
    drawCoordinateSystemWhereOrigoIsBottomMiddle();
    drawQuadraticFunction();
    /*

    // Calculate the loss, which is the squared difference between current_x and the target
    let loss = (current_x - target) ** 2;

    // Calculate the gradient of the loss with respect to current_x
    let gradient = 2 * (current_x - target);

    // Update current_x using gradient descent
    current_x -= learning_rate * gradient;

    // Store the current_x value for visualization
    history_x.push(current_x);

    

    // Draw the path taken by gradient descent
    noFill();
    stroke(255, 0, 0);
    beginShape();
    for (let i = 0; i < history_x.length; i++) {
        let y = (history_x[i] - target) ** 2;
        vertex(i, canvas.getCanvasHeight() - y);
    }
    endShape();

    // Display current_x value
    fill(0);
    textSize(16);
    text('Current X: ' + current_x.toFixed(2), 10, 20);

    // Stop when we get close to the minimum
    if (loss < 0.001) {
        noLoop();
    }*/

    noLoop();
};

function drawQuadraticFunction() {
    //Lets draw the quadratic function - https://en.wikipedia.org/wiki/Quadratic_function
    noFill();
    strokeWeight(1);
    stroke('black');
    beginShape();
    for (let i = -canvas.getCanvasWidth() / 2; i < canvas.getCanvasWidth() / 2; i++) { //We iterate thorugh
        let y = (i) ** 2; //** <- JS exponential operator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation 
        console.log('i:' + i + ', y:' + y);
        vertex((canvas.getCanvasWidth() / 2) + i, canvas.getCanvasHeight() - y - 20);
    }
    endShape();
};


function drawCoordinateSystemWhereOrigoIsBottomLeft() {
    stroke('black');
    fill(0);
    textSize(8);

    strokeWeight(1);
    line(0, canvas.getCanvasHeight() - 20, canvas.getCanvasWidth(), canvas.getCanvasHeight() - 20);
    for (let x = 20; x < canvas.getCanvasWidth(); x += 20) {
        strokeWeight(1);
        line(x, canvas.getCanvasHeight() - 17, x, canvas.getCanvasHeight() - 23); //Tick marks on x-axis
        textAlign(CENTER, TOP);
        strokeWeight(0);
        text(x - 20, x, canvas.getCanvasHeight() - 16); //Labels on x-axis
    }

    //Lets draw the y-axis
    line(20, 0, 20, canvas.getCanvasHeight());
    for (let y = 20; y < canvas.getCanvasHeight(); y += 20) {
        line(17, canvas.getCanvasHeight() - y, 23, canvas.getCanvasHeight() - y); // Tick marks on y-axis
        strokeWeight(1);
        textAlign(RIGHT, CENTER);
        strokeWeight(0);
        text(y - 20, 16, canvas.getCanvasHeight() - y); // Labels on y-axis (negative values)
    }
};

function drawCoordinateSystemWhereOrigoIsBottomMiddle() {
    stroke('black');
    fill(0);
    textSize(8);

    strokeWeight(1);
    line(0, canvas.getCanvasHeight() - 20, canvas.getCanvasWidth(), canvas.getCanvasHeight() - 20);
    for (let x = 20; x < canvas.getCanvasWidth(); x += 20) {
        strokeWeight(1);
        line(x, canvas.getCanvasHeight() - 17, x, canvas.getCanvasHeight() - 23);
        textAlign(CENTER, TOP);
        strokeWeight(0);
        text(x - 20, x, canvas.getCanvasHeight() - 16);
    }

    strokeWeight(1);
    line(canvas.getCanvasWidth() / 2, 0, canvas.getCanvasWidth() / 2, canvas.getCanvasHeight());
    for (let y = 20; y < canvas.getCanvasHeight(); y += 20) {
        strokeWeight(1);
        line((canvas.getCanvasWidth() / 2) - 3, canvas.getCanvasHeight() - y, (canvas.getCanvasWidth() / 2) + 3, canvas.getCanvasHeight() - y);
        textAlign(RIGHT, CENTER);
        strokeWeight(0);
        text((canvas.getCanvasWidth() / 2) - 20, (canvas.getCanvasWidth() / 2), canvas.getCanvasHeight() - y);
    }
};