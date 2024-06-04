class EnemyPoolClass extends AbstractPoolClass {

    static RAT = "enemy_rat";

    enemies = [
        EnemyPoolClass.RAT
    ];

    rats = [];

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
        this.rats.forEach((object) => this.moveObjectToIntersect(object));
    }

    moveObjectToIntersect(object) {
        object.x += this.getIntersectMovementX(object);
        object.y += this.getIntersectMovementY(object);
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

}