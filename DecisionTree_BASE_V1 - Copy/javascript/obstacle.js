class Obstacle extends Genesys {
    constructor(previous_x, previous_y, x, y, width = 10) {
        super();

        this.previous_x = previous_x;
        this.previous_y = previous_y;
        this.x = x;
        this.y = y;
        this.width = width;
        this.color = '#f00';
    }

    display() {
        fill(this.color);
        this.object = line(
            this.previous_x,
            this.previous_y,
            this.x,
            this.y
        );
    };
}