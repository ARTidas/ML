class GUIClass {

    contructor() {
        this.x = Settings.gui_x;
        this.y = Settings.gui_y;
    }

    draw() {
        let i = 0;

        textSize(Settings.gui_text_size);
        fill('#000');
        stroke('#fff');
        strokeWeight(1);

        text('Health: 100', 0, Settings.gui_text_size * ++i);
        text('XP: 0', 0, Settings.gui_text_size * ++i);
    }

}