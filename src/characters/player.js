import Sprite from '../game/sprite';
import GameObject from '../game/game_object';

class Player extends GameObject {
    constructor(x, y, engine) {
        super();
        this.position = [x, y];
        this.engine = engine;
        // this.offset = offset;

        this.jumped = false;
        this.jumpY = null;

        this.gravitySpeed = 5;
        this.jumpVelcity = 0;

        this.facing = 0;
        this.lastFace = this.facing;
        this.falling = false;

        const img = "asset/sprites/characters/bunny_player.png";
        const sheetWidth = 448;
        const sheetHeight = 240;
        const cols = 7;
        const rows = 3;
        const scale = 1;


        this.renderables = [
            new Sprite(img, sheetWidth, sheetHeight, cols, rows, 0, 6, 25, scale), //left
            new Sprite(img, sheetWidth, sheetHeight, cols, rows, 7, 6, 25, scale), //right
            new Sprite(img, sheetWidth, sheetHeight, cols, rows, 14, 6, 2, scale), //still
            new Sprite(img, sheetWidth, sheetHeight, cols, rows, 21, 0, 1, scale), //falling
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
        let subHeight = this.renderables[0].subHeight;
        
        let collider = this.engine.getCollision(pX, pY, subWidth, subHeight);
        
        if(collider){
            x = 0;
            y = 0;
            this.jumped = false;
            this.falling = false;
            this.jumpY = null;
        }

        if(this.jumpY && this.position[1] > this.jumpY + 5){
            // debugger
            this.falling = true;
        }

        super.translate(x, y);
    }

    gravity(){
        if(this.jumpVelcity > 0){
            this.jumpVelcity--
            // this.falling = true;
        } else {
            this.jumpVelcity = 0;
            // this.falling = false;
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

