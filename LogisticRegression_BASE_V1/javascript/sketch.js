let canvas = new Canvas();
let data = [];
let w, b; // Logistic regression parameters

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight()
    );

    initializeData();
    initializeParameters();
};

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    //frameRate(10);
    background('#ddd');

    // Draw data points
    for (let point of data) {
        let x = map(point.x, 0, 1, 0, canvas.getWidth());
        let y = map(point.y, 0, 1, canvas.getWidth(), 0);
        let label = point.label;
        fill((label === 1 ? 'red' : 'blue'));
        stroke(0);
        circle(x, y, 10);
    }

    // Perform logistic regression
    logisticRegression();
}

function initializeData() {
    for (let i = 0; i < 200; i++) {
        let x = random();
        let y = random();
        let label = x + y > 1 ? 1 : 0; // Our simple decision boundary
        data.push({
            x,
            y,
            label
        });
    }
}

function initializeParameters() {
    w = createVector(-1, 1); // Initial weight vector
    b = 0; // Initial bias
}

function logisticRegression() {
    let learning_rate = 0.001;
  
    for (let point of data) {
        let x = createVector(point.x, point.y);
        let z = w.dot(x) + b;
        let sigmoid = 1 / (1 + Math.exp(-z));
        let error = point.label - sigmoid;
    
        // Update parameters
        w.add(x.mult(error * sigmoid * (1 - sigmoid) * learning_rate));
        b += error * sigmoid * (1 - sigmoid) * learning_rate;
    }
  
    // Draw decision boundary
    let x1 = 0;
    let x2 = 1;
    let y1 = (-w.x * x1 - b) / w.y;
    let y2 = (-w.x * x2 - b) / w.y;
    x1 = map(x1, 0, 1, 0, width);
    x2 = map(x2, 0, 1, 0, width);
    y1 = map(y1, 0, 1, height, 0);
    y2 = map(y2, 0, 1, height, 0);
    stroke('black');
    line(x1, y1, x2, y2);
}