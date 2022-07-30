class Enemy {
    constructor(type, difficultyMultiplier, x, y, radius) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.difficultyMultiplier = difficultyMultiplier / 100;
        this.radiusMultiplier = this.difficultyMultiplier;
        this.velocityMultiplier = this.difficultyMultiplier;
        this.radius = radius;
        this.minimumRadius = 10;
        this.angle = Math.atan2(
            canvas.height / 2 - this.y,
            canvas.width / 2 - this.x
        );
        this.velocity = {
            x: Math.cos(this.angle) / 2,
            y: Math.sin(this.angle) / 2,
        };
        this.red = 0;
        this.green = 0;
        this.blue = 0;
        this.alpha = 1;
        this.color = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }

    applyEnemyType() {
        let maxVelocityMultiplier, maxRadiusSize;
        const prevVelocityMultiplier = this.velocityMultiplier;
        const prevRadius = this.radius;

        if (this.type.includes("fast")) {
            this.velocityMultiplier *= 1.5;
            maxVelocityMultiplier = this.velocityMultiplier;

            if (this.radius / 2 > 10) {
                this.radius = (this.radius / 2) * this.radiusMultiplier;
            } else {
                this.radius = 10;
            }
            this.green = 255;
        }

        if (this.type.includes("big")) {
            this.radiusMultiplier *= 1.5;
            this.radius = this.radius * this.radiusMultiplier;
            this.minimumRadius *= 2;
            maxRadiusSize = prevRadius * this.radiusMultiplier;

            this.velocityMultiplier /= 2;
            this.blue = 255;
        }

        if (this.type.includes("ghost")) {
            this.alpha = 0.2 / this.difficultyMultiplier;
            if (!this.type.includes("big")) {
                this.minimumRadius *= 2;
            }

            if (this.radius <= this.minimumRadius) {
                this.radius *= 2;
            }
        }

        if (this.type.includes("big") && this.type.includes("fast")) {
            this.velocityMultiplier = maxVelocityMultiplier;
            this.radius = maxRadiusSize;
        }

        if (this.type.includes("normal")) {
            if (maxVelocityMultiplier) {
                this.radius = prevRadius;
            } else if (maxRadiusSize) {
                this.velocityMultiplier = prevVelocityMultiplier;
            }
            this.red = 255;
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
        this.x += this.velocity.x * this.velocityMultiplier;
        this.y += this.velocity.y * this.velocityMultiplier;

        this.draw();
    }
}
