class SettingsClass {

    constructor() {
        /** ********************************************************************
         ** *** CANVAS *********************************************************
         ** ********************************************************************/
        this.canvas_frame_rate          = 21;
        this.canvas_background_color    = '#ddd';
        this.canvas_spawn_zone          = 100; //Pixel

        /** ********************************************************************
         ** *** GUI ************************************************************
         ** ********************************************************************/
        this.gui_x = 0;
        this.gui_y = 0;
        this.gui_text_size = 20;

        /** ********************************************************************
         ** *** CHARACTER ******************************************************
         ** ********************************************************************/
        this.character_x            = Canvas.getWidth() / 2;
        this.character_y            = Canvas.getHeight() / 2;
        this.character_width        = 40;
        this.character_height       = 40;
        this.character_speed        = 5;
        this.character_image_path   = "media/character/character.png";

        /** ********************************************************************
         ** *** CHARACTER MISSILE **********************************************
         ** ********************************************************************/
        this.character_missile_x                = this.character_x;
        this.character_missile_y                = this.character_y;
        this.character_missile_width            = 10;
        this.character_missile_height           = 10;
        this.character_missile_speed            = 5;
        this.character_misilie_number           = 1;
        this.character_missile_spawn_cooldown   = 1; //Seconds

        /** ********************************************************************
         ** *** ITEMS **********************************************************
         ** ********************************************************************/
        this.items_number           = 100;
        this.item_width             = "40"; //TODO: Should different items be different sizes?
        this.item_height            = "40";
        this.item_ammo_image_path   = "media/item/ammo.png";
        this.item_food_image_path   = "media/item/food.png";

        /** ********************************************************************
         ** *** ENEMIES ********************************************************
         ** ********************************************************************/
        this.enemy_number         = 100;
        this.enemy_rat_image_path = "media/enemy/rat.png";
        this.enemy_speed          = 1;
        this.enemy_width          = "20"; //TODO: Should different enemies be different sizes?
        this.enemy_height         = "20";
        this.enemy_health         = "5";
        //TODO: Implement a minimum distance from the characters position.
        //TODO: Even better, make enemies spawn from the edge of the clients viewport.
    }

}