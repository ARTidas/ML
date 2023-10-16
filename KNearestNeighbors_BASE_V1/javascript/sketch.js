let trainingData = [];
let k = 3; // Number of nearest neighbors to consider

function setup() {
  createCanvas(400, 400);
  generateTrainingData(50, width, height);
  noLoop();
}

function draw() {
  background(220);
  drawTrainingData();

  let point = createVector(mouseX, mouseY);
  let nearestNeighbors = findNearestNeighbors(point, trainingData, k);

  fill(255, 0, 0);
  ellipse(point.x, point.y, 16, 16);

  noFill();
  stroke(0);
  for (let neighbor of nearestNeighbors) {
    ellipse(neighbor.x, neighbor.y, 16, 16);
  }
}

function generateTrainingData(numPoints, maxX, maxY) {
  for (let i = 0; i < numPoints; i++) {
    let x = random(maxX);
    let y = random(maxY);
    let label = random() > 0.5 ? 1 : -1;
    trainingData.push({ x, y, label });
  }
}

function drawTrainingData() {
  for (let point of trainingData) {
    if (point.label === 1) {
      fill(0, 0, 255);
    } else {
      fill(255, 0, 0);
    }
    ellipse(point.x, point.y, 8, 8);
  }
}

function findNearestNeighbors(point, data, k) {
  data.sort((a, b) => dist(point.x, point.y, a.x, a.y) - dist(point.x, point.y, b.x, b.y));
  return data.slice(0, k);
}