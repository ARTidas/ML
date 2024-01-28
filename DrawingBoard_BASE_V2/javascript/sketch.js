let canvas = new Canvas();

let slider_space_height = 40 * 1;
let stroke_weight_slider;

const origin_x = canvas.getWidth() / 2;
const origin_y = (canvas.getHeight() - slider_space_height) / 2;

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    /*let shortest_canvas_side= min(
        canvas.getWidth(),
        canvas.getHeight() - slider_space_height
    )
    canvas.object = createCanvas(
        shortest_canvas_side,
        shortest_canvas_side
    );*/
    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight() - slider_space_height
    );

    //stroke_weight_slider = createSlider(0, 120, 60, 1); // Slider for adjusting the stroke width
    stroke_weight_slider = createSlider(0, 120, 30, 1);
    stroke_weight_slider.size(canvas.getWidth() - 20 - 200);
    stroke_weight_slider.position(200, canvas.getHeight() - slider_space_height + 20);
    createP("Stroke weight:").position(20, canvas.getHeight() - slider_space_height);

    background('#fff');
    strokeWeight(stroke_weight_slider.value());
    noFill();
    stroke('#000');

    const clear_canvas_button = document.getElementById('clear_canvas_button');
    clear_canvas_button.addEventListener('click', clearCanvas);
    const save_button = document.getElementById('save_canvas_drawing_button');
    save_button.addEventListener('click', saveDrawing);
}

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    //frameRate(20);

    drawCoordinateSystem();
    strokeWeight(stroke_weight_slider.value());

    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }

    //noLoop();
}


function drawCoordinateSystem() {
    //noStroke();
    strokeWeight(1);

    line(origin_x, 0, origin_x, canvas.getHeight());
    drawArrow(canvas.getWidth(), origin_y, 10, 3, 'right');
    drawScales(10);
    
    line(0, origin_y, canvas.getWidth(), origin_y);
    drawArrow(origin_x, 0, 10, 3, 'up');
}

function drawArrow(x, y, length, size, direction = null) {
    switch (direction) {
        case 'up':
            direction = HALF_PI;
            break;
        case 'down':
            direction = -HALF_PI;
            break;
        case 'left':
            direction = -PI;
            break;
        case 'right':
            direction = PI;
            break;
        default:
            direction = 0;
    }

    push(); // push-pop pair will help to elimintate resetting the translate function
    translate(x, y);
    rotate(direction);
    line(0, 0, length - size, -size);
    line(0, 0, length - size, size);
    pop();
}

function drawScales(scale) {
    for (let i = 0; i < ((canvas.getWidth() / scale) / 2); i++) {
        line(
            origin_x + i * scale,
            origin_y - scale / 2,
            origin_x + i * scale,
            origin_y + scale / 2
        );
        line(
            origin_x - i * scale,
            origin_y - scale / 2,
            origin_x - i * scale,
            origin_y + scale / 2
        );
    }
    for (let i = 0; i < (((canvas.getHeight() - slider_space_height) / scale) / 2); i++) {
        line(
            origin_x + scale / 2,
            origin_y + i * scale,
            origin_x - scale / 2,
            origin_y + i * scale
        );
        line(
            origin_x + scale / 2,
            origin_y - i * scale,
            origin_x - scale / 2,
            origin_y - i * scale
        );
    }
}


function keyPressed() {
    if (keyCode === ENTER) {
        clearCanvas()
    }
}

function clearCanvas() {
    clear();
    background('#fff');
    stroke('#000');
}

function saveDrawing() {
    //saveCanvas(canvas.object, 'canvas_drawing_' + Date.now(), 'png');

    // Create a new off-screen canvas with the desired size (28x28 pixels)
    let resizedCanvas = createGraphics(28, 28);
    // Draw the original canvas onto the new off-screen canvas, rescaled
    resizedCanvas.image(canvas.object, 0, 0, resizedCanvas.width, resizedCanvas.height);
    // Save the resized canvas
    saveCanvas(resizedCanvas, 'canvas_drawing_resized_' + Date.now(), 'png');
}