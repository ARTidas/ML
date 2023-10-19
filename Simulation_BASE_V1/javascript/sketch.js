let genesys = new Genesys();
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

    for (let target_type of target_types) {
        targets.push(new Target(target_type));
    }

    for (let i = 0; i < settings.number_of_robots; i++) {
        robots.push(new Robot());
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
        for (let target of targets) {
            if (robot.intersects(target)) {
                textAlign(CENTER, CENTER);
                textSize(32);
                stroke(1);

                if (target.edible) {
                    fill('#0f0');
                    text(
                        //String.fromCharCode(random((0x0001F571))),
                        'Robot found edible target!',
                        canvas.getWidth() / 2,
                        canvas.getHeight() / 2
                    );
                    //saveCanvas(canvas.object, 'simulation_base_v1_edible.png');
                    //noLopp();
                }
                else {
                    fill('#f00');
                    text(
                        //String.fromCharCode(random((0x00002764))),
                        'Robot died because of inedible target!',
                        canvas.getWidth() / 2,
                        canvas.getHeight() / 2
                    );
                    //saveCanvas(canvas.object, 'simulation_base_v1_inedible.png');
                    //noLopp();
                }
            }
        }
    }

    //saveCanvas(canvas.object, 'simulation_base_v1_beginning.png');
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
};
function mouseReleased() {
    for (let target of targets) {
        target.is_dragged = false;
    }
};

