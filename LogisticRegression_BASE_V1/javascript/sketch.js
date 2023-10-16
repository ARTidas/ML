let canvas = new Canvas();
let points = [];
let weights = [0, 0, 0];

const settings = {
    //Base simulation setup
    candidate_width: 10,
    //Hyperparameters
    learning_rate: 0.000001,
    number_of_points: 100,
};

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getCanvasWidth(),
        canvas.getCanvasHeight()
    );

    //Create initial random data points
    for (let i = 0; i < settings.number_of_points; i++) {
        let x = random(canvas.getCanvasWidth());
        let y = random(canvas.getCanvasHeight());
        points.push(
            new Point(
                x,
                y,
                settings.candidate_width,
                y > f(x) ? 1 : -1
            )
        );
    }

    
};

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    //console.log(weights);
    frameRate(10);
    //Train the logistic regression model
    trainLogisticRegression();
    background('#888');

    for (let point of points) {
        if (point.is_dragged) {
            point.x = mouseX;
            point.y = mouseY;
        }
        point.display();
    }

    //Display the decision boundary
    stroke(0);
    let x1 = 0;
    let y1 = f(x1);
    let x2 = canvas.getCanvasWidth();
    let y2 = f(x2);
    //console.log(x1, y1, x2, y2);
    line(x1, y1, x2, y2);

    //noLoop();
};

/** ********************************************************************
 ** *** MOUSE HANDLING AND DRAGGING ************************************
 ** ********************************************************************/
function mousePressed() {
    var mouse_pressed_on_empty_space = true;

    for (let point of points) {
        if (dist(point.x, point.y, mouseX, mouseY) < point.width) {
            point.is_dragged = true;
            mouse_pressed_on_empty_space = false;
        }
    }
    
    if (mouse_pressed_on_empty_space) {
        points.push(
            new Point(
                mouseX,
                mouseY,
                settings.candidate_width,
                mouseY > f(mouseX) ? 1 : -1
            )
        );
    }
};
function mouseReleased() {
    points.forEach((point) => {
        point.is_dragged = false;
    });
};

//Define the decision boundary (line equation)
function f(x) {
    return (-weights[2] + weights[0] * x) / weights[1];
    //return x * (canvas.getCanvasHeight() / canvas.getCanvasWidth());
}

function trainLogisticRegression() {
    for (let point of points) {
        let inputs = [point.x, point.y, 1]; //Add bias term
        let guess = point.sigmoid(point.dot(inputs, weights));
        let error = point.label - guess;
        for (let j = 0; j < weights.length; j++) {
            weights[j] += error * inputs[j] * settings.learning_rate;
        }
    }
}



