class Ball extends Genesys {
    constructor(x, y, width = 10, speed = 1) {
        super();

        this.x = x;
        this.y = y;
        this.width = width;
        this.color = '#f00';

        this.speed = speed;
        this.acceleration = 0.1;
        this.x_direction = 1;
        this.y_direction = 1;
    }

    display() {
        fill(this.color);
        this.object = circle(this.x, this.y, this.width);
    };

    intersects(target_object) {
        console.log(dist(this.x, this.y, target_object.x, target_object.y));
        return dist(this.x, this.y, target_object.x, target_object.y) < (this.width);
    }
}