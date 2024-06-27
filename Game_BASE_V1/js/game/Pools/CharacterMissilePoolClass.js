class CharacterMissilePoolClass extends AbstractPoolClass {

    static CHARACTER_MISSILE = "character_missile";

    items = [
        CharacterMissilePoolClass.CHARACTER_MISSILE,
    ];
    missiles = [];
    last_spawn_time = null;

    constructor() {
        super();
        
    }

    spawn() {
        
        //Date.now() is in miliseconds, settings cooldown is in seconds
        if (
            (Date.now() - this.last_spawn_time) > (Settings.character_missile_spawn_cooldown * 1000)
        ) {
            console.log("Spawning missile...");
            for (let i = 0; i < Settings.character_misilie_number; i++) {
                this.missiles.push(
                    new CharacterMissileClass(
                        Settings.character_missile_x,
                        Settings.character_missile_y,
                        EnemyPool.closest_enemy_object
                    )
                );
                this.last_spawn_time = Date.now();
            }
        }
    }

    draw() {
        this.missiles.forEach((object) => object.draw());
    }

    move() {
        this.missiles.forEach((object) => this.moveObject(object));
    }

    moveToTarget() {
        this.missiles.forEach((object) => this.moveObjectOnTargetVector(object));
    }

    moveObjectOnTargetVector(object) {
        object.x += object.movement_vector_x;
        object.y += object.movement_vector_y;
    }

    

}