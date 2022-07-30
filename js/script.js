// Canvas set up
const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

// On Off Switch
let gameActive = true;

// Game Setup
let score = 0;
const scoreSpan = document.querySelectorAll(".score");

let level = 0;
const levelSpan = document.querySelectorAll(".level");

const levelAmount = 75
const player = new Player();
const enemies = [];
const projectiles = [];
const particles = [];
const powerUpRadius = 20;
let powerUps = [];
let difficultyMultiplier = 100 + level;
let secondsPerLevel = 2;
let activePowerUp = [];

const scoreContainer = document.querySelector(".score-container");
const levelContainer = document.querySelector(".level-container");
const endGameContainer = document.querySelector(".end-game-container");
const restartBtn = document.getElementById("restart-game");
const announcementContainer = document.querySelector(".announcement-container");

restartBtn.addEventListener("click", () => {
    location.reload();
});

// Animation Loop
function animate() {
    if (gameActive) {
        requestAnimationFrame(animate);
    }

    clearCanvas();
    updateScore();
    player.draw();

    projectiles.forEach((projectile, projectileIndex) => {
        projectile.update();
        deleteOffScreenProjectiles(projectile, projectileIndex);

        enemies.forEach((enemy, enemyIndex) => {
            if (hadCollision(enemy, projectile)) {
                projectiles.splice(projectileIndex, 1);
                createParticle(enemy, projectile);
                damageEnemy(enemy, enemyIndex, projectile);
            }
        });

        powerUps.forEach((powerUp, powerUpIndex) => {
            if (hadCollision(powerUp, projectile)) {
                applyPowerUp(powerUp);
                displayAnnoucement(activePowerUp);
                projectiles.splice(projectileIndex, 1);
                powerUps.splice(powerUpIndex, 1);
            }
        });
    });

    enemies.forEach((enemy) => {
        enemy.update();
        if (hadCollision(player, enemy)) {
            endGame();
        }
    });

    particles.forEach((particle, particleIndex) => {
        particle.update();
        deleteInvisibleParticle(particle, particleIndex);
    });

    powerUps.forEach((powerUp) => {
        powerUp.update();
    });
}

animate();

// Shoot Projectiles
canvas.addEventListener("mousedown", (mouse) => {
    shootProjectile(mouse, activePowerUp);
});
canvas.addEventListener("mouseup", (mouse) => {
    if (activePowerUp.includes("Double Tap")) {
        shootProjectile(mouse, activePowerUp);
    }
});

// Canvas Functions
function clearCanvas() {
    c.fillStyle = "rgba(0, 0, 0, 0.5)";
    c.rect(0, 0, canvas.width, canvas.height);
    c.fill();
}

// HUD Functions
function updateScore() {
    scoreSpan.forEach((container) => (container.innerHTML = score));
    levelSpan.forEach((container) => (container.innerHTML = level));
}

function displayAnnoucement(announcement = "", duration = 1) {
    if (Array.isArray(announcement) && announcement.length > 1) {
        announcementContainer.innerHTML = announcement.join(", ");
    } else {
        announcementContainer.innerHTML = announcement;
    }

    gsap.timeline()
        .set(announcementContainer, {
            x: announcementContainer.clientLeft - 100,
            alpha: 0,
        })
        .to(announcementContainer, {
            duration: 0.25,
            x: announcementContainer.clientLeft,
            alpha: 1,
        })
        .to(announcementContainer, {
            duration: duration,
        })
        .to(announcementContainer, {
            duration: 0.25,
            x: announcementContainer.clientLeft + 100,
            alpha: 0,
        });
}

// Game Logic Functions
function startGame(gameActive) {
    if (gameActive) {
        startLevel(level);
    }
}

function startNextLevelWhenCompleted() {
    if (enemies.length === 0 && gameActive) {
        const nextLevel = ++level
        if (nextLevel === levelAmount + 1) {
            endGame('won')
        }
        startLevel(nextLevel);
        activePowerUp = [];
        powerUps = [];
    } else {
        setTimeout(startNextLevelWhenCompleted, 1000);
    }
}

function endGame(status = 'lost') {
    gameActive = false;

    if (status === 'won') {
        const gameOverContainer = document.querySelector('.game-over-container')
        level = 75
        gameOverContainer.innerHTML = "You Won! GG's!"
    }

    scoreContainer.style.display = "none";
    levelContainer.style.display = "none";
    endGameContainer.style.display = "flex";
}

function hadCollision(object1, object2) {
    const dist = Math.hypot(object1.x - object2.x, object1.y - object2.y);
    return dist - object1.radius - object2.radius < 1;
}

function getSpawnLocation(radius) {
    let x, y;
    if (Math.random() < 0.5) {
        x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
        y = Math.random() * canvas.height;
    } else {
        x = Math.random() * canvas.width;
        y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
    }
    return [x, y];
}

// Projectile Functions
function shootProjectile(mouse, activePowerUp) {
    let angle = Math.atan2(
        mouse.y - canvas.height / 2,
        mouse.x - canvas.width / 2
    );
    const spreadShotAmount = 5;

    if (activePowerUp.includes("Spread Shot")) {
        angle -= Math.floor(spreadShotAmount / 2) * 50;
        for (let i = 0; i < spreadShotAmount; i++) {
            const projectile = new Projectile(5, angle, activePowerUp);
            projectile.applyPowerUp();
            projectiles.push(projectile);
            angle += 50;
        }
    } else {
        const projectile = new Projectile(5, angle, activePowerUp);
        projectile.applyPowerUp();
        projectiles.push(projectile);
    }
}

function deleteOffScreenProjectiles(projectile, index) {
    if (
        projectile.x + projectile.radius > canvas.width ||
        projectile.x + projectile.radius < 0 ||
        projectile.y + projectile.radius > canvas.height ||
        projectile.y + projectile.radius < 0
    ) {
        projectiles.splice(index, 1);
    }
}

// Particle Functions
function createParticle(enemy, projectile) {
    for (let i = 0; i < (enemy.radius / 3) * (projectile.damage / 10); i++) {
        particles.push(new Particle(enemy.x, enemy.y));
        score++;
    }
}

function deleteInvisibleParticle(particle, index) {
    if (particle.opacity < 0) {
        particles.splice(index, 1);
    }
}

// Powerups Functions
function applyPowerUp(powerUp) {
    activePowerUp.push(powerUp.type);
    setTimeout(() => {
        if (activePowerUp.indexOf(powerUp.type) !== -1) {
            activePowerUp.shift();
        }
    }, powerUp.duration * 1000);
}

function spawnPowerUp(amount = 1, type = 'random', levelSeconds = secondsPerLevel, radius = powerUpRadius) {
    for (let i = 0; i < amount; i++) {
        const spawnLocation = getSpawnLocation(radius);
        let x = spawnLocation[0];
        let y = spawnLocation[1];

        x > 300 ? (x -= 200) : (x += 200);
        y > 300 ? (y -= 200) : (y += 200);

        const powerUp = new PowerUp(x, y);
        setTimeout(() => {
            powerUps.push(powerUp);
            powerUp.giveType();

            if (type !== 'random') {
                powerUp.type = type;
            }

            gsap.timeline({ repeat: -1 })
                .set(powerUp, {
                    alpha: (this.alpha = 1),
                })
                .to(powerUp, {
                    duration: 1,
                    alpha: (this.alpha = 0.1),
                });

            setTimeout(() => {
                if (powerUps.indexOf(powerUp) !== -1 ) {
                    const index = powerUps.indexOf(powerUp);
                    powerUps.splice(index, 1);
                }
            }, powerUp.screenTime * 1000);
        }, (levelSeconds === secondsPerLevel ? Math.random() * secondsPerLevel / 1.25 : Math.random() * levelSeconds) * 1000
    )}
}

// Enemy Functions
function damageEnemy(enemy, index, projectile) {
    if (enemy.radius - projectile.damage > enemy.minimumRadius) {
        gsap.to(enemy, {
            duration: 0.5,
            radius: enemy.radius - projectile.damage,
        });
    } else {
        enemies.splice(index, 1);
    }
}

function getEnemy(type, difficultyMultiplier, radius) {
    const spawnLocation = getSpawnLocation(radius);
    const x = spawnLocation[0];
    const y = spawnLocation[1];

    return new Enemy(type, difficultyMultiplier, x, y, radius);
}

function spawnEnemy(
    type = ["normal"],
    amount = 1,
    levelSeconds = secondsPerLevel
) {
    for (let i = 0; i < amount; i++) {
        const radius = Math.random() * (35 - 10) + 10;
        setTimeout(() => {
            enemy = getEnemy(type, difficultyMultiplier, radius);
            enemies.push(enemy);
            enemy.applyEnemyType();
        }, Math.random() * levelSeconds * 1000);
    }
}

function spawnCustomEnemy(
    amount,
    radius,
    speedMultiplier,
    levelSeconds,
    colorRGBA = {red: 255, green: 0, blue: 0, alpha: 1},
    difficultyMultiplier = 100,
) {
    for (let i = 0; i < amount; i++) {
        const customEnemy = getEnemy(['custom'], difficultyMultiplier, radius)

        for (let color in colorRGBA) {
            customEnemy[color] = colorRGBA[color]
        }

        customEnemy.velocityMultiplier = speedMultiplier;

        setTimeout(() => {
            enemies.push(customEnemy);
            customEnemy.applyEnemyType();
        }, Math.random() * levelSeconds * 1000);
    }
}

startGame(gameActive);