class AbstractPoolClass {

    moveObject(object) {
        object.x += this.getMovementX();
        object.y += this.getMovementY();

        // Check if object has target attributes and update the target position as well.
        if ('target_x' in object) {
            this.target_x += this.getMovementX();
        }
        if ('target_y' in object) {
            this.target_y += this.getMovementY();
        }
    }

    getMovementX() {
        //return (Math.sign(Settings.character_x - mouseX) * Character.speed);
        // Gradient descent movement
        return (
            (Settings.character_x - mouseX) /
            (dist(Settings.character_x, Settings.character_y, mouseX, mouseY)) *
            (Character.speed)
        );
    }

    getMovementY() {
        //return (Math.sign(Settings.character_y - mouseY) * Character.speed);
        // Gradient descent movement
        return (
            (Settings.character_y - mouseY) /
            (dist(Settings.character_x, Settings.character_y, mouseX, mouseY)) * //TODO: Refactor this to only compute dist once
            (Character.speed)
        );
    }

}