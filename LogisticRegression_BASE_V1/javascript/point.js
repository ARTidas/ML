class Point extends Genesys {
    constructor(x, y, width = 10, label = null) {
        super();

        this.x = x;
        this.y = y;
        this.width = width;
        this.label = label;
        this.color = 'black';
    }

    display() {
        let classification = this.classify();
        this.color = classification === 1 ? color('red') : color('blue');
        fill(this.color);
        this.object = circle(this.x, this.y, this.width);
    };

    classify() {
        let inputs = [this.x, this.y, 1];
        let prediction = this.sigmoid(this.dot(inputs, weights)); // Use dot product in sigmoid function
        console.log(prediction);
        return prediction > 0.5 ? 1 : -1;
    }

    sigmoid() {
        return 1 / (1 + Math.exp(-this.x));
    }
    
    dot(a, b) {
        let sum = 0;
        for (let i = 0; i < a.length; i++) {
            sum += a[i] * b[i];
        }

        return sum;
    }
}