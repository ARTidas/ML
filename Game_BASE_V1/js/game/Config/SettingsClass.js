class SettingsClass {

    constructor() {
        /** ********************************************************************
         ** *** CANVAS *********************************************************
         ** ********************************************************************/
        this.canvas_frame_rate          = 21;
        this.canvas_background_color    = '#ddd';

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
    }

}