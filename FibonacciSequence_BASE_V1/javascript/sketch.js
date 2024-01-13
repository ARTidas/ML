let canvas = new Canvas();

let slider_space_height = 40;
let sequence_slider;

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight() - slider_space_height
    );

    sequence_slider = createSlider(1, 18, 1, 1);
    sequence_slider.size(canvas.getWidth() - 20 - 200);
    sequence_slider.position(200, canvas.getHeight() - slider_space_height + 20);
    createP("Sequence depth:").position(20, canvas.getHeight() - slider_space_height);
}

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    frameRate(10);
    background('#ddd');

    let x = canvas.getWidth() / 2;
    let y = canvas.getHeight() / 2;
    let previous_value = 0;
    let previous_previous_value = 0;

    for (let i = 1; i < sequence_slider.value(); i++) {
        let value = computeFibonacciSequence(i);

        if (i % 4 === 0) {
            y += previous_value;
        }
        else if (i % 4 === 1) {
            x += previous_value;
            y -= previous_previous_value;
        }
        else if (i % 4 === 2) {
            x -= previous_previous_value;
            y -= value;
        }
        else if (i % 4 === 3) {
            x -= value;
        }

        drawFibonacciSquare(
            x,
            y,
            value
        );

        previous_previous_value = previous_value;
        previous_value = value;
    }

    //noLoop();
}

function computeFibonacciSequence(sequence_limit) {
    if (sequence_limit <= 1) {
        return sequence_limit;
    }
    else {
        return (
            computeFibonacciSequence(sequence_limit - 1) + 
            computeFibonacciSequence(sequence_limit - 2)
        );
    }
}

function drawFibonacciSquare(x, y, value) {
    noFill();
    //rectMode(CENTER);

    rect(x, y, value, value);
}