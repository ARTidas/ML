let canvas = new Canvas();

let values = [];
let states = [];
let sleep_per_swap = 25; //milisec


/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
  canvas.object = createCanvas(
    canvas.getWidth() * 0.95,
    canvas.getHeight() * 0.95
  );

  values = new Array(parseInt(canvas.getWidth() / 5));

  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    states[i] = -1; // -1 for default state, 0 for active, 1 for complete
  }

  quicksort(values, 0, values.length - 1);
}

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
  frameRate((1000 / sleep_per_swap) * 2);
  background(0);
  for (let i = 0; i < values.length; i++) {
    //stroke(255);
    fill(255, 255, 255);
    if (states[i] == 0) {
      fill(0, 255, 0); // Green for pivot element
    } else if (states[i] == 1) {
      fill(255, 0, 0); // Red for sorted element
    } else {
      fill(255);
    }
    rect(i * (width / values.length), height - values[i], width / values.length, values[i]);
  }
}


async function quicksort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let index = await partition(arr, start, end);
  states[index] = 1;
  
  await Promise.all([
    quicksort(arr, start, index - 1),
    quicksort(arr, index + 1, end)
  ]);
}

async function partition(arr, start, end) {
  for (let i = start; i < end; i++) {
    states[i] = 0;
  }

  let pivotValue = arr[end];
  let pivotIndex = start;
  states[pivotIndex] = 0;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  await swap(arr, pivotIndex, end);
  for (let i = start; i <= end; i++) {
    if (i != pivotIndex) {
      states[i] = -1;
    }
  }

  return pivotIndex;
}

async function swap(arr, a, b) {
  await sleep(sleep_per_swap); // Delay to visualize the swap
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
