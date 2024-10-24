let canvas = new Canvas();

// Project variables
let nodes = [];
let radius = 10;
let edgeDistances = [];
let slider;
let totalNodes = 3; // Initial number of nodes
let foundPath = false;
let path = [];
let pathGreedy = [];
let pathDistance = null;
let bufferZone = 50;
let draggingNode = null; // Track the currently dragged node

/*********************************************************************
 *** MAIN ENTRY FUNCTION *********************************************
 *********************************************************************/
function setup() {
    frameRate(10);

    canvas.object = createCanvas(
        canvas.getInnerWidth(),
        canvas.getInnerHeight()
    );

    // Create slider for node count (3 to 10 nodes)
    slider = createSlider(3, 12, totalNodes);
    slider.position(10, 10);
    slider.style('width', canvas.getInnerWidth() + 'px');

    generateGraph(); // Generate nodes based on the initial totalNodes value
    findPath(); // Try to find a path
    findGreedyPath();
}

/*********************************************************************
 *** MAIN LOOPING FUNCTION *******************************************
 *********************************************************************/
function draw() {
    background(255);

    // Check if totalNodes has changed due to slider
    let newTotalNodes = slider.value();
    if (newTotalNodes !== totalNodes) {
        totalNodes = newTotalNodes;
        generateGraph();  // Regenerate graph when node count changes
        findPath(); // Try to find a path
        findGreedyPath();
    }

    drawGraph();
    //connectAllNodes();

    if (foundPath) {
        drawPath('BruteForce', path, {red:255, green:0, blue:0}, 6, {x:10, y:20})
        drawPath('Greedy', pathGreedy, {red:0, green:255, blue:0}, 4, {x:10, y:40})
    }
}

/*********************************************************************
 *** MOUSE EVENT FUNCTION ********************************************
 *********************************************************************/
// Mouse press event to start dragging
function mousePressed() {
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        let d = dist(mouseX, mouseY, node.x, node.y);
        if (d < radius) {
            draggingNode = node; // Start dragging this node
            break;
        }
    }
}
/*********************************************************************
 *** MOUSE EVENT FUNCTION ********************************************
 *********************************************************************/
// Mouse release event to stop dragging
function mouseReleased() {
    draggingNode = null; // Stop dragging
    findPath(); // Try to find a path
    findGreedyPath();
}

// Update dragged node's position
function mouseDragged() {
    if (draggingNode) {
        draggingNode.x = constrain(mouseX, bufferZone, width - bufferZone);
        draggingNode.y = constrain(mouseY, bufferZone, height - bufferZone);
    }
}

// Function to generate random graph nodes
function generateGraph() {
    nodes = [];  // Clear nodes
    for (let i = 0; i < totalNodes; i++) {
        addRandomNode();
    }
    foundPath = false;  // Reset path finding
    path = [];
    pathDistance = null; // Reset path distance
}

function addRandomNode() {
    let x = random(bufferZone, width - bufferZone);
    let y = random(bufferZone, height - bufferZone);
    //let id = nodes.length + 1;
    let id = String.fromCharCode(nodes.length + 65);
    nodes.push({ x, y, id});
}

// Draw nodes of the graph
function drawGraph() {
    fill(0);
    stroke(0);
    for (let i = 0; i < nodes.length; i++) {
        ellipse(nodes[i].x, nodes[i].y, radius * 2, radius * 2);
        textAlign(CENTER, CENTER);
        fill(255);
        text(nodes[i].id, nodes[i].x, nodes[i].y); // Label the nodes
        fill(0);
    }
}

// Connect every node with every other node and display distances
function connectAllNodes() {
    stroke(0, 0, 255);
    strokeWeight(2);
    noFill();

    edgeDistances = []; // Reset the distances array

    for (let i = 0; i < nodes.length - 1; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            let node1 = nodes[i];
            let node2 = nodes[j];

            // Calculate the points on the edge of the ellipses
            let startPoint = getEdgePoint(node1, node2);
            let endPoint = getEdgePoint(node2, node1);

            // Calculate distance between the two nodes
            let distance = dist(node1.x, node1.y, node2.x, node2.y);
            edgeDistances.push({ from: i, to: j, distance });

            // Draw the connecting line
            line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);

            // Calculate mid-point for placing the distance label
            let midX = (startPoint.x + endPoint.x) / 2;
            let midY = (startPoint.y + endPoint.y) / 2;

            // Display the distance on the line
            fill(0);
            noStroke();
            textAlign(CENTER, CENTER);
            text(nf(distance, 1, 2), midX, midY); // Print the distance with 2 decimal places
            stroke(0, 0, 255);
        }
    }
}

function connectNodes(node1, node2) {
    // Calculate the points on the edge of the ellipses
    let startPoint = getEdgePoint(node1, node2);
    let endPoint = getEdgePoint(node2, node1);

    // Calculate distance between the two nodes
    let distance = dist(node1.x, node1.y, node2.x, node2.y);

    // Calculate mid-point for placing the distance label
    let midX = (startPoint.x + endPoint.x) / 2;
    let midY = (startPoint.y + endPoint.y) / 2;

    // Display the distance on the line
    fill(0);
    strokeWeight(1);
    stroke(0, 0, 0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(nf(distance, 1, 2), midX, midY); // Print the distance with 2 decimal places
}

// Function to calculate the point on the edge of the ellipse
function getEdgePoint(node1, node2) {
    let angle = atan2(node2.y - node1.y, node2.x - node1.x);
    let edgeX = node1.x + cos(angle) * radius;
    let edgeY = node1.y + sin(angle) * radius;

    return {
        x: edgeX,
        y: edgeY
    };
}

// Brute-force function to find path
/*function findPath() {
    let allPermutations = permute([...Array(totalNodes).keys()]);  // Get all permutations of node indices
    let shortestDistance = Infinity; // Initialize with a large value

    for (let i = 0; i < allPermutations.length; i++) {
        let currentPath = allPermutations[i];
        let currentDistance = calculatePathDistance(currentPath); // Calculate the distance of the current path

        // If the current path distance is shorter, update the shortest path
        if (currentDistance < shortestDistance) {
            shortestDistance = currentDistance;
            path = currentPath; // Update the path to the current one
            pathDistance = currentDistance; // Store the distance of this path
        }
    }

    foundPath = true; // Mark the path as found
}*/
// Brute-force function to find path with a fixed starting node
function findPath() {
    let fixedStartNode = 0;  // Node 1 (index 0 in the array) is the fixed starting node

    // Get permutations of the remaining nodes
    let remainingNodes = [...Array(totalNodes).keys()].slice(1); // Skip the starting node
    let allPermutations = permute(remainingNodes);  // Get all permutations of remaining nodes

    let shortestDistance = Infinity; // Initialize with a large value

    // Loop through all permutations and calculate distances
    for (let i = 0; i < allPermutations.length; i++) {
        let currentPath = [fixedStartNode, ...allPermutations[i]];  // Prepend the fixed starting node
        let currentDistance = calculatePathDistance(currentPath);  // Calculate the distance of the current path

        // If the current path distance is shorter, update the shortest path
        if (currentDistance < shortestDistance) {
            shortestDistance = currentDistance;
            path = currentPath; // Update the path to the current one
            pathDistance = currentDistance; // Store the distance of this path
        }
    }

    // After evaluating all permutations, mark the path as found
    foundPath = true;
}

// Calculate the total distance of a given path
function calculatePathDistance(path) {
    let totalDistance = 0;
    for (let i = 0; i < path.length - 1; i++) {
        let node1 = nodes[path[i]];
        let node2 = nodes[path[i + 1]];
        totalDistance += dist(node1.x, node1.y, node2.x, node2.y);
    }
    return totalDistance;
}


// Draw the shortest path
function drawPath(pathType, path, color, width, textPosition) {
    let pathNodeOrder = nodes[0].id;
    for (let i = 0; i < path.length - 1; i++) {
        let startNode = nodes[path[i]];
        let endNode = nodes[path[i + 1]];
        pathNodeOrder += nodes[path[i + 1]].id;

        // Draw from edge to edge using the getEdgePoint function
        let startPoint = getEdgePoint(startNode, endNode);
        let endPoint = getEdgePoint(endNode, startNode);

        stroke(color.red, color.green, color.blue);
        strokeWeight(width);
        line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);

        connectNodes(startNode, endNode);
    }

    // Display the total path distance
    fill(0);
    strokeWeight(1);
    stroke(color.red, color.green, color.blue);
    textSize(12);
    textAlign(LEFT, TOP);
    text(
        `${pathType}, path distance: ${nf(calculatePathDistance(path), 1, 2)}, path node order: ${pathNodeOrder}`,
        textPosition.x,
        textPosition.y
    );
}

// Function to generate all permutations of an array (Brute force)
function permute(arr) {
    if (arr.length === 0) return [[]];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let rest = permute(arr.slice(0, i).concat(arr.slice(i + 1)));
        for (let j = 0; j < rest.length; j++) {
            result.push([arr[i]].concat(rest[j]));
        }
    }

    return result;
}




/*********************************************************************
 *** GREEDY **********************************************************
 *********************************************************************/
 function findGreedyPath() {
    let unvisitedNodes = [...Array(totalNodes).keys()];  // List of all node indices
    let currentNode = unvisitedNodes[0];  // Start at the first node
    pathGreedy = [currentNode];  // Initialize the path with the starting node
    unvisitedNodes.splice(0, 1);  // Remove the starting node from unvisited

    let totalDistance = 0;  // Track total path distance

    // Visit each node, always selecting the nearest unvisited node
    while (unvisitedNodes.length > 0) {
        let nearestNode = null;
        let shortestDistance = Infinity;

        // Find the nearest unvisited node
        for (let i = 0; i < unvisitedNodes.length; i++) {
            let nextNode = unvisitedNodes[i];
            let distance = dist(nodes[currentNode].x, nodes[currentNode].y, nodes[nextNode].x, nodes[nextNode].y);

            if (distance < shortestDistance) {
                shortestDistance = distance;
                nearestNode = nextNode;
            }
        }

        // Add the nearest node to the path
        pathGreedy.push(nearestNode);
        totalDistance += shortestDistance;  // Add the distance to the total

        // Mark this node as visited
        currentNode = nearestNode;
        unvisitedNodes.splice(unvisitedNodes.indexOf(nearestNode), 1);
    }

    pathDistance = totalDistance;  // Store the total distance
    foundPath = true;  // Mark the path as found
}