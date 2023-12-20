let canvas = new Canvas();

// Project variables
let trianglePoints = [];
let angle_slider, global_angle_slider, scaling_factor_slider;

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    frameRate(10);

    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight() - 120
    );

    angle_slider = createSlider(0, PI, PI / 4, 0.01); // Slider for adjusting angle
    angle_slider.size(canvas.getWidth() - 20 - 200);
    angle_slider.position(200, canvas.getHeight() - 120 + 20);
    createP("Angle:").position(20, canvas.getHeight() - 120 - 15);

    global_angle_slider = createSlider(0, PI, 0, 0.01); // Slider for adjusting global angle
    global_angle_slider.size(canvas.getWidth() - 20 - 200);
    global_angle_slider.position(200, canvas.getHeight() - 120 + 50);
    createP("Global Angle:").position(20, canvas.getHeight() - 120 + 15);

    scaling_factor_slider = createSlider(0, 0.8, 0.67, 0.01); // Slider for adjusting scaling factor
    scaling_factor_slider.size(canvas.getWidth() - 20 - 200);
    scaling_factor_slider.position(200, canvas.getHeight() - 120 + 80);
    createP("Scaling Factor:").position(20, canvas.getHeight() - 120 + 45);
    
    //noLoop();
};

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    background('#ddd');

    stroke(0);
    translate(canvas.getWidth() / 2, canvas.getHeight() - 120);
    branch((canvas.getHeight() - 120) / 3);

    //noLoop();
};

function branch(len) {
    // Recursive function to draw branches of the fractal tree
    line(0, 0, 0, -len);
    translate(0, -len);

    if (len > 4) {
        push();
        rotate(angle_slider.value() + global_angle_slider.value()); // Rotate to the right
        branch(len * scaling_factor_slider.value()); // Recursive call
        pop();

        push();
        rotate(-angle_slider.value() + global_angle_slider.value()); // Rotate to the left
        branch(len * scaling_factor_slider.value()); // Recursive call
        pop();
    }
}