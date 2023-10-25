class Robot extends Genesys {
    constructor(parent_1 = null, parent_2 = null) {
        super();

        this.x = settings.robot_starting_position_x;
        this.y = settings.robot_starting_position_y;
        this.width = settings.robot_width;
        this.color = settings.robot_color;

        this.x_movement = 0;
        this.y_movement = 0;

        if (
            parent_1 !== null && parent_1 !== undefined && 
            parent_2 !== null && parent_2 !== undefined
        ) {
            this.x_movement = randomGaussian(
                (parent_1.x_movement + parent_2.x_movement) / 2,
                standard_deviation
            );
            this.y_movement = randomGaussian(
                (parent_1.y_movement + parent_2.y_movement) / 2,
                standard_deviation
            );
        }
        else {
            this.x_movement = random(-settings.robot_movement_max, settings.robot_movement_max);
            this.y_movement = random(-settings.robot_movement_max, settings.robot_movement_max);
        }

        //console.log(this.x_movement, this.y_movement);
    };

    move() {
        //console.log(this.x_movement, this.y_movement);
        this.x += this.x_movement;
        this.y += this.y_movement;

        this.x = (this.x < 0 ? 0 : this.x);
        this.y = (this.y < 0 ? 0 : this.y);
        this.x = (this.x > canvas.getWidth() ? canvas.getWidth() - this.width : this.x);
        this.y = (this.y > canvas.getHeight() ? canvas.getHeight() - this.width : this.y);
    }

    findNearestNeighbors(targets, k = settings.knn_k) {
        return (
            targets.sort(
                (a, b) => (
                    dist(this.x, this.y, a.x, a.y) - dist(this.x, this.y, b.x, b.y)
                )
            )
                .slice(0, k)
        );
    }

    getFitnessScore(targets) {
        let target = this.findNearestNeighbors(targets, 1)[0];

        return dist(this.x, this.y, target.x, target.y);
    }
};