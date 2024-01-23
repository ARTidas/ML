let canvas = new Canvas();

let slider_space_height = 40 * 2;
let stroke_weight_slider;

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    let shortest_canvas_side= min(
        canvas.getWidth(),
        canvas.getHeight() - slider_space_height
    )
    canvas.object = createCanvas(
        shortest_canvas_side,
        shortest_canvas_side
    );

    stroke_weight_slider = createSlider(0, 80, 30, 1); // Slider for adjusting angle
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

    strokeWeight(stroke_weight_slider.value());

    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }

    //noLoop();
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
    saveCanvas(canvas.object, 'canvas_drawing_' + Date.now(), 'png');
}