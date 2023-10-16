let canvas = new Canvas();

const settings = {
    //Base simulation setup
    candidate_width: 10,
};

//https://dev.to/dstrekelj/how-to-create-a-binary-decision-tree-in-javascript-330g
const decision = (conditionFunction, trueOutcome, falseOutcome) => 
    (context) => conditionFunction(context) ? trueOutcome : falseOutcome;
const decide = (context, decision) => {
    const outcome = decision(context);

    return typeof outcome === "function" ? decide(context, outcome) : outcome;
};

const is_red = color => color === '#f00';
const is_blue = color => color === '#00f';
const is_large = width => width > 10;
const is_cirlce = shape => shape === 'cirlce';
const is_triangle = shape => shape === 'triangle';
const is_rect = shape => shape === 'rect';

const decision_tree =
    decision(
        is_red,
        decision( // RED
            is_large,
            'is_large',
            decision( // NOT LARGE
                is_cirlce,
                'is_circle',
                decision( // NOT CIRCLE
                    is_triangle,
                    'is_triangle',
                    decision( // NOT TRIANGLE
                        is_rect,
                        'is_rectangle',
                        '??? - RED, NOT_LARGE, NOT_CIRCLE, NOT_TRIANGLE, NOT_RECT'
                    )
                )
            )
        ),
        decision( // NOT RED
            is_large,
            'is_large',
            decision(
                is_cirlce,
                'is_circle',
                decision(
                    is_triangle,
                    'is_triangle',
                    decision(
                        is_rect,
                        'is_rectangle',
                        '??? - NOT_RED, NOT_LARGE, NOT_CIRCLE, NOT_TRIANGLE, NOT_RECT'
                    )
                )
            )
        )
    )
;

const contextValues = ['#f00', '#000', 'red', 'black', '#ff0000', '#000000'];

let root_node = new Node(
    is_red,
    [
        new Node(
            is_large,
            [
                new Node(
                    is_cirlce,
                    [
                        new Node(
                            is_triangle,
                            [
                                is_rect
                            ]
                        )
                    ]
                )
            ]
        )
    ],
    true
);

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getCanvasWidth(),
        canvas.getCanvasHeight()
    );

    for (const value of contextValues) {
        console.log(value, decide(value, decision_tree));
    }
};

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    //console.log(weights);
    //frameRate(10);
    background('#888');

    drawDecisionTree();
};

/** ********************************************************************
 ** *** MOUSE HANDLING AND DRAGGING ************************************
 ** ********************************************************************/
function mousePressed() {
    /*var mouse_pressed_on_empty_space = true;

    for (let ball of balls) {
        if (dist(ball.x, ball.y, mouseX, mouseY) < ball.width) {
            ball.is_dragged = true;
            mouse_pressed_on_empty_space = false;
        }
    }
    
    if (mouse_pressed_on_empty_space && mouseButton === LEFT) {
        balls.push(
            new Ball(
                mouseX,
                mouseY,
                settings.candidate_width
            )
        );
    }*/
};
function mouseReleased() {
    /*for (let ball of balls) {
        ball.is_dragged = false;
    }*/
};

function drawDecisionTree() {
    root_node.drawChildTree();
};

/*function drawDecisionTree() {
    let node_width = 20;
    let number_of_decisions = 6;
    let decision_level_height = canvas.getCanvasHeight() / number_of_decisions;
    let decision_level_width = canvas.getCanvasWidth() / number_of_decisions;
    let x = canvas.getCanvasWidth() / 2;
    let y = decision_level_height;

    fill('black');
    stroke(1);
    textAlign(CENTER, CENTER);

    circle(x, y, 20);
    text('START', x, y - node_width);

    line(x, y, x, y + decision_level_height);
    text('IS_RED', x, y + decision_level_height / 2);


    circle(x, y + decision_level_height, node_width);
    textAlign(RIGHT, CENTER);
    text('YES', x - node_width, y + decision_level_height);
    textAlign(LEFT, CENTER);
    text('NO', x + node_width, y + decision_level_height);

    line(x, y + decision_level_height, x + decision_level_width, y + decision_level_height * 2);
    textAlign(CENTER, CENTER);
    text('IS_LARGE', x + decision_level_width, y + decision_level_height * 2 - decision_level_height / 4);

    circle(x + decision_level_width, y + decision_level_height * 2, node_width);

    line(x, y + decision_level_height, x - decision_level_width, y + decision_level_height * 2);
    circle(x - decision_level_width, y + decision_level_height * 2, node_width);
};*/
