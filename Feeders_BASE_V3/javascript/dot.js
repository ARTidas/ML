class Dot extends Genesys {
    constructor(canvas) {
        super();
        this.canvas = canvas;

        this.object = null;
        this.x = settings.population_starting_position_x;
        this.y = settings.population_starting_position_y;
        this.width = settings.candidate_width;
        this.color = this.getRandomHexColor();
        
        var offset_x = 0;
        var offset_y = 0;
        
        this.offset_x = offset_x
        this.offset_y = offset_y;
    };

    getRandomHexColor() {
        return (
            '#' + 
            this.getRandomHexNumber() + 
            this.getRandomHexNumber() + 
            this.getRandomHexNumber()
        );
    };

    getRandomHexNumber() {
        var possible_hex_numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

        return (
            possible_hex_numbers[
                Math.floor(Math.random() * possible_hex_numbers.length)
            ]
        );
    };
  
    display() {
        fill(this.color);
        this.object = rect(this.x, this.y, this.width);
    };
};