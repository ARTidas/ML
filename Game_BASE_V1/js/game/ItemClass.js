class ItemClass extends GenesysClass {

    constructor(x, y, type) {
        super();
        
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.type = type;
    }

    draw() {
        //console.log(this.x + " " + this.y);
        image(
            item_ammo_image,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

}