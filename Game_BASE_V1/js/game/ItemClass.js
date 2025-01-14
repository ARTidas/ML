class ItemClass extends GenesysClass {

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
            case ItemPoolClass.ITEM_AMMO:
                image(
                    item_ammo_image,
                    this.x,
                    this.y,
                    this.width,
                    this.height
                );
                break;
            case ItemPoolClass.ITEM_FOOD:
                image(
                    item_food_image,
                    this.x,
                    this.y,
                    this.width,
                    this.height
                );
                break;
            default:
                console.error("Unknown item type encountered: " + this.type);
        }

    }

}