let canvas = new Canvas();
let balls = [];
let obstacles = [];

const settings = {
    //Base simulation setup
    candidate_width: 10,
    candidate_speed: 1,
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
};

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    //console.log(weights);
    //frameRate(10);
    background('#888');

    for (let obstacle of obstacles) {
        obstacle.display();
    }

    for (let ball of balls) {
        if (ball.is_dragged) {
            ball.x = mouseX;
            ball.y = mouseY;
        }
        else {
            ball.y += ball.speed * ball.y_direction;
            ball.speed += ball.acceleration;
        }
        ball.display();

        if (ball.y < 0) {
            ball.remove();
        }
    }

    if (mouseIsPressed && mouseButton === CENTER) {
        obstacles.push(
            new Obstacle(
                pmouseX,
                pmouseY,
                mouseX,
                mouseY
            )
        );
    }

    handleObjectIntersections();

    //noLoop();
};

/** ********************************************************************
 ** *** MOUSE HANDLING AND DRAGGING ************************************
 ** ********************************************************************/
function mousePressed() {
    var mouse_pressed_on_empty_space = true;

    for (let ball of balls) {
        if (dist(ball.x, ball.y, mouseX, mouseY) < ball.width) {
            ball.is_dragged = true;
            mouse_pressed_on_empty_space = false;
        }
    }
    
    if (mouse_pressed_on_empty_space && mouseButton === LEFT) {
        balls.push(
            new Ball(
                mouseX,
                mouseY,
                settings.candidate_width
            )
        );
    }
};
function mouseReleased() {
    for (let ball of balls) {
        ball.is_dragged = false;
    }
};

function handleObjectIntersections() {
    for (let ball of balls) {
        for (let obstacle of obstacles) {
            if (ball.intersects(obstacle)) {
                ball.y_direction *= -1;
            }
        }
    }
};