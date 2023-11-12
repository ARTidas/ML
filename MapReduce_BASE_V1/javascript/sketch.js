let canvas = new Canvas();
// Sample input data
const input_data = [
    { key: 'A', value: 1 },
    { key: 'B', value: 2 },
    { key: 'A', value: 3 },
    { key: 'B', value: 4 },
    { key: 'C', value: 5 },
];

// Map function
const mapFunction = function (data) {
    const mappedResults = [];
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        // Emit key-value pairs
        mappedResults.push({ key: item.key, value: item.value });
    }
    return mappedResults;
};

// Reduce function
const reduceFunction = function (key, values) {
    // Sum values for each key
    return values.reduce((acc, curr) => acc + curr, 0);
};

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    canvas.object = createCanvas(
        canvas.getWidth(),
        canvas.getHeight()
    );

    noLoop();
};

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    console.log('Next cycle...');
    //frameRate(10);
    background('#ddd');

    // Map step
    const mappedData = mapFunction(input_data);

    // Group data by key for the reduce step
    const groupedData = {};
    mappedData.forEach((item) => {
        if (!groupedData[item.key]) {
            groupedData[item.key] = [];
        }
        groupedData[item.key].push(item.value);
    });

    // Reduce step
    const reducedResults = [];
    for (const key in groupedData) {
        if (groupedData.hasOwnProperty(key)) {
            const result = reduceFunction(key, groupedData[key]);
            reducedResults.push({ key, value: result });
        }
    }

    drawCircles(input_data, 'Input Data', 100);
    drawArrows(200);
    drawCircles(mappedData, 'Mapped Data', 300);
    drawArrows(400);
    drawCircles(reducedResults, 'Reduced Data', 500); 
}



function drawCircles(data, title, y) {
    textSize(18);
    textAlign(CENTER, CENTER);
    text(title, canvas.getWidth() / 2, y - 30);

    for (let i = 0; i < data.length; i++) {
        const x = map(i, 0, data.length - 1, 50, canvas.getWidth() - 50);
        const circleSize = map(data[i].value, 1, 5, 20, 60);
        fill(0, 150, 255);
        ellipse(x, y, circleSize, circleSize);
        fill(0);
        text(data[i].key + ': ' + data[i].value, x, y + 20);
    }
}

function drawArrows(y) {
    stroke(0);
    strokeWeight(2);

    for (let i = 0; i < 3; i++) {
        const startX = map(i, 0, 2, 50, canvas.getWidth() - 50);
        const endX = map(i + 1, 0, 2, 50, canvas.getWidth() - 50);
        const midY = y;
        line(startX, midY, endX, midY);
        drawArrow(endX, midY, PI);
    }
}

function drawArrow(x, y, direction) {
    push();
    translate(x, y);
    rotate(direction);

    // Draw vertical arrow
    line(0, 0, 0, -10);
    line(0, -10, -5, -5);
    line(0, -10, 5, -5);

    pop();
}