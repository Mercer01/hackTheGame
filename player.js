class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0.0;
        this.vy = 0.0;
        this.size = PLAYER_SIZE;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
    }

    draw() {
        drawCircle(this.x, this.y, PLAYER_SIZE);
    }
}