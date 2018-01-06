// Enemies our player must avoid
var Enemy = function(y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.x = -101;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > 500) {
        this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    // Default position
    this.x = 200;
    this.y = 380;

    // The image/sprite for our character
    this.sprite = 'images/char-boy.png';
}

// TODO: Add functionality
Player.prototype.update = function(dt) {
    // When the player reaches the end, it will reset the sprite
    // To the default position
    if (this.y < 0) {
        this.x = 200;
        this.y = 380;
    }
}

// Draw the player's character on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Handles the movement for the character as well as checks 
// for boundaries
Player.prototype.handleInput = function(playerInput) {
    //First check is for the type of movement
    if (playerInput === 'left') {
        //If it passes, then checks for boundaries
        if (this.x > 0 ) {
            this.x -= 100;
        }
    } else if (playerInput === 'right') {
        if (this.x < 400 ) {
            this.x += 100;
        }
    } else if (playerInput === 'up') {
        if (this.y > 0 ) {
            this.y -= 80;
        }
    } else if (playerInput === 'down') {
        if (this.y < 380) {
            this.y += 80;
        } 
    }
}

var enemyCollision = function (enemy) {

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player();

const allEnemies = [];
for (let x = 0; x < 7; x++) {
    allEnemies[x] = new Enemy((Math.floor(Math.random() * 3) * 80) + 60, Math.random() * 200);
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
