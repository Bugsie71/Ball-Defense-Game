class PowerUp {
    constructor(x, y) {
        this.type = undefined;
        this.duration = 10;
        this.screenTime = 15;
        this.x = x;
        this.y = y;
		this.radius = 20;
        this.red = 255;
        this.green = 255;
        this.blue = 255;
        this.alpha = 1;
        this.color = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }

    giveType() {
        const types = ['Damage Increase' ,'Double Tap', 'Spread Shot']
        this.type = types[Math.floor(Math.random() * types.length)]
    }
    
    draw() {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.closePath();
        c.fill();
    }

    update() {
        this.draw();
        this.color = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }
}