class Robot extends Genesys {
    constructor() {
        super();

        this.x = settings.robot_starting_position_x;
        this.y = settings.robot_starting_position_y;
        this.width = settings.robot_width;
        this.color = settings.robot_color;
    };
};