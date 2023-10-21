class Target extends Genesys {
    constructor(x, y, width = 20) {
        super();

        this.x = x;
        this.y = y;
        this.width = width;
        this.color = 'red';
    }

    display() {
        fill(this.color);
        this.object = circle(this.x, this.y, this.width);
    };
}