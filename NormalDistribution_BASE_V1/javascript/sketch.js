let canvas = new Canvas();
let drawn_context_objects = [];

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
};

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    frameRate(10);
    background('#888');

    // Parameters for the normal distribution
    const mean = canvas.getCanvasWidth() / 2;
    const standard_deviation = canvas.getCanvasWidth() / 9;

    // Generate and plot random points following a normal distribution
    for (let i = 0; i < canvas.getCanvasWidth() / 3; i++) {
      const x = randomGaussian(mean, standard_deviation);
      const y = canvas.getCanvasHeight() / 2;
      ellipse(x, y, 3, 3);
    }

    //noLoop();
};