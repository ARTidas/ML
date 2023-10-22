class Robot extends Genesys {
    constructor() {
        super();

        this.x = settings.robot_starting_position_x;
        this.y = settings.robot_starting_position_y;
        this.width = settings.robot_width;
        this.color = settings.robot_color;
    };

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
};