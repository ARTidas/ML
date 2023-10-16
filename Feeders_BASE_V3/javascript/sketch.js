let canvas = new Canvas();
let graph_line = new GraphLine();

let data = [];
let points = [];
let line_slope = 0; // Slope
let line_y_intercept = 0; // Y-intercept

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getCanvasWidth(),
        canvas.getCanvasHeight()
    );

    createPoints();
    trainGradientDescent();
};

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');

    background('#888');
    //drawCanvasDiagonalLine();
    drawTrainedRegressionLine();
    drawDataPoints();
};

function createPoints() {
    generatePointsData(settings.number_of_data_points);
}

function generatePointsData(number_of_data_points) {
    for (let i = 0; i < number_of_data_points; i++) {
        /*data.push(
            createVector(
                random(canvas.getCanvasWidth()),
                random(canvas.getCanvasHeight())
            )
        );*/

        let random_x = getRandomNumberMinMax(0, canvas.getCanvasWidth());

        /*data.push(
            createVector(
                random_x,
                (random_x * canvas.diagonal_slope) + 
                    getRandomNumberMinMax(
                        -settings.fluctuation_from_canvas_diagonal,
                        settings.fluctuation_from_canvas_diagonal
                    )
            )
        );*/

        data.push(
            createVector(
                random_x,
                (canvas.getCanvasHeight() / 2) + 
                    getRandomNumberMinMax(
                        -settings.fluctuation_from_canvas_diagonal,
                        settings.fluctuation_from_canvas_diagonal
                    )
            )
        );
    }
}

function drawDataPoints() {
    fill('black');
    noStroke();
    for (const point of data) {
        ellipse(point.x, point.y, settings.candidate_width, settings.candidate_width);
    }
}

function getRandomNumberMinMax(minimum, maximum) {
    return Math.random() * (maximum - minimum) + minimum;
}

function trainGradientDescent() {
    for (let i = 0; i < settings.iterations; i++) {
        let slope_gradient = 0;
        let intercept_gradient = 0;
      
        //Calculate gradients for slope and intercept
        for (const point of data) {
          const predicted_y = line_slope * point.x + line_y_intercept;
          const error = predicted_y - point.y;
      
          //Partial derivatives of the loss function with respect to slope and intercept
          slope_gradient += 2 * error * point.x;
          intercept_gradient += 2 * error;
        }
      
        //Update the parameters using the gradients
        line_slope -= settings.learning_rate * (slope_gradient / data.length);
        line_y_intercept -= settings.learning_rate * (intercept_gradient / data.length);

        console.log('Trained slope: ' + line_slope + ', Intercept: ' + line_y_intercept);
    }
}

function drawCanvasDiagonalLine() {
    let x1 = canvas.x1;
    let y1 = canvas.y1;
    let x2 = canvas.getCanvasWidth();
    let y2 = canvas.getCanvasWidth() * canvas.diagonal_slope;

    stroke('red');
    strokeWeight(2);
    //console.log(x1 + " " + y1 + " " + x2 + " " + y2);
    line(x1, y1, x2, y2);
}

function drawTrainedRegressionLine() {
    let x1 = 0;
    let y1 = line_y_intercept;
    let x2 = canvas.getCanvasWidth();
    let y2 = line_slope + canvas.getCanvasWidth() + line_y_intercept;

    stroke('red');
    strokeWeight(2);
    //console.log(x1 + " " + y1 + " " + x2 + " " + y2);
    line(x1, y1, x2, y2);
}