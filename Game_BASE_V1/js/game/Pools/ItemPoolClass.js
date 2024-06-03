class ItemPoolClass extends AbstractPoolClass {

    static ITEM_AMMO = "item_ammo";
    static ITEM_FOOD = "item_food";

    items = [
        ItemPoolClass.ITEM_AMMO,
        ItemPoolClass.ITEM_FOOD
    ];
    ammo = [];
    food = [];

    constructor() {
        super();

        this.item_ammo_image_path = Settings.item_ammo_image_path;
        this.item_food_image_path = Settings.item_food_image_path;

        for (let i = 0; i < Settings.items_number; i++) {
            this.ammo.push(
                new ItemClass(
                    Helper.getRandomNumber(0, Canvas.getWidth()),
                    Helper.getRandomNumber(0, Canvas.getHeight()),
                    ItemPoolClass.ITEM_AMMO
                )
            );
            this.food.push(
                new ItemClass(
                    Helper.getRandomNumber(0, Canvas.getWidth()),
                    Helper.getRandomNumber(0, Canvas.getHeight()),
                    ItemPoolClass.ITEM_FOOD
                )
            );
        }
    }

    draw() {
        //TODO: Any chance we may use dynamic variabel names here?
        this.ammo.forEach((object) => object.draw());
        this.food.forEach((object) => object.draw());
    }

    move() {
        //TODO: Any chance we may use dynamic variabel names here?
        this.ammo.forEach((object) => this.moveObject(object));
        this.food.forEach((object) => this.moveObject(object));
    }

}