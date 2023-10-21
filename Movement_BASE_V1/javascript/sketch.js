let canvas = new Canvas();
let targets = [];
let robots = [];

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight()
    );

    for (let i = 0; i < 1; i++) {
        robots.push(
            new Robot(
                random(10),
                random(10)
            )
        );
    }
    

    targets.push(
        new Target(
            canvas.getWidth() * 0.95,
            canvas.getHeight() * 0.95
        )
    );
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

    //Find the closest target
    for (let robot of robots) {
        let closest_target = targets[0];
        let closest_target_distance = dist(closest_target.x, closest_target.y, robot.x, robot.y);
        for (let target of targets) {
            if (dist(target.x, target.y, robot.x, robot.y) < closest_target_distance) {
                closest_target = target;
                closest_target_distance = dist(closest_target.x, closest_target.y, robot.x, robot.y);
            }
        }

        //Move towards closest target
        //robot.moveTowardsObjectWithGradientDescent(closest_target, 0.01);
        robot.moveTowardsObject(closest_target, 0);

        //Check if a robot reached a target
        for (let target of targets) {
            if (robot.intersects(target)) {
                //noLoop();
            }
        }
    }

    for (let robot of robots) {
        robot.display();
    }
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
    
    if (mouse_pressed_on_empty_space) {
        targets.push(new Target(mouseX, mouseY));
    }
}
function mouseReleased() {
    for (let target of targets) {
        target.is_dragged = false;
    }
}