function startLevel(level) {
    difficultyMultiplier++;

    if (level === 1) {
        spawnEnemy(["normal"], 1);
    }
    if (level === 2) {
        spawnEnemy(["normal"], 3);
    }
    if (level === 3) {
        spawnEnemy(["normal"], 5);
    }
    if (level === 4) {
        spawnEnemy(["normal"], 7);
    }
    if (level === 5) {
        displayAnnoucement("Challenge Round: Horde", 3);
        spawnEnemy(["normal"], 12);
    }
    if (level === 6) {
        spawnEnemy(["normal"], 3);
        spawnEnemy(["normal"], 3);
    }
    if (level === 7) {
        spawnEnemy(["normal"], 4);
        spawnEnemy(["normal"], 4);
    }
    if (level === 8) {
        spawnEnemy(["normal"], 5);
        spawnEnemy(["normal"], 5);
    }
    if (level === 9) {
        spawnEnemy(["normal"], 6);
        spawnEnemy(["normal"], 6);
    }
    if (level === 10) {
        secondsPerLevel = 3
        displayAnnoucement("Boss Battle: Ant Army", 3);
        spawnCustomEnemy(30, 10, 1, 3);
    }
    if (level === 11) {
        displayAnnoucement("New Enemy: Fast", 3);
        spawnEnemy(["fast"], 3);
    }
    if (level === 12) {
        spawnEnemy(["fast"], 7);
    }
    if (level === 13) {
        spawnEnemy(["fast"], 12);
    }
    if (level === 14) {
        spawnEnemy(["fast"], 16);
    }
    if (level === 15) {
        displayAnnoucement("Challenge Level: Meshing", 3);
        spawnEnemy(["normal"], 10);
        spawnEnemy(["fast"], 10);
    }
    if (level === 16) {
        secondsPerLevel = 5;
        spawnEnemy(["normal"], 10);
        spawnEnemy(["fast"], 5);
    }
    if (level === 17) {
        spawnEnemy(["normal"], 5);
        spawnEnemy(["fast"], 10);
    }
    if (level === 18) {
        secondsPerLevel = 7;
        spawnEnemy(["normal"], 12);
        spawnEnemy(["fast"], 12);
    }
    if (level === 19) {
        spawnEnemy(["normal"], 15);
        spawnEnemy(["fast"], 15);
    }
    if (level === 20) {
        displayAnnoucement("Boss Battle: Speed Demons", 3);
        spawnCustomEnemy(10, 10, 4, 10, {
            red: 0,
            green: 255,
            blue: 0,
            alpha: 1,
        });
    }
    if (level === 21) {
        secondsPerLevel = 5;
        displayAnnoucement("New Enemy: Big", 3);
        spawnEnemy(["big"], 3);
    }
    if (level === 22) {
        spawnEnemy(["normal"], 5);
        spawnEnemy(["fast"], 5);
        spawnEnemy(["big"], 3);
    }
    if (level === 23) {
        spawnEnemy(["normal"], 5);
        spawnEnemy(["fast"], 7);
        spawnEnemy(["big"], 7);
    }
    if (level === 24) {
        spawnEnemy(["normal"], 10);
        spawnEnemy(["fast"], 7);
        spawnEnemy(["big"], 7);
    }
    if (level === 25) {
        displayAnnoucement("Challenge Level: Coordinate Attack", 3);
        spawnEnemy(["normal"], 15, 20);
        spawnEnemy(["fast"], 20, 30);
        spawnEnemy(["big"], 20, 3);
    }
    if (level === 26) {
        secondsPerLevel = 10;
        displayAnnoucement("Power Ups Unlocked!", 3);
        spawnEnemy(["normal"], 10);
        spawnEnemy(["fast"], 10);
        spawnEnemy(["big"], 10);
        spawnPowerUp();
    }
    if (level === 27) {
        spawnEnemy(["normal"], 15);
        spawnEnemy(["fast"], 10);
        spawnEnemy(["big"], 10);
        spawnPowerUp();
    }
    if (level === 28) {
        spawnEnemy(["normal"], 10);
        spawnEnemy(["fast"], 10);
        spawnEnemy(["big"], 15);
        spawnPowerUp();
    }
    if (level === 29) {
        spawnEnemy(["normal"], 10);
        spawnEnemy(["fast"], 15);
        spawnEnemy(["big"], 10);
        spawnPowerUp();
    }
    if (level === 30) {
        displayAnnoucement("Boss Battle: The Titan", 3);
        spawnCustomEnemy(1, 400, 1, 1, {
            red: 0,
            green: 0,
            blue: 255,
            alpha: 1,
        });
        spawnEnemy(["normal"], 25);
    }
    if (level === 31) {
        displayAnnoucement("New Enemy: Ghost", 3);
        spawnEnemy(["normal", "ghost"], 15);
    }
    if (level === 32) {
        secondsPerLevel = 15;
        spawnEnemy(["normal"], 10);
        spawnEnemy(["fast"], 15);
        spawnEnemy(["big"], 10);
        spawnEnemy(["normal", "ghost"], 10);
        spawnPowerUp();
    }
    if (level === 33) {
        spawnEnemy(["fast"], 15);
        spawnEnemy(["big"], 10);
        spawnEnemy(["normal", "ghost"], 20);
        spawnPowerUp();
    }
    if (level === 34) {
        spawnEnemy(["fast"], 30);
        spawnEnemy(["normal"], 18);
    }
    if (level === 35) {
        secondsPerLevel = 30;
        displayAnnoucement("Challenge Level: We are Evolving!", 3);
        spawnEnemy(["normal"], 30);
        spawnEnemy(["fast"], 30);
        spawnEnemy(["big"], 30);
        spawnEnemy(["normal", "ghost"], 30);
        spawnPowerUp(3, "Double Tap");
        spawnPowerUp(3, "Spread Shot");
    }
    if (level === 36) {
        secondsPerLevel = 15;
        spawnEnemy(["normal"], 30);
        spawnEnemy(["fast"], 30);
        spawnEnemy(["big"], 30);
        spawnEnemy(["normal", "ghost"], 30);
        spawnPowerUp(3, "Double Tap");
        spawnPowerUp(3, "Spread Shot");
    }
    if (level === 37) {
        spawnEnemy(["big"], 60);
        spawnPowerUp(2, "Damage Increase");
        spawnPowerUp(2, "Spread Shot");
    }
    if (level === 38) {
        spawnEnemy(["normal"], 60);
        spawnEnemy(["normal", "ghost"], 60);
        spawnPowerUp(2, "Double Tap");
        spawnPowerUp(2, "Spread Shot");
    }
    if (level === 39) {
        spawnEnemy(["big"], 60);
        spawnPowerUp(2, "Double Tap");
        spawnPowerUp(2, "Damage Increase");
    }
    if (level === 40) {
        displayAnnoucement("Boss Battle: Assassin's", 3);
        spawnEnemy(["normal"], 30);
        spawnEnemy(["normal", "ghost"], 20);
        spawnCustomEnemy(10, 20, 2, secondsPerLevel, {red: 5, green: 5, blue: 5, alpha: 0.3})
        spawnPowerUp(1, 'Double Tap');
    }
    if (level === 41) {
        spawnEnemy(["normal"], 30);
        spawnEnemy(["normal", "ghost"], 30);
        spawnPowerUp()
    }
    if (level === 42) {
        spawnEnemy(["normal"], 30);
        spawnEnemy(["fast"], 10);
        spawnEnemy(["normal", "ghost"], 30);
        spawnPowerUp(2);
    }
    if (level === 43) {
        spawnEnemy(["normal"], 30);
        spawnEnemy(["fast"], 20);
        spawnEnemy(["normal", "ghost"], 30);
        spawnPowerUp(2, 'Spread Shot');
    }
    if (level === 44) {
        spawnEnemy(["normal"], 30);
        spawnEnemy(["fast"], 20);
        spawnEnemy(['big'], 10)
        spawnEnemy(["normal", "ghost"], 30);
        spawnPowerUp(2, "Spread Shot");
        spawnPowerUp(1, "Double Tap");
    }
    if (level === 45) {
        secondsPerLevel = 60;
        displayAnnoucement("Challenge Level: They Won't Stop Coming!", 3);
        spawnEnemy(["normal"], 50);
        spawnEnemy(["fast"], 50);
        spawnEnemy(["big"], 50);
        spawnEnemy(["normal", "ghost"], 50);
        spawnPowerUp(4, "Double Tap");
        spawnPowerUp(4, "Spread Shot");
    }
    if (level === 46) {
        secondsPerLevel = 15;
        spawnEnemy(["fast"], 25);
        spawnEnemy(["big"], 25);
        spawnPowerUp(2);
    }
    if (level === 47) {
        spawnEnemy(['normal' ,"ghost"], 25);
        spawnEnemy(["big"], 25);
        spawnPowerUp(2);
    }
    if (level === 48) {
        spawnEnemy(["fast"], 25);
        spawnEnemy(["normal"], 35);
        spawnPowerUp(2);
    }
    if (level === 49) {
        spawnEnemy(["fast"], 25);
        spawnEnemy(["normal", "ghost"], 35);
        spawnPowerUp(2);
    }
    if (level === 50) {
        displayAnnoucement("Challenge Level: They are Evolving...", 3)
        spawnEnemy(['normal', 'fast'], 3)
        spawnEnemy(['normal', 'big'], 3)
        spawnEnemy(["fast"], 10);
        spawnEnemy(["normal"], 10);
        spawnEnemy(["big"], 10);
    }
    if (level === 51) {
        spawnEnemy(["normal"], 10);
        spawnEnemy(["big"], 10);
        spawnEnemy(["normal", "big"], 8);
    }
    if (level === 52) {
        spawnEnemy(["normal"], 10);
        spawnEnemy(["fast"], 10);
        spawnEnemy(["normal", "fast"], 10);
    }
    if (level === 53) {
        spawnEnemy(["normal", 'ghost'], 10);
        spawnEnemy(["big", 'ghost'], 10);
        spawnEnemy(["normal", "big", 'ghost'], 10);
    }
    if (level === 54) {
        spawnEnemy(["normal", "ghost"], 10);
        spawnEnemy(["fast", "ghost"], 10);
        spawnEnemy(["normal", "fast", "ghost"], 10);
    }
    if (level === 55) {
        secondsPerLevel = 15;
        displayAnnoucement('Challenge Level: Big and Fast?!?!', 3)
        spawnEnemy(['big', 'fast'], 10)
    }
    if (level === 56) {
        spawnEnemy(["normal"], 20);
        spawnEnemy(["normal", "fast"], 20);
        spawnEnemy(["normal", "big"], 10);
        spawnEnemy(["fast", "big"], 5);
        spawnPowerUp(2, "Double Tap");
        spawnPowerUp(2, "Spread Shot");
    }
    if (level === 57) {
        spawnEnemy(["normal"], 20);
        spawnEnemy(["big"], 20);
        spawnEnemy(["normal", "big"], 10);
        spawnEnemy(["fast", "big"], 5);
        spawnPowerUp(2, "Double Tap");
        spawnPowerUp(2, "Damage Increase");
    }
    if (level === 58) {
        spawnEnemy(["normal"], 20);
        spawnEnemy(["normal", "fast"], 20);
        spawnEnemy(["normal", "big"], 10);
        spawnEnemy(["fast", "big"], 10);
        spawnPowerUp(3, "Double Tap");
        spawnPowerUp(3, "Spread Shot");
    }
    if (level === 59) {
        spawnEnemy(["big"], 20);
        spawnEnemy(["normal", "big"], 20);
        spawnEnemy(["fast", "big"], 15);
        spawnPowerUp(2, "Damage Increase");
        spawnPowerUp(2, "Spread Shot");
    }
    if (level === 60) {
        displayAnnoucement("Rainbow Assault", 3);
        spawnEnemy(["normal"], 25);
        spawnEnemy(["normal", "fast"], 25);
        spawnEnemy(["normal", "big"], 15);
        spawnEnemy(["fast", "big"], 10);
        spawnPowerUp(1, "Double Tap", 3);
        spawnPowerUp(1, "Spread Shot", 3);
        spawnPowerUp(1, "Damage Increase", 3);
    }
    if (level === 61) {
        secondsPerLevel = 30
        spawnEnemy(["fast"], 40);
        spawnEnemy(["normal", "ghost"], 20);
        spawnEnemy(["normal", "fast"], 20);
        spawnEnemy(["fast", "big"], 10);
        spawnEnemy(["ghost", "fast", "big"], 10);
        spawnPowerUp(6);
        
    }
    if (level === 62) {
        spawnEnemy(["normal"], 50);
        spawnEnemy(["big"], 40);
        spawnEnemy(["normal", "fast", "ghost"], 20);
        spawnEnemy(["fast", "big"], 10);
        spawnPowerUp(6);
    }
    if (level === 63) {
        spawnEnemy(["normal"], 25);
        spawnEnemy(["big"], 25);
        spawnEnemy(["normal", "big"], 10);
        spawnEnemy(["ghost", "fast", "big"], 20);
        spawnPowerUp(6);
    }
    if (level === 64) {
        spawnEnemy(["normal", "ghost"], 25);
        spawnEnemy(["big", "ghost"], 15);
        spawnEnemy(["normal", "big", "ghost"], 15);
        spawnEnemy(["normal", "fast", "ghost"], 15);
        spawnEnemy(["ghost", "fast", "big"], 15);
        spawnPowerUp(6);
    }
    if (level === 65) {
        secondsPerLevel = 1;
        displayAnnoucement("Boss Battle: X to ) ( to > <", 3);
        spawnCustomEnemy(80, 20, 3)
    }
    if (level === 66) {
        secondsPerLevel = 30;
        spawnEnemy(["fast"], 50);
        spawnEnemy(["normal", "ghost"], 25);
        spawnEnemy(["normal", "fast"], 25);
        spawnEnemy(["fast", "big"], 20);
        spawnEnemy(["ghost", "fast", "big"], 10);
        spawnPowerUp(7);
    }
    if (level === 67) {
        spawnEnemy(["normal"], 60);
        spawnEnemy(["big"], 60);
        spawnEnemy(["normal", "fast", "ghost"], 30);
        spawnEnemy(["fast", "big"], 10);
        spawnPowerUp(7);
    }
    if (level === 68) {
        spawnEnemy(["normal"], 30);
        spawnEnemy(["big"], 30);
        spawnEnemy(["normal", "big"], 20);
        spawnEnemy(["ghost", "fast", "big"], 30);
        spawnPowerUp(7);
    }
    if (level === 69) {
        spawnEnemy(["normal", "ghost"], 30);
        spawnEnemy(["big", "ghost"], 20);
        spawnEnemy(["normal", "big", "ghost"], 20);
        spawnEnemy(["normal", "fast", "ghost"], 20);
        spawnEnemy(["ghost", "fast", "big"], 20);
        spawnPowerUp(7);
    }
    if (level === 70) {
        secondsPerLevel = 60;
        displayAnnoucement("Take a Minute Break, You're going to need it...", 10);
        spawnEnemy(["normal"], 30);
    }
    if (level === 71) {
        secondsPerLevel = 30;
        displayAnnoucement('Boss Battle: Perfect Aim', 3)
        spawnCustomEnemy(30, 3, 3, secondsPerLevel, {red: 0, green: 255, blue: 0, alpha: 1})
    }
    if (level === 72) {
        secondsPerLevel = 30;
        displayAnnoucement('Boss Battle: Reaction Time', 3)
        spawnCustomEnemy(40, 10, 8, secondsPerLevel, {red: 0, green: 255, blue: 0, alpha: 1})
    }
    if (level === 73) {
        secondsPerLevel = 30
        displayAnnoucement('Boss Battle: "Please Help" -Your Fingers & Forearm', 5)
        spawnEnemy(["big"], 40);
        spawnEnemy(["big", 'normal'], 20);
        spawnEnemy(["big", 'fast'], 10);
        spawnPowerUp(6, 'Double Tap')
    }
    if (level === 74) {
        displayAnnoucement("Boss Battle: One man Army");
        secondsPerLevel = 60;
        spawnEnemy(["normal"], 20);
        spawnEnemy(["fast"], 20);
        spawnEnemy(["big"], 20);
        spawnEnemy(["normal", "ghost"], 20);
        spawnEnemy(["normal", "fast"], 20);
        spawnEnemy(["normal", "big"], 20);
        spawnEnemy(["big", "ghost"], 20);
        spawnEnemy(["normal", "big", "ghost"], 20);
        spawnEnemy(["normal", "fast", "ghost"], 20);
        spawnEnemy(["fast", "big"], 20);
        spawnEnemy(["ghost", "fast", "big"], 20);
        spawnPowerUp(12);
    }
    if (level === 75) {
        displayAnnoucement("Final Boss: Zeus and his Army", 5);
        secondsPerLevel = 60;
        spawnCustomEnemy(1, 1000, 2, 30, {red: 255, green: 255, blue: 255, alpha: 1})
        spawnEnemy(["normal"], 30);
        spawnEnemy(["fast"], 30);
        spawnEnemy(["big"], 30);
        spawnEnemy(["normal", "ghost"], 30);
        spawnEnemy(["normal", "fast"], 30);
        spawnEnemy(["normal", "big"], 30);
        spawnEnemy(["big", "ghost"], 30);
        spawnEnemy(["normal", "big", "ghost"], 30);
        spawnEnemy(["normal", "fast", "ghost"], 30);
        spawnEnemy(["fast", "big"], 30);
        spawnEnemy(["ghost", "fast", "big"], 30);
        spawnPowerUp(20);
    }

    if (level === 76) {
        endGame()
    }

    setTimeout(() => {
        startNextLevelWhenCompleted();
    }, secondsPerLevel * 1000);
}