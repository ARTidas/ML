class Target extends Genesys {
    constructor(x, y, width = settings.target_width) {
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