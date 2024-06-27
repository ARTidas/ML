let Canvas = new CanvasClass();

let Helper                  = new HelperClass();
let Settings                = new SettingsClass();
let GUI                     = new GUIClass();
let Character               = new CharacterClass();
let ItemPool                = new ItemPoolClass();
let EnemyPool               = new EnemyPoolClass();
let CharacterMissilePool    = new CharacterMissilePoolClass();

let is_mouse_pressed = false;

let character_base_image;
let item_ammo_image;
let item_food_image;
let enemy_rat_image;

/** ********************************************************************
 ** *** LOAD RESOURCES *************************************************
 ** ********************************************************************/
function preload() {
    //character_base_image    = loadImage("media/character/a1e9e712-80ff-402b-be6c-64b9369c70eb.jpg");
    character_base_image    = loadImage(Character.image_path);
    item_ammo_image         = loadImage(ItemPool.item_ammo_image_path);
    item_food_image         = loadImage(ItemPool.item_food_image_path);
    enemy_rat_image         = loadImage(EnemyPool.rat_image_path);
}

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    frameRate(Settings.canvas_frame_rate);

    //TODO: Can we move the canvas initialization ot the Canvas class?
    Canvas.object = createCanvas(
        Canvas.getWidth(),
        Canvas.getHeight()
    );
}

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    background(Settings.canvas_background_color);
    /*fill(0);
    strokeWeight(0);*/

    if (is_mouse_pressed) {
        CharacterMissilePool.move();
        ItemPool.move();
        EnemyPool.move();
    }

    EnemyPool.moveToIntersect()
    if (EnemyPool.closest_enemy_object) {
        CharacterMissilePool.spawn();
    }
    CharacterMissilePool.moveToTarget();

    //TODO: Will the order of the drawing sequences matter?
    Character.draw();
    ItemPool.draw();
    EnemyPool.draw();
    CharacterMissilePool.draw();
    GUI.draw();
}

/** ********************************************************************
 ** *** MOUSE HANDLING FUNCTIONS ***************************************
 ** ********************************************************************/
function mousePressed() {
    is_mouse_pressed = true;
}
function mouseReleased() {
    is_mouse_pressed = false;
}