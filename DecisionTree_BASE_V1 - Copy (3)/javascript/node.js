class Node extends Genesys {
    constructor(
        decision_function = null, //Hmm... TODO: Figure out a root node identification logic
        left = null, //TRUE
        right = null //FALSE
    ) {
        super();

        this.decision_function = decision_function;
        this.left = left;
        this.right = right;

        this.width = 10;
        this.color = '#000';
        this.x = canvas.getCanvasWidth() / 2;
        //this.y = 0 + this.width * 3;
        this.x_direction = 1;
        this.speed = 1;

        // Calculate the depths of left and right subtrees
        const left_depth = this.getNodeLevel(this.left);
        const right_depth = this.getNodeLevel(this.right);
        this.x_offset = (canvas.getCanvasWidth() / (left_depth + right_depth + 1)) * this.x_direction;
        this.y_offset = canvas.getCanvasHeight() / (left_depth + right_depth + 1);

        this.y = 0 + this.width * 3 + (this.y_offset * (left_depth - right_depth));
    };

    traverseContextObject(node, context_object, x_direction) {
        if (
            node === null ||
            (node.left === null && node.right === null)
        ) {
            return;
        }

        node.drawNode(x_direction);

        if (node.decide(context_object)) { //console.log(true);
            this.traverseContextObject(node.left, context_object, -1)
        }
        else { //console.log(false);
            this.traverseContextObject(node.right, context_object, 1)
        }
    }

    decide(context_object) {
        return this.decision_function(context_object);
    };

    drawNode(x_direction) {
        console.log(this.getHumanReadableContextFunctionName(this.decision_function.toString()));
        stroke(0);
        textSize(18);
        textAlign(CENTER, CENTER);
        text(
            this.getHumanReadableContextFunctionName(this.decision_function.toString()),
            this.x,
            this.y
        );
        /*textAlign(LEFT, CENTER);
        text('TRUE', this.x - this.x_offset * x_direction, this.y + this.y_offset);
        textAlign(RIGHT, CENTER);
        text('FALSE', this.x + this.x_offset * x_direction, this.y + this.y_offset);*/
    };

    getHumanReadableContextFunctionName(input) {
        return input.replace(/\(obj\) => obj\['(.+?)'\] === '(.+?)'|\(obj\) => obj\['(.+?)'\] > (\d+)/, (match, key1, value1, key2, value2) => {
            if (key1 !== undefined) {
                return `is '${key1}' = '${value1}'?`;
            } else {
                return `is '${key2}' > ${value2}?`;
            }
        });
    }

    getNodeLevel(node) {
        if (node === null) {
            return 0;
        }

        return Math.max(
            this.getNodeLevel(node.left),
            this.getNodeLevel(node.right)
        ) + 1;
    }
}