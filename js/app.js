// Enemies our player must avoid
class Enemy {
    constructor(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
        this.sprite = "images/enemy-bug.png";
        this.x = x;
        this.y = y;
        this.speed = speed;
       } 
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
        update(dt) {
            this.x = this.x + this.speed * dt;
            if (this.x > 505) {
                this.x = -100;
            }

// Do player and enemies collide?

            if (this.x < player.x + 70 &&
                this.x + 20 > player.x - 70 &&
                this.y < player.y + 50 &&
                this.y + 50 > player.y) {
                    player.x = 203;
                    player.y = 320;
                }

        }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

// Draw the enemy on the screen, required method for game
        render() {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(x, y) {
    this.sprite = "images/char-boy.png";
    this.x = x;
    this.y = y;
    }

    update() {

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

  
    /* Using the switch statement, the handleInput method
    listens for the respective strings of the
    keyup-eventlistener
    */
    handleInput(event) {
        switch(event) {

            case "left":
                this.x = this.x - 100;
                if (this.x < 0) { // prevents the player from falling over the edge
                    this.x = 0;
                }
                break;

            case "up":
                this.y = this.y - 82;
                if (this.y < 10) { // sets player back to start
                    this.x = 203;
                    this.y = 320;
                }
                break;

            case "right":
                this.x = this.x + 100;
                if (this.x > 400) {
                    this.x = 400;
                }
                break;

            case "down":
                this.y = this.y + 82;
                if (this.y > 400) {
                    this.y = 400;
                }
                break;    
        }
    }
}

// Now instantiate your objects.

// Place all enemy objects in an array called allEnemies
const allEnemies = [];

const enemyOne = new Enemy(10, 60, 30);
const enemyTwo = new Enemy(10, 145, 60);
allEnemies.push(enemyOne, enemyTwo);

// Place the player object in a variable called player
const player = new Player(203, 320);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
