class Player {
    /**
     * Constructs the player and inits their position   
     * @param {Nunber} x X position for the player to start at
     * @param {Number} y Y position for the player to start at
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0.0;
        this.vy = 0.0;
        this.size = PLAYER_SIZE;
        this.target = null;

        //coffee or food
        this.holding = "nothing";

        this.animation = new Animation();
        this.animation.addFrame("player1", 10);
        this.animation.addFrame("player2", 10);
    }

    /**
     * Update player based on current velocity
     */
    update() {
        this.x += this.vx;
        this.y += this.vy;
        // console.log(this.x/20, this.y/20)
    }

    /**
     * Render the player
     */
    draw() {
        //drawCircle(this.x, this.y, PLAYER_SIZE / 2);
       // drawRect(this.x, this.y, PLAYER_SIZE, PLAYER_SIZE);
       this.animation.draw(
           this.x, this.y, 
           this.vx !== 0 || this.vy !== 0);
    }
}
