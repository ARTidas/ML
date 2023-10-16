class Node extends Genesys {
    constructor(
        decision,
        child_nodes = [],
        is_root = false,
        width = 10
    ) {
        super();

        this.decision = decision;

        this.x = canvas.getCanvasWidth() / 2;
        this.y = settings.candidate_width * 3;
        this.width = width;
        this.color = '#000';

        this.child_nodes = child_nodes;
        this.is_root = is_root;
    }

    display() {
        fill(this.color);
        stroke(1);
        this.object = circle(this.x, this.y, this.width);

        if (this.is_root) {
            textAlign(CENTER, CENTER);
            text('START', this.x, this.y - this.width);
        }
        else {
            textAlign(CENTER, CENTER);
            text('START', this.x, this.y - this.width);
        }
        
    };

    drawChildTree() {
        this.display();

        for (let child_node in this.child_nodes) {
            
        }
    };

    addNode(node) {
        this.child_nodes.push(
            new Node(
                this.x + this.width * 2,
                this.y + this.width * 2
            )
        );
    };
}