class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * (4 - 2) + 2;
        this.opacity = Math.random() * (1 - 0.5) + 0.5;
        this.red = 255;
        this.green = Math.floor(Math.random() * 255);
        this.blue = 0;
        this.alpha = 1;
        this.color = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
        this.velocity = {
            x: (Math.random() - 0.5) * 16,
            y: (Math.random() - 0.5) * 16,
        };
        this.friction = 0.95;
    }

    draw() {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.closePath();
        c.fill();
    }

    update() {
        this.x += this.velocity.x *= this.friction;
        this.y += this.velocity.y *= this.friction;
        this.opacity -= 0.01;
        this.color = `rgba(255, ${this.green}, 0, ${this.opacity})`;

        this.draw();
    }
}
