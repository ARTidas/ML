class Target extends Genesys {
    constructor(x, y, width = 10) {
        super();

        this.x = x;
        this.y = y;
        this.width = width;
        this.color = '#000';
    }

    display() {
        fill(this.color);
        this.object = circle(this.x, this.y, this.width);
    };
}