// XP and Level System Extension for MakeCode Arcade
namespace XPSystem {
    let xp = 0;
    let level = 1;
    let xpThreshold = 100;

    // Function to add XP
    export function addXP(amount: number) {
        xp += amount;
        checkLevelUp();
    }

    // Function to check for level up
    function checkLevelUp() {
        while (xp >= xpThreshold) {
            xp -= xpThreshold;
            level++;
            xpThreshold += 50; // Increase XP requirement per level
            game.splash("Level Up! You are now level " + level);
        }
    }

    // Function to get current XP
    export function getXP(): number {
        return xp;
    }

    // Function to get current level
    export function getLevel(): number {
        return level;
    }
}

