const canvas = new Canvas();

let canvas_width_percentage = 0.75;
let canvas_scale_slider;
let editor;

const origin_x = (canvas.getWidth() * canvas_width_percentage) / 2;
const origin_y = canvas.getHeight() / 2;
let canvas_scale = 10;

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getWidth() * canvas_width_percentage,
        canvas.getHeight()
    );

    editor = document.getElementById('editor');

    canvas_scale_slider = createSlider(1, 70, 10, 1);
    canvas_scale_slider.size(canvas.getWidth() * (1 - canvas_width_percentage) - 80);
    canvas_scale_slider.position(60, 20);
    createP("Scale:").position(0, 0);
    canvas_scale_slider.input(clearCanvas);

    /*background('#fff');
    noFill();
    stroke('#000');
    drawCoordinateSystem();*/
}

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    //frameRate(20);
    //frameRate(10);
    frameRate(1);

    background('#fff');
    noFill();
    stroke('#000');
    drawCoordinateSystem();
    drawFunction();

    strokeWeight(10);
    stroke('#0f0');
    /*if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }*/

    //noLoop();
}

function drawFunction() {
    noFill();
    strokeWeight(1);
    stroke('#00f');

    try {
        const userLatexFunction = LatexFunctionHelper.latexCodeToFunctionWithScale(editor.value);
        beginShape();
        for (let x = -origin_x; x < origin_x; x++) {
            vertex(
                origin_x + x,
                origin_y - userLatexFunction(x, canvas_scale)
            );
        }
        endShape();
    }
    catch (Exception) {
        //
    }
}


function drawCoordinateSystem() {
    //noStroke();
    noFill();
    strokeWeight(1);

    drawcanvas_scales(canvas_scale);

    line(origin_x, 0, origin_x, canvas.getHeight());
    drawArrow(canvas.getWidth(), origin_y, canvas_scale, 3, 'right');
    
    line(0, origin_y, canvas.getWidth(), origin_y);
    drawArrow(origin_x, 0, canvas_scale, 3, 'up');

    textSize(canvas_scale * 1.5);
    fill('#000');
    strokeWeight(0);
    textAlign(CENTER, CENTER);
    text("X", canvas.getWidth() - canvas_scale, origin_y + canvas_scale);
    text("Y", origin_x - canvas_scale, canvas_scale);
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

function drawcanvas_scales(canvas_scale) {
    for (let i = 0; i < ((canvas.getWidth() / canvas_scale) / 2); i++) {
        if (i % 5 === 0 && i !== 0) {
            strokeWeight(2);
        }
        else {
            strokeWeight(1);
        }
        stroke('#ccc');
        line(
            origin_x + i * canvas_scale,
            0,
            origin_x + i * canvas_scale,
            canvas.getWidth()
        );
        line(
            origin_x - i * canvas_scale,
            0,
            origin_x - i * canvas_scale,
            canvas.getWidth()
        );
    }

    for (let i = 0; i < ((canvas.getWidth() / canvas_scale) / 2); i++) {
        if (i % 5 === 0 && i !== 0) {
            strokeWeight(2);
        }
        else {
            strokeWeight(1);
        }
        stroke('#ccc');
        line(
            0,
            origin_y + i * canvas_scale,
            canvas.getWidth(),
            origin_y + i * canvas_scale
        );
        line(
            0,
            origin_y - i * canvas_scale,
            canvas.getWidth(),
            origin_y - i * canvas_scale
        );
    }

    for (let i = 0; i < ((canvas.getWidth() / canvas_scale) / 2) - 1; i++) {
        if (i % 5 === 0 && i !== 0) {
            fill('#000');
            strokeWeight(0);
            stroke('#000');
            textSize(canvas_scale * 1.5);
            textAlign(CENTER, CENTER);
            text(i, origin_x + i * canvas_scale, origin_y + canvas_scale * 2);
            text(-i, origin_x - i * canvas_scale, origin_y + canvas_scale * 2);

            strokeWeight(1);
            line(
                origin_x + i * canvas_scale,
                origin_y - canvas_scale,
                origin_x + i * canvas_scale,
                origin_y + canvas_scale
            );
            line(
                origin_x - i * canvas_scale,
                origin_y - canvas_scale,
                origin_x - i * canvas_scale,
                origin_y + canvas_scale
            );
        }
        else {
            strokeWeight(1);
            stroke('#000');
            line(
                origin_x + i * canvas_scale,
                origin_y - canvas_scale / 2,
                origin_x + i * canvas_scale,
                origin_y + canvas_scale / 2
            );
            line(
                origin_x - i * canvas_scale,
                origin_y - canvas_scale / 2,
                origin_x - i * canvas_scale,
                origin_y + canvas_scale / 2
            );
        }
    }

    for (let i = 0; i < ((canvas.getHeight() / canvas_scale) / 2) - 1; i++) {
        if (i % 5 === 0 && i !== 0) {
            fill('#000');
            strokeWeight(0);
            stroke('#000');
            textSize(canvas_scale * 1.5);
            textAlign(CENTER, CENTER);
            text(i, origin_x - canvas_scale * 2, origin_y - i * canvas_scale);
            text(-i, origin_x - canvas_scale * 2, origin_y + i * canvas_scale);

            strokeWeight(1);
            line(
                origin_x + canvas_scale,
                origin_y + i * canvas_scale,
                origin_x - canvas_scale,
                origin_y + i * canvas_scale
            );
            line(
                origin_x + canvas_scale,
                origin_y - i * canvas_scale,
                origin_x - canvas_scale,
                origin_y - i * canvas_scale
            );
        }
        else {
            strokeWeight(1);
            stroke('#000');
            line(
                origin_x + canvas_scale / 2,
                origin_y + i * canvas_scale,
                origin_x - canvas_scale / 2,
                origin_y + i * canvas_scale
            );
            line(
                origin_x + canvas_scale / 2,
                origin_y - i * canvas_scale,
                origin_x - canvas_scale / 2,
                origin_y - i * canvas_scale
            );
        }
    }
}


/*function keyPressed() {
    if (keyCode === ENTER) {
        clearCanvas()
    }
}*/

function clearCanvas() {
    canvas_scale = canvas_scale_slider.value();
    clear();
    background('#fff');
    stroke('#000');
    drawCoordinateSystem();
}