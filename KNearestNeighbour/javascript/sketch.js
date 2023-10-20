let genesys = new Genesys();
let canvas = new Canvas();
let robots = [];
let targets = [];

const target_type = {
    width: 5,
    color: 'black',
    shape: 'circle',
    edible: null,
};

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight()
    );

    for (let i = 0; i < 3; i++) {
        robots.push(new Robot());
    }
    for (let robot of robots) {
        robot.x = random(canvas.getWidth());
        robot.y = random(canvas.getHeight());
        robot.color = robot.getRandomHexColor();
    }

    for (let i = 0; i < 300; i++) {
        targets.push(new Target(target_type));
    }
};

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    //frameRate(3);
    background('#ddd');

    for (let target of targets) {
        target.display();

        if (target.is_dragged) {
            target.x = mouseX;
            target.y = mouseY;
        }
    }

    for (let robot of robots) {
        robot.display();

        if (robot.is_dragged) {
            robot.x = mouseX;
            robot.y = mouseY;
        }

        /** ********************************************************************
         ** *** kNN TO FIND CLOSEST TARGETS ************************************
         ** ********************************************************************/
        for (
            let
                target
            of
                robot.findKNearestNeighbors(targets, 20)
        ) {
            noFill();
            strokeWeight(7);
            stroke(robot.color);
            ellipse(target.x, target.y, target.width + 3);
        }
    }

    //saveCanvas(canvas.object, 'simulation_base_v2_beginning.png');
    //noLoop();
};

/** ********************************************************************
 ** *** MOUSE HANDLING AND DRAGGING ************************************
 ** ********************************************************************/
function mousePressed() {
    var mouse_pressed_on_empty_space = true;

    // Lets be able to drag the target if we wish...
    for (let target of targets) {
        // We need to shink down the clickable area otherwise, it would 
        //     allow the piling up of objects onto each other.
        if (dist(target.x, target.y, mouseX, mouseY) < (target.width / 2)) {
            target.is_dragged = true;
            mouse_pressed_on_empty_space = false;
        }
    }

    for (let robot of robots) {
        if (dist(robot.x, robot.y, mouseX, mouseY) < (robot.width / 2)) {
            robot.is_dragged = true;
            mouse_pressed_on_empty_space = false;
        }
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