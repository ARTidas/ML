let canvas = new Canvas();
let targets = [];
let hunter = new Hunter(0, 0);

const settings = {
    candidate_width: 10,
};

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getCanvasWidth(),
        canvas.getCanvasHeight()
    );

    //Lets create an initial starting target.
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

    hunter.display();

    targets.forEach((target) => {
        if (target.is_dragged) {
            target.x = mouseX;
            target.y = mouseY;
        }
        target.display();
    });

    //Find the closest target
    let closest_target = targets[0];
    let closest_target_distance = dist(closest_target.x, closest_target.y, hunter.x, hunter.y);
    targets.forEach((target) => {
        if (dist(target.x, target.y, hunter.x, hunter.y) < closest_target_distance) {
            closest_target = target;
        }
    });

    //Move towards closest target
    hunter.moveTowardsObjectWithGradientDescent(closest_target, 0.01);

    targets.forEach((target) => {
        if (hunter.intersects(target)) {
            noLoop();
        }
    });
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
}
function mouseReleased() {
    targets.forEach((target) => {
        target.is_dragged = false;
    });
}