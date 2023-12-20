let canvas = new Canvas();

// Project variables
let trianglePoints = [];
let a = 1; // Coefficient of x^2
let b = 2; // Coefficient of x
let c = 1; // Constant

let a_slider, b_slider, c_slider;

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight() - 120
    );
    
    a_slider = createSlider(-1.1, 2, a, 0.0001);
    b_slider = createSlider(
        -canvas.getWidth() / 10,
        canvas.getWidth() / 10,
        b,
        0.0001
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

    // Initial vertices of an equilateral triangle
    let p1 = createVector(canvas.getWidth() / 2, (canvas.getHeight() - 120) - 50);
    let p2 = createVector(canvas.getWidth() / 4, (canvas.getHeight() - 120) / 4);
    let p3 = createVector((3 * canvas.getWidth()) / 4, (canvas.getHeight() - 120) / 4);
    
    trianglePoints = [p1, p2, p3];
    
    //noLoop();
};

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    frameRate(3);
    background('#ddd');

    stroke(0);
    fill(0, 0, 0);
    drawTriangle(trianglePoints, 5);

    //noLoop();
};

//Sierpinski Triangle
function drawTriangle(points, depth) {
    if (depth === 0) {
        triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);
    } else {
        // Calculate midpoints of the sides
        let mid1 = createVector((points[0].x + points[1].x) / 2, (points[0].y + points[1].y) / 2);
        let mid2 = createVector((points[1].x + points[2].x) / 2, (points[1].y + points[2].y) / 2);
        let mid3 = createVector((points[2].x + points[0].x) / 2, (points[2].y + points[0].y) / 2);

        // Recursively draw smaller triangles
        drawTriangle([points[0], mid1, mid3], depth - 1);
        drawTriangle([mid1, points[1], mid2], depth - 1);
        drawTriangle([mid3, mid2, points[2]], depth - 1);
    }
}

function updateValues() {
    // Update the values of a, b, and c from the sliders
    a = a_slider.value();
    b = b_slider.value();
    c = c_slider.value();
}