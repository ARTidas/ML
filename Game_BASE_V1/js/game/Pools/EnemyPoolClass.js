class EnemyPoolClass extends AbstractPoolClass {

    static RAT = "enemy_rat";

    enemies = [
        EnemyPoolClass.RAT
    ];

    rats = [];

    closest_enemy_object   = null;
    closest_enemy_distance = Canvas.getWidth() * 10; //HACK! Setting distance to far away...

    constructor() {
        super();

        this.rat_image_path = Settings.enemy_rat_image_path;

        for (let i = 0; i < Settings.enemy_number; i++) {
            this.rats.push(
                new EnemyClass(
                    Helper.getRandomNumber(0, Canvas.getWidth()),
                    Helper.getRandomNumber(0, Canvas.getHeight()),
                    EnemyPoolClass.RAT
                )
            );
        }
    }

    draw() {
        //TODO: Any chance we may use dynamic variabel names here?
        this.rats.forEach((object) => object.draw());
    }

    move() {
        //TODO: Any chance we may use dynamic variabel names here?
        this.rats.forEach((object) => this.moveObject(object));
    }

    moveToIntersect() {
        this.closest_enemy_distance = Canvas.getWidth() * 10; //HACK! Setting distance to far away...
        this.rats.forEach((object) => this.moveObjectToIntersect(object));
    }

    moveObjectToIntersect(object) {
        object.x += this.getIntersectMovementX(object);
        object.y += this.getIntersectMovementY(object);
        //object.distance_from_character = this.computeDistance(object, self);
        object.distance_from_character = dist(
            Settings.character_x,
            Settings.character_y,
            object.x,
            object.y
        );

        if (object.distance_from_character < this.closest_enemy_distance) {
            this.closest_enemy_distance = object.distance_from_character;
            this.closest_enemy_object   = object;
        }
    }

    getIntersectMovementX(object) {
        //return (Math.sign(Settings.character_x - object.x) * object.speed);
        return (
            (Settings.character_x - object.x) /
            (dist(Settings.character_x, Settings.character_y, object.x, object.y)) *
            (object.speed)
        );
    }

    getIntersectMovementY(object) {
        //return (Math.sign(Settings.character_y - object.y) * object.speed);
        return (
            (Settings.character_y - object.y) /
            (dist(Settings.character_x, Settings.character_y, object.x, object.y)) * //TODO: Refactor to only compute dist once
            (object.speed)
        );
    }

    //TODO: Can the distance between object optimized on a very large scale?
    //TODO: Test if p5js dist() method or this method is more efficient
    /*computeDistance(object_1, object_2) {
        console.log(object_1.x + ';' + object_1.y + '--' + object_2.x + ';' + object_2.y);
        return (
            Math.sqrt(
                Math.pow(object_1.x - object_2.x) +
                Math.pow(object_1.y - object_2.y)
            )
        );
    }*/

}