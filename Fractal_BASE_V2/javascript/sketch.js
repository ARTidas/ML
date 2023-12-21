let canvas = new Canvas();

// Project variables
let trianglePoints = [];
let slider_space_height = 50;
let margin = 20;
let depth_slider;

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    frameRate(10);

    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight() - slider_space_height
    );

    depth_slider = createSlider(0, 10, 0, 1); // Slider for adjusting depth
    depth_slider.size(canvas.getWidth() - 20 - 200);
    depth_slider.position(200, canvas.getHeight() - slider_space_height + 20);
    createP("Depth:").position(20, canvas.getHeight() - slider_space_height);

    // Initial vertices of an equilateral triangle
    let p1 = createVector(canvas.getWidth() / 2, margin);
    let p2 = createVector(margin, (canvas.getHeight() - slider_space_height) - margin);
    let p3 = createVector(canvas.getWidth() - margin, (canvas.getHeight() - slider_space_height) - margin);
    
    trianglePoints = [p1, p2, p3];

    // noLoop();
}

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    background('#ddd');

    fill(0);
    strokeWeight(0);

    drawTriangle(trianglePoints, depth_slider.value());

    // noLoop();
}

// Sierpinski Triangle
function drawTriangle(points, depth) {
    if (depth === 0) {
        // Draw the triangle with vertices flipped horizontally
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