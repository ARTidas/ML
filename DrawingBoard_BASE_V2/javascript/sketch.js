let canvas = new Canvas();

let slider_space_height = 40 * 2;
let stroke_weight_slider, scale_slider;

const origin_x = canvas.getWidth() / 2;
const origin_y = (canvas.getHeight() - slider_space_height) / 2;
let scale = 40;

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight() - slider_space_height
    );

    stroke_weight_slider = createSlider(0, 120, 10, 1);
    stroke_weight_slider.size(canvas.getWidth() - 20 - 400);
    stroke_weight_slider.position(200, canvas.getHeight() - slider_space_height + 20);
    createP("Stroke weight:").position(20, canvas.getHeight() - slider_space_height);

    scale_slider = createSlider(1, 70, 10, 1);
    scale_slider.size(canvas.getWidth() - 20 - 400);
    scale_slider.position(200, canvas.getHeight() - slider_space_height + 60);
    createP("Scale:").position(20, canvas.getHeight() - slider_space_height + 40);
    scale_slider.input(clearCanvas);

    background('#fff');
    strokeWeight(stroke_weight_slider.value());
    noFill();
    stroke('#000');
    drawCoordinateSystem();

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

    drawFunction();

    strokeWeight(stroke_weight_slider.value());
    stroke('#0f0');
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }

    //noLoop();
}


function drawFunction() {
    noFill();
    strokeWeight(1);
    stroke('#00f');
    beginShape();
    for (let x = -origin_x; x < origin_x; x += scale) {
        vertex(
            origin_x + x,
            origin_y - getValueForFunction(x)
        );
    }
    endShape();
}

function getValueForFunction(x) {
    //return (x);
    return (x - (5 * scale));
};

function drawCoordinateSystem() {
    //noStroke();
    noFill();
    strokeWeight(1);

    drawScales(scale);

    line(origin_x, 0, origin_x, canvas.getHeight());
    drawArrow(canvas.getWidth(), origin_y, scale, 3, 'right');
    
    line(0, origin_y, canvas.getWidth(), origin_y);
    drawArrow(origin_x, 0, scale, 3, 'up');

    textSize(scale * 1.5);
    fill('#000');
    strokeWeight(0);
    textAlign(CENTER, CENTER);
    text("X", canvas.getWidth() - scale, origin_y + scale);
    text("Y", origin_x - scale, scale);
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
        if (i % 5 === 0 && i !== 0) {
            strokeWeight(2);
        }
        else {
            strokeWeight(1);
        }
        stroke('#ccc');
        line(
            origin_x + i * scale,
            0,
            origin_x + i * scale,
            canvas.getWidth()
        );
        line(
            origin_x - i * scale,
            0,
            origin_x - i * scale,
            canvas.getWidth()
        );
    }

    for (let i = 0; i < ((canvas.getWidth() / scale) / 2); i++) {
        if (i % 5 === 0 && i !== 0) {
            strokeWeight(2);
        }
        else {
            strokeWeight(1);
        }
        stroke('#ccc');
        line(
            0,
            origin_y + i * scale,
            canvas.getWidth(),
            origin_y + i * scale
        );
        line(
            0,
            origin_y - i * scale,
            canvas.getWidth(),
            origin_y - i * scale
        );
    }

    for (let i = 0; i < ((canvas.getWidth() / scale) / 2) - 1; i++) {
        if (i % 5 === 0 && i !== 0) {
            fill('#000');
            strokeWeight(0);
            stroke('#000');
            textSize(scale * 1.5);
            textAlign(CENTER, CENTER);
            text(i, origin_x + i * scale, origin_y + scale * 2);
            text(-i, origin_x - i * scale, origin_y + scale * 2);

            strokeWeight(1);
            line(
                origin_x + i * scale,
                origin_y - scale,
                origin_x + i * scale,
                origin_y + scale
            );
            line(
                origin_x - i * scale,
                origin_y - scale,
                origin_x - i * scale,
                origin_y + scale
            );
        }
        else {
            strokeWeight(1);
            stroke('#000');
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
    }

    for (let i = 0; i < (((canvas.getHeight() - slider_space_height) / scale) / 2) - 1; i++) {
        if (i % 5 === 0 && i !== 0) {
            fill('#000');
            strokeWeight(0);
            stroke('#000');
            textSize(scale * 1.5);
            textAlign(CENTER, CENTER);
            text(i, origin_x - scale * 2, origin_y - i * scale);
            text(-i, origin_x - scale * 2, origin_y + i * scale);

            strokeWeight(1);
            line(
                origin_x + scale,
                origin_y + i * scale,
                origin_x - scale,
                origin_y + i * scale
            );
            line(
                origin_x + scale,
                origin_y - i * scale,
                origin_x - scale,
                origin_y - i * scale
            );
        }
        else {
            strokeWeight(1);
            stroke('#000');
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
}


function keyPressed() {
    if (keyCode === ENTER) {
        clearCanvas()
    }
}

function clearCanvas() {
    scale = scale_slider.value();
    clear();
    background('#fff');
    stroke('#000');
    drawCoordinateSystem();
}

function saveDrawing() {
    //saveCanvas(canvas.object, 'canvas_drawing_' + Date.now(), 'png');

    // Create a new off-screen canvas with the desired size (28x28 pixels)
    //let resizedCanvas = createGraphics(28, 28);
    let resizedCanvas = createGraphics(canvas.getWidth(), (canvas.getHeight() - slider_space_height));
    // Draw the original canvas onto the new off-screen canvas, rescaled
    resizedCanvas.image(canvas.object, 0, 0, resizedCanvas.width, resizedCanvas.height);
    // Save the resized canvas
    saveCanvas(resizedCanvas, 'canvas_drawing_resized_' + Date.now(), 'png');
}