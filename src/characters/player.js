import Sprite from '../game/sprite';

class Player extends GameObject {
    constructor(x, y, engine, offset) {
        super();
        this.position = [x, y]
        this.engine = engine;

        this.facing = 0;
        this.lastFace = this.facing;

        const img = "asset/sprites/Kq0m7RP.png";

        this.renderables = [
            new Sprite(img, 144, 192, 3, 4, 3, 3)
        ]
    }

    translate(x, y) {

        let pX = x + this.position[0] + this.offset[0] + this.renderables[0].subWidth / 2;
        let pY = y + this.position[1] + this.offset[1] + this.renderables[0].subHeight - 10;

        super.translate(x, y);
    }

    draw(ctx) {
        super.draw(ctx);
        ctx.save();
        ctx.translate(this.position[0] + this.offset[0], this.position[1] + this.offset[1]);

        // if (this.currentHealth < this.prevHealth) {
        //     this.renderables[this.facing].draw(ctx);
        //     this.prevHealth = this.currentHealth;
        // } else {
        //     this.renderables[this.facing].draw(ctx)
        // }

        this.renderables[this.facing].draw(ctx)

        ctx.restore();
    }
}

export default Player;
