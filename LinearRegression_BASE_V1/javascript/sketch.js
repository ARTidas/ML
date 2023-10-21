let canvas = new Canvas();
let targets = [];
let robots = [];
let linear_regression_attributes = {};

//Initialize the model parameters (slope and intercept)
let slope = 0; //The slope of the line
let intercept = 0; //The y-intercept of the line

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight()
    );

    targets.push(
        new Target(
            random(canvas.getWidth()),
            random(canvas.getHeight())
        )
    );

    //robots.push(new Robot());
};

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    //frameRate(3);
    background('#ddd');

    for (let target of targets) {
        if (target.is_dragged) {
            target.x = mouseX;
            target.y = mouseY;
        }
        target.display();
    }

    for (let robot of robots) {
        if (robot.is_dragged) {
            robot.x = mouseX;
            robot.y = mouseY;
        }
        robot.display();
    }

    //drawTargetDirectionLine();
    drawLinearRegressionLine();

    //noLoop();
};

/** ********************************************************************
 ** *** MOUSE HANDLING AND DRAGGING ************************************
 ** ********************************************************************/
function mousePressed() {
    var mouse_pressed_on_empty_space = true;

    for (let target of targets) {
        if (dist(target.x, target.y, mouseX, mouseY) < target.width) {
            target.is_dragged = true;
            mouse_pressed_on_empty_space = false;
        }
    }

    for (let robot of robots) {
        if (dist(robot.x, robot.y, mouseX, mouseY) < robot.width) {
            robot.is_dragged = true;
            mouse_pressed_on_empty_space = false;
        }
    }
    
    if (mouse_pressed_on_empty_space) {
        targets.push(new Target(mouseX, mouseY));
    }
};
function mouseReleased() {
    for (let target of targets) {
        target.is_dragged = false;
    }

    for (let robot of robots) {
        robot.is_dragged = false;
    }
};


function drawTargetDirectionLine() {
    for (let robot of robots) {
        direction_line = robot.getTargetClusterDirection(targets);

        line(
            robot.x,
            robot.y,
            direction_line.x,
            direction_line.y
        );

        //noLoop();
    }
};

function drawLinearRegressionLine() {
    linear_regression_attributes = canvas.getLinearRegressionAttributes(targets);

    line(
        0,
        linear_regression_attributes.intercept,
        canvas.getWidth(),
        linear_regression_attributes.slope * canvas.getWidth() + linear_regression_attributes.intercept
    );

    textAlign(LEFT, TOP);
    textSize(32);
    stroke('black');
    text(
        'Coefficient of determination (R-squared, r2): ' + linear_regression_attributes.r2,
        0,
        0
    );
};