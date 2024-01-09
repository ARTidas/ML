let canvas = new Canvas();

let slider_space_height = 40;
let frame_rate_slider;

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
    y: [],
    //z: [],
};

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight() - slider_space_height
    );

    frame_rate_slider = createSlider(0, 30, 1, 1); // Slider for adjusting angle
    frame_rate_slider.size(canvas.getWidth() - 20 - 200);
    frame_rate_slider.position(200, canvas.getHeight() - slider_space_height + 20);
    createP("Frame rate:").position(20, canvas.getHeight() - slider_space_height);

    for (let i = 0; i < settings.number_of_robots; i++) {
        robots.push(new Robot());
    }
}

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    frameRate(frame_rate_slider.value());
    background('#ddd');

    data.x = [];
    data.y = [];
    //data.z = [];

    for (let robot of robots) {
        robot.move();
        data.x.push(robot.x);
        data.y.push(robot.y);
    }

    drawHistogram();

    // We draw the robots after the histogram, so the columns would not cover the robot dots.
    for (let robot of robots) {
        robot.display();
    }

    //noLoop();
}

function drawHistogram() {
    let x_number_of_bins = int(canvas.getWidth() / settings.movement_speed);
    let y_number_of_bins = int(canvas.getHeight() / settings.movement_speed);

    let x_histogram = Array(x_number_of_bins).fill(0);
    let y_histogram = Array(y_number_of_bins).fill(0);

    for (let value of data.x) {
        x_histogram[int(map(value, 0, canvas.getWidth(), 0, x_number_of_bins))]++;
    }
    for (let value of data.y) {
        y_histogram[int(map(value, 0, canvas.getHeight(), 0, y_number_of_bins))]++;
    }

    for (let i = 0; i < x_number_of_bins; i++) {
        fill('#fff');
        strokeWeight(1);
        let column_height = map(log(x_histogram[i] + 1), 0, log(settings.number_of_robots), 0, canvas.getHeight() / 2);
        rect(
            //(i * settings.movement_speed) + (settings.robot_width / 2) - 1.5,
            (i * settings.movement_speed) + (settings.movement_speed / 2),
            canvas.getHeight(),
            settings.robot_width,
            -column_height
        );
    }
    for (let i = 0; i < y_number_of_bins; i++) {
        fill('#fff');
        strokeWeight(1);
        let column_width = map(log(y_histogram[i] + 1), 0, log(settings.number_of_robots), 0, canvas.getWidth() / 2);
        rect(
            canvas.getWidth(),
            (i * settings.movement_speed) + (settings.movement_speed / 2),
            -column_width,
            settings.robot_width
        );
    }
}