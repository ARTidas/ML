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

    getMovementX() {
        return (
            Math.sign(Settings.character_x - mouseX) * Character.speed
        );
    }

    getMovementY() {
        return (
            Math.sign(Settings.character_y - mouseY) * Character.speed
        );
    }

    moveToIntersect() {
        this.rats.forEach((object) => this.moveObjectToIntersect(object));
    }

    moveObjectToIntersect(object) {
        object.x += this.getIntersectMovementX(object);
        object.y += this.getIntersectMovementY(object);
    }

    getIntersectMovementX(object) {
        return (
            Math.sign(Settings.character_x - object.x) * object.speed
        );
    }

    getIntersectMovementY(object) {
        return (
            Math.sign(Settings.character_y - object.y) * object.speed
        );
    }

}