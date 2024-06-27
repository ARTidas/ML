class CharacterMissileClass extends GenesysClass {

    constructor(x, y, target_object) {
        super();

        this.x                  = x;
        this.y                  = y;
        this.width              = Settings.character_missile_width;
        this.height             = Settings.character_missile_height;
        this.speed              = Settings.character_missile_speed;

        this.target_x           = target_object.x;
        this.target_y           = target_object.y;
        this.movement_vector_x  = this.getIntersectMovementX(target_object);
        this.movement_vector_y  = this.getIntersectMovementY(target_object);
    }

    draw() {
        strokeWeight(Settings.character_missile_height);
        stroke('#000');
        point(this.x, this.y);
    }

    getIntersectMovementX(target_object) {
        return (
            (target_object.x - this.x) /
            (dist(target_object.x, target_object.y, this.x, this.y)) *
            (this.speed)
        );
    }

    getIntersectMovementY(target_object) {
        return (
            (target_object.y - this.y) /
            (dist(target_object.x, target_object.y, this.x, this.y)) *
            (this.speed)
        );
    }

}