class AbstractPoolClass {

    moveObject(object) {
        object.x += this.getMovementX();
        object.y += this.getMovementY();
    }

    getMovementX() {
        return (Math.sign(Settings.character_x - mouseX) * Character.speed);
    }

    getMovementY() {
        return (Math.sign(Settings.character_y - mouseY) * Character.speed);
    }

}