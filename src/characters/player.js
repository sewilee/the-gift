import Sprite from '../game/sprite';
import GameObject from '../game/game_object';

class Player extends GameObject {
    constructor(x, y, engine) {
        super();
        this.position = [x, y];
        this.engine = engine;
        // this.offset = offset;

        this.jumped = false;

        this.gravitySpeed = 5;
        this.jumpVelcity = 0;

        this.facing = 0;
        this.lastFace = this.facing;

        const img = "asset/sprites/Kq0m7RP.png";

        this.renderables = [
            new Sprite(img, 144, 192, 3, 4, 3, 2, 13), //left
            new Sprite(img, 144, 192, 3, 4, 3, 0, 13), //left still
            new Sprite(img, 144, 192, 3, 4, 6, 2, 13), //right
            new Sprite(img, 144, 192, 3, 4, 6, 0, 13), //right still
        ]
    }

    jump(){
        if(this.jumped === false){
            this.jumpY = this.position[1];
            this.jumped = true;
            this.jumpVelcity = 15;
            this.translate(0, -50);
        }
    }

    translate(x, y) {
        let pX = x + this.position[0];
        let pY = y + this.position[1];

        let subWidth = this.renderables[0].subWidth;
        let subHeight = this.renderables[0].subHeight
        
        let collider = this.engine.getCollision(pX, pY, subWidth, subHeight);
        
        if(collider){
            x = 0;
            y = 0;
            this.jumped = false;
        }

        super.translate(x, y);
    }

    gravity(){
        if(this.jumpVelcity > 0){
            this.jumpVelcity--
        } else {
            this.jumpVelcity = 0;
        }
        this.translate(0, this.gravitySpeed - this.jumpVelcity);
    }

    draw(ctx) {
        super.draw(ctx);

        this.gravity();

        ctx.save();
        // ctx.strokeRect(this.position[0], this.position[1], 48, 48);
        ctx.translate(this.position[0], + this.position[1]);

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

