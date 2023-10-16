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
    frameRate(1);
    background('#888');

    for (const context_object of context_objects) {
        node_tree.traverseContextObject(node_tree, context_object, 0);
    }

    noLoop();
};