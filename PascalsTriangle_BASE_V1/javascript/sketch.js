let canvas = new Canvas();

let slider_space_height = 40;
let depth_slider;

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight() - slider_space_height
    );

    depth_slider = createSlider(1, 40, 1, 1);
    depth_slider.size(canvas.getWidth() - 20 - 200);
    depth_slider.position(200, canvas.getHeight() - slider_space_height + 20);
    createP("Levels:").position(20, canvas.getHeight() - slider_space_height);
}

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    frameRate(10);
    background('#ddd');

    displayPascalsTriangle(depth_slider.value());

    //noLoop();
}


function displayPascalsTriangle(levels) {
    // Set initial values for the first row
    let pascal_array = [[1]];

    // Generate Pascal's Triangle
    for (let i = 1; i < levels; i++) {
        let current_level = [1];

        for (let j = 1; j < i; j++) {
            // Calculate the current element based on the sum of the two elements above
            current_level.push(
                pascal_array[i - 1][j - 1] + 
                (pascal_array[i - 1][j] || 0)
            );
        }

        current_level.push(1); // Add the last element of the row
        pascal_array.push(current_level);
    }

    // Display Pascal's Triangle on the canvas
    let start_x = canvas.getWidth() / 2;

    for (let i = 0; i < pascal_array.length; i++) {
        let level = pascal_array[i];
        let width_offset = 50;
        let height_offset = 20;
        let x_offset = (canvas.getWidth() / 2) - (level.length / 2) * width_offset;

        for (let j = 0; j < level.length; j++) {
            fill(0);
            textAlign(CENTER, CENTER);
            textSize(10);
            text(
                level[j],
                x_offset + j * width_offset,
                height_offset + i * height_offset
            );
        }
    }
}