class Player {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.radius = 10;
        this.red = 255;
        this.green = 255;
        this.blue = 255;
        this.alpha = 1;
        this.color = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }

    draw() {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.closePath();
        c.fill();
    }
}
