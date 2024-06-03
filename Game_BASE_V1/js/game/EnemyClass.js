class EnemyClass extends GenesysClass {

    constructor(x, y, type) {
        super();

        this.x          = x;
        this.y          = y;
        this.width      = Settings.item_width;
        this.height     = Settings.item_height;
        this.type       = type;
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

    }

}