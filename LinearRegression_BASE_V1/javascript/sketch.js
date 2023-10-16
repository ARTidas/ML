let canvas = new Canvas();
let targets = [];
let regression_line = new RegressionLine(0, 0);

//Initialize the model parameters (slope and intercept)
let slope = 0; //The slope of the line
let intercept = 0; //The y-intercept of the line

const settings = {
    //Base simulation setup
    candidate_width: 10,
    //Hyperparameters
    learning_rate: 0.0000001,
    number_of_iterations: 20,
};

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getCanvasWidth(),
        canvas.getCanvasHeight()
    );

    //Lets create an initial starting target
    targets.push(
        new Target(
            canvas.getCanvasWidth() * 0.95,
            canvas.getCanvasHeight() * 0.95
        )
    );
};

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    //frameRate(10);
    background('#888');

    targets.forEach((target) => {
        if (target.is_dragged) {
            target.x = mouseX;
            target.y = mouseY;
        }
        target.display();
    });

    drawLinearRegressionLine();

    noLoop();
};

/** ********************************************************************
 ** *** MOUSE HANDLING AND DRAGGING ************************************
 ** ********************************************************************/
function mousePressed() {
    var mouse_pressed_on_empty_space = true;

    targets.forEach((target) => {
        if (dist(target.x, target.y, mouseX, mouseY) < target.width) {
            target.is_dragged = true;
            mouse_pressed_on_empty_space = false;
        }
    });
    
    if (mouse_pressed_on_empty_space) {
        targets.push(new Target(mouseX, mouseY));
    }
};
function mouseReleased() {
    targets.forEach((target) => {
        target.is_dragged = false;
    });
};

function drawLinearRegressionLine() {
    //Gradient Descent algorithm for linear regression
    for (let i = 0; i < settings.number_of_iterations; i++) {
        let slope_gradient = 0;
        let intercept_gradient = 0;
    
        //Calculate gradients for slope and intercept
        for (const target of targets) {
            const predicted_y = slope * target.x + intercept;
            const error = predicted_y - target.y;
        
            //Partial derivatives of the loss function with respect to slope and intercept
            slope_gradient += 2 * error * target.x;
            intercept_gradient += 2 * error;
        }
    
        // Update the parameters using the gradients
        slope -= settings.learning_rate * (slope_gradient / targets.length);
        intercept -= settings.learning_rate * (intercept_gradient / targets.length);
        //console.log('x1: ' + 0 + ', y1: ' + intercept + ', x2: ' + canvas.getCanvasWidth() + ', y2: ' + canvas.getCanvasWidth() * slope + intercept);
        console.log('y1: ' + intercept + ', y2: ' + (canvas.getCanvasWidth() * slope + intercept));
        line(
            0,
            intercept,
            canvas.getCanvasWidth(),
            canvas.getCanvasWidth() * slope + intercept
        );
    }
};