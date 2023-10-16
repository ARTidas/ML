let population;
let fitnessScores;
let populationSize = 20;
let numGenerations = 50;
let mutationRate = 0.2;

function setup() {
  createCanvas(400, 400);
  population = generatePopulation();
}

function draw() {
  background(220);
  drawPopulation();
  evolve();
}

function generatePopulation() {
  let population = [];
  for (let i = 0; i < populationSize; i++) {
    let params = [random(-10, 10), random(-10, 10)];
    population.push(params);
  }
  return population;
}

function drawPopulation() {
  for (let i = 0; i < populationSize; i++) {
    let x = map(population[i][0], -10, 10, 0, width);
    let y = map(population[i][1], -10, 10, height, 0);
    noStroke();
    fill(255, 0, 0);
    ellipse(x, y, 10, 10);
  }
}

function evolve() {
  fitnessScores = calculateFitness();
  let sortedPopulation = sortPopulation();
  let newPopulation = [];
  for (let i = 0; i < populationSize / 2; i++) {
    newPopulation.push(sortedPopulation[i]);
  }
  while (newPopulation.length < populationSize) {
    let parent1 = selectParent();
    let parent2 = selectParent();
    let child = crossover(parent1, parent2);
    mutate(child);
    newPopulation.push(child);
  }
  population = newPopulation;
}

function calculateFitness() {
  let scores = [];
  for (let i = 0; i < populationSize; i++) {
    let params = population[i];
    let score = abs(params[0] * 2 - params[1] * 3 + 4);
    scores.push(score);
  }
  return scores;
}

function sortPopulation() {
  let sortedPopulation = population.slice().sort((a, b) => fitnessScores[population.indexOf(a)] - fitnessScores[population.indexOf(b)]);
  return sortedPopulation;
}

function selectParent() {
  let r = random(1);
  let index = 0;
  while (r > 0) {
    r -= fitnessScores[index] / sum(fitnessScores);
    index++;
  }
  index--;
  return population[index];
}

function crossover(parent1, parent2) {
  let child = [];
  child[0] = (parent1[0] + parent2[0]) / 2;
  child[1] = (parent1[1] + parent2[1]) / 2;
  return child;
}

function mutate(child) {
  for (let i = 0; i < child.length; i++) {
    if (random(1) < mutationRate) {
      child[i] += randomGaussian(0, 1);
    }
  }
}

function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}