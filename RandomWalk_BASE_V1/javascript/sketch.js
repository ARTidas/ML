let canvas = new Canvas();

const settings = {
    number_of_robots: 1000,
    robot_width: 10,
    robot_color: '#000',
    robot_starting_position_x: canvas.getWidth() / 2,
    robot_starting_position_y: canvas.getHeight() / 2,
    movement_speed: 10, // Should be equal to robot width for the histogram...
};

let robots = [];
let data = {
    x: [],
    //y: [],
    //z: [],
};

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight()
    );

    for (let i = 0; i < settings.number_of_robots; i++) {
        robots.push(new Robot());
    }
}

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    frameRate(15);
    background('#ddd');

    data.x = [];
    //data.y = [];
    //data.z = [];

    for (let robot of robots) {
        robot.move();
        data.x.push(robot.x);
    }

    drawHistogram();

    // We draw the robots after the histogram, so the columns would not cover the robot dots.
    for (let robot of robots) {
        robot.display();
    }

    //noLoop();
}

function drawHistogram() {
    let number_of_bins = int(canvas.getWidth() / settings.movement_speed); // This defines the number of bins
    let histogram = Array(number_of_bins).fill(0);

    for (let value of data.x) {
        //histogram[int(map(value, min(data.x), max(data.x), 0, number_of_bins))]++;
        histogram[int(map(value, 0, canvas.getWidth(), 0, number_of_bins))]++;
    }
    for (let i = 0; i < number_of_bins; i++) {
        fill('#fff');
        //let column_height = map(histogram[i], 0, settings.number_of_robots, 0, -canvas.getHeight() / 2)
        let column_height = map(log(histogram[i] + 1), 0, log(settings.number_of_robots), 0, canvas.getHeight() / 2);
        rect(
            i * settings.movement_speed,
            canvas.getHeight() / 2,
            settings.robot_width,
            -column_height
        );
    }
}