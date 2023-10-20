class Target extends Genesys {
    constructor(target_type) {
        super();

        this.x = this.getRandomNumber(0, canvas.getWidth());
        this.y = this.getRandomNumber(0, canvas.getHeight());

        this.width = target_type.width;
        this.color = target_type.color;
        this.shape = target_type.shape;
        this.edible = target_type.edible;
    };

    display() {
        fill(this.color);

        switch(this.shape) {
            case 'triangle':
                this.object = triangle(
                    this.x,
                    this.y - this.width / 2,
                    this.x + this.width / 2,
                    this.y + this.width / 2,
                    this.x - this.width / 2,
                    this.y + this.width / 2
                );
                break;
            case 'rect':
                this.object = rect(
                    this.x - this.width / 2,
                    this.y - this.width / 2,
                    this.width
                );
                break;
            default:
                this.object = circle(
                    this.x,
                    this.y,
                    this.width
                );
        }

        return this.object;
    };
};