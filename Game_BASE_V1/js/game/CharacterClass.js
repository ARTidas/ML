class CharacterClass extends GenesysClass {

    constructor() {
        super();

        this.x          = Settings.character_x;
        this.y          = Settings.character_y;
        this.width      = Settings.character_width;
        this.height     = Settings.character_height;
        this.image_path = Settings.character_image_path;
        this.speed      = Settings.character_speed;
    }

    draw() {
        imageMode(CENTER);
        image(
            character_base_image,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

}