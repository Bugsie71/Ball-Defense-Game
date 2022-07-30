class Projectile {
    constructor(radius, angle, activePowerUp) {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.radius = radius;
        this.activePowerUp = activePowerUp;
        this.damage = 10;
        this.red = 255;
        this.green = 255;
        this.blue = 255;
        this.alpha = 1;
        this.color = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
        this.velocityMultiplier = 8;
        this.velocity = {
            x: Math.cos(angle) * this.velocityMultiplier,
            y: Math.sin(angle) * this.velocityMultiplier,
        };
    }

    applyPowerUp() {
        if (this.activePowerUp.length !== 0) {
            this.red = 0;
            this.green = 0;
            this.blue = 0;

            if (this.activePowerUp.includes("Damage Increase")) {
                this.damage *= 3;
                this.red = 255;
            } 
            if (this.activePowerUp.includes("Double Tap")) {
                this.green = 255;
            }
            if (this.activePowerUp.includes("Spread Shot")) {
                this.blue = 255;
            }
            if (
                this.activePowerUp.includes("Damage Increase") &&
                this.activePowerUp.includes("Double Tap") &&
                this.activePowerUp.includes("Spread Shot")
            ) {
                this.red = Math.floor(Math.random() * 255)
                this.green = Math.floor(Math.random() * 255)
                this.blue = Math.floor(Math.random() * 255)
            }
        }
        this.color = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }

    draw() {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.closePath();
        c.fill();
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.draw();
    }
}
