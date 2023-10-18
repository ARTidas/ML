class Genesys {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.speed = 1;
        this.color = '#000';

        this.object = null;

        this.fitness_score = null;

        this.is_dragged = false;
        this.is_dead = false;
    };

    getX() {
        return this.x;
    };
    getY() {
        return this.y;
    };

    display() {
        fill(this.color);
        this.object = circle(
            this.x,
            this.y,
            this.width
        );

        return this.object;
    };

    compareFitness(subject_object, target_object) {
        return subject_object.getFitnessScore() - target_object.getFitnessScore();
    };

    intersects(target_object) {
        return dist(this.x, this.y, target_object.x, target_object.y) < target_object.width;
    };

    moveTowardsObjectWithGradientDescent(target_object, acceleration = 0) {
        this.speed += acceleration;
        
        //Calculate the gradient descent step
        let distance_x = target_object.x - this.x;
        let distance_y = target_object.y - this.y;

        let distance = dist(this.x, this.y, target_object.x, target_object.y);
        distance_x /= distance;
        distance_y /= distance;
        distance_x *= this.speed;
        distance_y *= this.speed;

        // Update the position
        this.x += distance_x;
        this.y += distance_y;
    };

    getRandomNumber(minimum, maximum) {
        return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    };
};