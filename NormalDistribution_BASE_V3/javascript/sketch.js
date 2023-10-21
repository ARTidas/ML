let canvas = new Canvas();

let mean;
let standard_deviation;
let x_spacing;
let y_values = [];
let curve_data = [];

function setup() {
    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight()
    );

    // Parameters for the normal distribution
    mean = canvas.getWidth() / 2;
    standard_deviation = canvas.getWidth() / 6;
    x_spacing = 1;
}

function draw() {
    console.log('Next cycle...');
    //frameRate(3);
    background('#ddd');

    // Collect random data points
    let data_points = [];
    for (let i = 0; i < canvas.getWidth(); i++) {
        const x = randomGaussian(mean, standard_deviation);
        data_points.push(x);

        // Draw the collected data points
        ellipse(x, canvas.getHeight() / 2, 3, 3);
    }

    // Calculate probability density values for x values
    for (let x = mean - 3 * standard_deviation; x < mean + 3 * standard_deviation; x += x_spacing) {
        let y = calculateDensity(data_points, x);
        y_values.push(y);
    }

    // Normalize the y values for drawing
    let max_y = max(y_values);
    y_values = y_values.map(y => map(y, 0, max_y, height, 0));

    // Add the current curve data to the array
    curve_data.push([...y_values]);

    // Draw all the stored curves
    for (let i = 0; i < curve_data.length; i++) {
        drawCurve(curve_data[i]);
    }

    // Draw the curve
    noFill();
    beginShape();
    for (let i = 0; i < y_values.length; i++) {
        vertex(i * x_spacing, y_values[i]);
    }
    endShape();

    y_values = [];
    //noLoop();
}

function calculateDensity(data_points, x) {
    const bandwidth = 10; // Adjust the bandwidth as needed
    let sum = 0;
    for (let data_point of data_points) {
      const exponent = -0.5 * sq((x - data_point) / bandwidth);
      sum += exp(exponent) / (bandwidth * sqrt(2 * PI));
    }

    return sum / data_points.length;
}

function drawCurve(data) {
    noFill();
    stroke('#000'); // Set curve color
    beginShape();
    for (let i = 0; i < data.length; i++) {
        vertex(i * x_spacing, data[i]);
    }
    endShape();
}