let genesys = new Genesys();
let canvas = new Canvas();
let targets = [];
let robots = [];

let simulation_parameters = {
    move_number: 0,
    max_move_number: 50,
    current_best_robot: null,
    current_second_best_candidate: null,
};

let standard_deviation = 0.1;
let standard_deviation_slider;

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight() - 30
    );

    standard_deviation_slider = createSlider(-2, 2, standard_deviation, 0.1);
    standard_deviation_slider.position(20, canvas.getHeight() - 30 + 20);
    standard_deviation_slider.input(updateValues);

    /*for (let target_type of target_types) {
        targets.push(new Target(target_type));
    }*/
    targets.push(
        new Target({
            color: 'red',
            shape: 'circle',
            width: settings.target_width,
            edible: true,
        })
    );

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

    simulation_parameters.move_number++;

    for (let target of targets) {
        target.display();

        if (target.is_dragged) {
            target.x = mouseX;
            target.y = mouseY;
        }
    }

    for (let robot of robots) {
        robot.move();
        robot.display();

        for (let target of targets) {

        }
    }

    //After no feeding in a few steps, then lets evolve the popultation.
    if (simulation_parameters.move_number === simulation_parameters.max_move_number) {
        console.log('Evolving robots...');
        evolveRobots();
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

function updateValues() {
    standard_deviation = standard_deviation_slider.value();
}

function evolveRobots() {
    //Sort the robots by fitness score and put them into accummulator
    robots.sort(compareFitness);
    let best_robot = robots.shift();
    let second_best_robot = robots.shift();

    //Reset the simulation
    simulation_parameters.move_number = 0;
    robots = [];

    //Put back the 2 best fitness score robots
    best_robot.x = settings.robot_starting_position_x;
    best_robot.y = settings.robot_starting_position_y;
    robots[0] = best_robot;
    second_best_robot.x = settings.robot_starting_position_x;
    second_best_robot.y = settings.robot_starting_position_y;
    robots[1] = second_best_robot;

    //Populate the rest of the robots array
    for (let i = 2; i < settings.number_of_robots; i++) {
        robots.push(new Robot(
            best_robot,
            second_best_robot
        ));
    }
}

function compareFitness(robot_1, robot_2) {
    edible_targets = targets.filter((target) => target.edible === true);
    
    return (
        robot_1.getFitnessScore(edible_targets) - 
        robot_2.getFitnessScore(edible_targets)
    );
};