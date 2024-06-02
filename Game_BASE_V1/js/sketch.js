let Canvas = new CanvasClass();

let Helper = new HelperClass();
let Character = new CharacterClass();

let items_number = 100;
let item_ammo = [];
let item_food = [];
let is_mouse_pressed = false;

let character_base_image;
let item_ammo_image;
let item_food_image;

/** ********************************************************************
 ** *** LOAD RESOURCES *************************************************
 ** ********************************************************************/
function preload() {
    //character_base_image = loadImage("media/character/a1e9e712-80ff-402b-be6c-64b9369c70eb.jpg");
    character_base_image = loadImage("media/character/character.png");
    item_ammo_image = loadImage("media/item/ammo.png");
    item_food_image = loadImage("media/item/food.png");
}

/** ********************************************************************
 ** *** MAIN ENTRY FUNCTION ********************************************
 ** ********************************************************************/
function setup() {
    frameRate(10);

    Canvas.object = createCanvas(
        Canvas.getWidth(),
        Canvas.getHeight()
    );

    for (let i = 0; i < items_number; i++) {
        item_ammo.push(
            new ItemClass(
                Helper.getRandomNumber(0, Canvas.getWidth()),
                Helper.getRandomNumber(0, Canvas.getHeight()),
                "ammo"
            )
        );
        item_food.push(
            new ItemClass(
                Helper.getRandomNumber(0, Canvas.getWidth()),
                Helper.getRandomNumber(0, Canvas.getHeight()),
                "food"
            )
        );
    }
}

/** ********************************************************************
 ** *** MAIN LOOPING FUNCTION ******************************************
 ** ********************************************************************/
function draw() {
    background('#ddd');
    fill(0);
    strokeWeight(0);

    if (is_mouse_pressed) {
        item_ammo.forEach(function(item) {
            item.x += (Canvas.getWidth() / 2) - (mouseX);
            item.y += (Canvas.getHeight() / 2) - (mouseY);
        });
    }

    image(
        character_base_image,
        Character.x,
        Character.y,
        Character.getWidth(),
        Character.getHeight()
    );

    item_ammo.forEach(function(item) {
        item.draw();
    });
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