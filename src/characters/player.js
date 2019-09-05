import Sprite from '../game/sprite';
import GameObject from '../game/game_object';

class Player extends GameObject {
    constructor(x, y, engine) {
        super();
        this.position = [x, y];
        this.engine = engine;
        // this.offset = offset;

        this.jumped = false;
        this.fallY = null;

        this.gravitySpeed = 5;
        this.jumpVelcity = 0;

        this.facing = 0;
        this.lastFace = this.facing;
        this.falling = false;
        this.collided = false;

        this.createSprites();
    }
    
    createSprites(){
        const moveImg = "asset/sprites/characters/bunny_player_moves.png";
        const scale = 1;

        const moveW = 280;
        const moveH = 320;
        const moveCol = 7;
        const moveRow = 4;
    
        this.renderables = [
            new Sprite(moveImg, moveW, moveH, moveCol, moveRow, 0, 6, 25, scale), //0 left
            new Sprite(moveImg, moveW, moveH, moveCol, moveRow, 7, 6, 25, scale), //1 right
            new Sprite(moveImg, moveW, moveH, moveCol, moveRow, 14, 6, 2, scale), //2 still with cookie
            new Sprite(moveImg, moveW, moveH, moveCol, moveRow, 23, 1, 2, scale), //3 standing left
            new Sprite(moveImg, moveW, moveH, moveCol, moveRow, 21, 1, 2, scale), //4 standing right
            new Sprite(moveImg, moveW, moveH, moveCol, moveRow, 25, 1, 5, scale), //5 falling
        ]
    }

    jump(){
        if(this.jumped === false){
            this.fallY = this.position[1];
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
        
        this.collided = false;
        let collider = this.engine.getCollision(pX, pY, subWidth, subHeight);
        
        if(collider){
            if(this.position[1] > collider.y + collider.h){
                y = 0;
            } else if(  this.position[0] > collider.x + collider.w || 
                        this.position[0] + subWidth < collider.x) {
                x = 0;
            } else {
                x = 0;
                y = 0;
                this.jumped = false;
                this.falling = false;
                this.fallY = null;
                this.collided = true;
            }
        }

        if(this.fallY && this.position[1] > this.fallY + 80){
            this.falling = true;
        }

        super.translate(x, y);
    }

    gravity(){
        const currentTime = new Date().getTime();
        
        if(this.collided){
            this.falling = false;
            this.fallY = null;
        } else if(!this.jumped && currentTime > this.lastTime + 500) {
            this.lastTime = currentTime;
            this.fallY = this.position[1];
        }

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

        this.renderables[this.facing].draw(ctx)

        ctx.restore();
    }
}

export default Player;

