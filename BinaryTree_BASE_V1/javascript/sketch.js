let canvas = new Canvas();
let tree;

function setup() {
  canvas.object = createCanvas(
    canvas.getCanvasWidth(),
    canvas.getCanvasHeight()
  );

  let values = [8, 3, 10, 1, 6, 14, 4, 7, 13];
  tree = new BinaryTree();
  for (let value of values) {
    tree.addNode(value);
  }
  background(220);
  tree.display(canvas.getCanvasWidth() / 2, 50, tree.root);
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addNode(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insert(this.root, newNode);
    }
  }

  insert(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insert(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insert(node.right, newNode);
      }
    }
  }

  display(x, y, node) {
    if (node != null) {
      let xOffset = canvas.getCanvasWidth() / (pow(2, nodeLevel(node))) / 2;
      fill(255);
      noStroke();
      ellipse(x, y, 40, 40);
      fill(0);
      textAlign(CENTER);
      textSize(20);
      text(node.value, x, y + 7);
      if (node.left != null) {
        stroke(0);
        line(x, y, x - xOffset * 2, y + 80);
      }
      if (node.right != null) {
        stroke(0);
        line(x, y, x + xOffset * 2, y + 80);
      }
      this.display(x - xOffset, y + 80, node.left);
      this.display(x + xOffset, y + 80, node.right);
    }
  }
}

function nodeLevel(node) {
  if (node === null) {
    return 0;
  }
  let leftLevel = nodeLevel(node.left);
  let rightLevel = nodeLevel(node.right);
  return max(leftLevel, rightLevel) + 1;
}