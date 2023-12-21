let canvas = new Canvas();

// Project variables
let slider_space_height = 150;
let angle_slider, global_angle_slider, scaling_factor_slider, 
    minimum_length_slider, branches_slider
;

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    frameRate(10);

    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight() - slider_space_height
    );

    angle_slider = createSlider(0, PI, PI / 3, PI / 1000); // Slider for adjusting angle
    angle_slider.size(canvas.getWidth() - 20 - 200);
    angle_slider.position(200, canvas.getHeight() - slider_space_height + 20);
    createP("Angle:").position(20, canvas.getHeight() - slider_space_height);

    global_angle_slider = createSlider(0, PI, PI / 2, PI / 1000); // Slider for adjusting global angle
    global_angle_slider.size(canvas.getWidth() - 20 - 200);
    global_angle_slider.position(200, canvas.getHeight() - slider_space_height + 50);
    createP("Global Angle:").position(20, canvas.getHeight() - slider_space_height + 30);

    scaling_factor_slider = createSlider(0, 0.8, 0.5, 0.01); // Slider for adjusting scaling factor
    scaling_factor_slider.size(canvas.getWidth() - 20 - 200);
    scaling_factor_slider.position(200, canvas.getHeight() - slider_space_height + 80);
    createP("Scaling Factor:").position(20, canvas.getHeight() - slider_space_height + 60);

    minimum_length_slider = createSlider(1, 10, 3, 0.1); // Slider for adjusting scaling factor
    minimum_length_slider.size(canvas.getWidth() - 20 - 200);
    minimum_length_slider.position(200, canvas.getHeight() - slider_space_height + 110);
    createP("Minimum length:").position(20, canvas.getHeight() - slider_space_height + 90);

    branches_slider = createSlider(1, 5, 3, 1); // Slider for adjusting the number of branches
    branches_slider.size(canvas.getWidth() - 20 - 200);
    branches_slider.position(200, canvas.getHeight() - slider_space_height + 140);
    createP("Number of Branches:").position(20, canvas.getHeight() - slider_space_height + 120);

    // noLoop();
}

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    background('#ddd');

    strokeWeight(2);

    translate(canvas.getWidth() / 2, canvas.getHeight() - 120);
    branch((canvas.getHeight() - 120) / 3, branches_slider.value());

    // noLoop();
}

function branch(length, branches) {
    // Recursive function to draw branches of the fractal tree
    line(0, 0, 0, -length);
    translate(0, -length);

    if (length > minimum_length_slider.value()) {
        for (let i = 0; i < branches; i++) {
            push();
            rotate(
                global_angle_slider.value() + 
                map(
                    i,
                    0, branches - 1,
                    -PI / 2, PI / 2 + angle_slider.value()
                )
            );
            branch(length * scaling_factor_slider.value(), branches_slider.value()); // Recursive call
            pop();
        }
    }
}