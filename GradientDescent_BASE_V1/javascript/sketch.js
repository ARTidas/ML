let canvas = new Canvas();

// Project variables
let a = 1; // Coefficient of x^2
let b = 2; // Coefficient of x
let c = 1; // Constant

let x = canvas.getWidth();
let learning_rate = 0.1;

let a_slider, b_slider, c_slider;

let gradient_descent_calculations = [];

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight() - 120
    );
    
    a_slider = createSlider(-1.1, 2, a, 0.001);
    b_slider = createSlider(
        -canvas.getWidth() / 10,
        canvas.getWidth() / 10,
        b,
        0.01
    );
    c_slider = createSlider(
        -canvas.getHeight() / 2,
        canvas.getHeight() / 2,
        c,
        0.1
    );

    a_slider.position(20, canvas.getHeight() - 120 + 20);
    b_slider.position(20, canvas.getHeight() - 120 + 50);
    c_slider.position(20, canvas.getHeight() - 120 + 80);

    a_slider.input(updateValues);
    b_slider.input(updateValues);
    c_slider.input(updateValues);
};

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    //frameRate(1);
    background('#ddd');

    drawCostFunction();
    computeGradientDescentLines();
    drawGradientDescentLines();

    //noLoop();
};

function updateValues() {
    // Update the values of a, b, and c from the sliders
    a = a_slider.value();
    b = b_slider.value();
    c = c_slider.value();

    // Reset the position for gradient descent
    x = 2;
    gradient_descent_calculations = [];
}

//Quadratic function
//f(x) = ax2 + bx + c
function costFunction(x) {
    return (a * x * x + b * x + c);
};

function drawCostFunction() {
    // Draw the x and y axes
    stroke(0);
    line(0, canvas.getHeight() / 2, canvas.getWidth(), canvas.getHeight() / 2);
    line(canvas.getWidth() / 2, 0, canvas.getWidth() / 2, canvas.getHeight());

    // Draw the quadratic function
    noFill();
    beginShape();
    for (let x = -canvas.getWidth() / 2; x < canvas.getWidth() / 2; x += 5) {
        let y = costFunction(x);
        vertex(x + canvas.getWidth() / 2, -y + canvas.getHeight() / 2);
    }
    endShape();

    // Draw labels for the axes
    textSize(12);
    textAlign(CENTER, CENTER);
    text("x", canvas.getWidth() - 10, canvas.getHeight() / 2 - 10);
    text("y", canvas.getWidth() / 2 + 10, 10);

    // Draw a vertex point
    let vertexX = -b / (2 * a); // x-coordinate of the vertex
    let vertexY = a * vertexX * vertexX + b * vertexX + c; // y-coordinate of the vertex
    fill(255, 0, 0);
    ellipse(vertexX + canvas.getWidth() / 2, -vertexY + canvas.getHeight() / 2, 8, 8);
};

function computeGradientDescentLines() {
    // Gradient descent algorithm
    for (let i = 0; i < 20; i++) {
        let gradient = 2 * a * x + b; // Calculate the gradient of the cost function
        x = x - learning_rate * gradient; // Update the value of x

        // Draw a point to visualize the gradient descent
        let pos_x = (x + canvas.getWidth() / 2); // Scale and position x for drawing
        let pos_y = canvas.getHeight() / 2 - costFunction(x); // Compute y-coordinate based on cost function
        
        gradient_descent_calculations.push({
            x: pos_x,
            y: pos_y
        });
    }
};

function drawGradientDescentLines() {
    for (let gradient_descent_calculation of gradient_descent_calculations) {
        stroke(1);
        fill('#0f0');
        ellipse(
            gradient_descent_calculation.x,
            gradient_descent_calculation.y,
            8,
            8
        );
    }
};