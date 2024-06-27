class EnemyClass extends GenesysClass {

    constructor(x, y, type) {
        super();

        this.x                          = x;
        this.y                          = y;
        this.width                      = Settings.enemy_width;
        this.height                     = Settings.enemy_height;
        this.speed                      = Settings.enemy_speed;
        this.health                     = Settings.enemy_health;

        this.type                       = type;

        this.distance_from_character    = 0;
    }

    draw() {
        imageMode(CENTER);
        //TODO: Can we do something refactoring to a factory method?
        switch (this.type) {
            case EnemyPoolClass.RAT:
                image(
                    enemy_rat_image,
                    this.x,
                    this.y,
                    this.width,
                    this.height
                );
                break;
            default:
                console.error("Unknown enemy type encountered: " + this.type);
        }

        this.drawHealthBar();
    }

    drawHealthBar() {
        stroke('#f00');
        strokeWeight(5);
        line(
            (this.x - this.width / 2),
            (this.y + this.height / 2),
            (this.x + this.width / 2),
            (this.y + this.height / 2)
        );
    }

}