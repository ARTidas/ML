class Canvas {
    constructor() {
        this.object = null;

        this.x1 = 0;
        this.y1 = 0;
        this.x2 = this.getCanvasWidth();
        this.y2 = this.getCanvasHeight();

        this.diagonal_slope = (this.y2 - this.y1) / (this.x2 - this.x1);
    }

    getCanvasWidth() {
        return window.innerWidth * 0.95;
    };
    getCanvasHeight() {
        return window.innerHeight * 0.95;
    };
}