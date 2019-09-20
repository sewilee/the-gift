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
        this.character;

        this.falling = false;
        this.collided = false;
        this.nextStage = false;

        this.cookies = 0;
        this.key = 0;

        this.createSprites();
    }
    
    createSprites(){
        const scale = 1;

        const bunnyImg = "asset/sprites/characters/bunny_player_moves.png";
        const bunnyW = 280;
        const bunnyH = 320;
        const bunnyCol = 7;
        const bunnyRow = 4;

        const bankImg = "asset/sprites/characters/banker_player_moves.png";
        const bankW = 280;
        const bankH = 320;
        const bankCol = 7;
        const bankRow = 4;

        const fireImg = "asset/sprites/characters/fire_player_moves.png";
        const fireW = 280;
        const fireH = 320;
        const fireCol = 7;
        const fireRow = 4;

        this.renderables = {
            bunny: [
                new Sprite(bunnyImg, bunnyW, bunnyH, bunnyCol, bunnyRow, 0, 6, 25, scale), //0 left
                new Sprite(bunnyImg, bunnyW, bunnyH, bunnyCol, bunnyRow, 7, 6, 25, scale), //1 right
                new Sprite(bunnyImg, bunnyW, bunnyH, bunnyCol, bunnyRow, 14, 6, 2, scale), //2 still with cookie
                new Sprite(bunnyImg, bunnyW, bunnyH, bunnyCol, bunnyRow, 23, 1, 2, scale), //3 standing left
                new Sprite(bunnyImg, bunnyW, bunnyH, bunnyCol, bunnyRow, 21, 1, 2, scale), //4 standing right
                new Sprite(bunnyImg, bunnyW, bunnyH, bunnyCol, bunnyRow, 25, 1, 5, scale), //5 falling
            ],
            banker: [
                new Sprite(bankImg, bankW, bankH, bankCol, bankRow, 0, 5, 5, scale), //0 left
                new Sprite(bankImg, bankW, bankH, bankCol, bankRow, 7, 5, 5, scale), //1 right
                new Sprite(bankImg, bankW, bankH, bankCol, bankRow, 14, 1, 2, scale), //2 still with cookie
                new Sprite(bankImg, bankW, bankH, bankCol, bankRow, 1, 0, 5, scale), //3 standing left
                new Sprite(bankImg, bankW, bankH, bankCol, bankRow, 7, 0, 5, scale), //4 standing right
                new Sprite(bankImg, bankW, bankH, bankCol, bankRow, 16, 1, 5, scale) //5 falling
            ],
            fireFighter: [
                new Sprite(fireImg, fireW, fireH, fireCol, fireRow, 0, 3, 5, scale), //0 left
                new Sprite(fireImg, fireW, fireH, fireCol, fireRow, 7, 3, 5, scale), //1 right
                new Sprite(fireImg, fireW, fireH, fireCol, fireRow, 14, 1, 2, scale), //2 still with cookie
                new Sprite(fireImg, fireW, fireH, fireCol, fireRow, 1, 0, 5, scale), //3 standing left
                new Sprite(fireImg, fireW, fireH, fireCol, fireRow, 7, 0, 5, scale), //4 standing right
                new Sprite(fireImg, fireW, fireH, fireCol, fireRow, 16, 1, 5, scale) //5 falling
            ]
        }
    
        // this.renderables = [
        //     new Sprite(bunnyImg, bunnyW, bunnyH, bunnyCol, bunnyRow, 0, 6, 25, scale), //0 left
        //     new Sprite(bunnyImg, bunnyW, bunnyH, bunnyCol, bunnyRow, 7, 6, 25, scale), //1 right
        //     new Sprite(bunnyImg, bunnyW, bunnyH, bunnyCol, bunnyRow, 14, 6, 2, scale), //2 still with cookie
        //     new Sprite(bunnyImg, bunnyW, bunnyH, bunnyCol, bunnyRow, 23, 1, 2, scale), //3 standing left
        //     new Sprite(bunnyImg, bunnyW, bunnyH, bunnyCol, bunnyRow, 21, 1, 2, scale), //4 standing right
        //     new Sprite(bunnyImg, bunnyW, bunnyH, bunnyCol, bunnyRow, 25, 1, 5, scale), //5 falling
        // ]
    }

    jump(){
        if(this.jumped === false){
            this.fallY = this.position[1];
            this.jumped = true;
            this.jumpVelcity = 15;
            this.translate(0, -55);
        }
    }

    translate(x, y) {
        let pX = x + this.position[0];
        let pY = y + this.position[1];

        let subWidth = this.renderables[this.character][0].subWidth;
        let subHeight = this.renderables[this.character][0].subHeight - 5;
        
        this.collided = false;
        let collider = this.engine.getCollision(pX, pY, subWidth, subHeight);
        let itemCollide = this.engine.getItems(pX, pY, subWidth, subHeight);
        let nextStageCollide = this.engine.getNextStage(pX, pY, subWidth, subHeight);
        let npcCollide = this.engine.getNPC(pX, pY, subWidth, subHeight);

        if(collider){
            if(this.position[1] >= collider.y + collider.h){
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

        if(nextStageCollide){
            this.nextStage = nextStageCollide;
        }

        if(itemCollide){
            this.cookies += 1;
        }

        if(npcCollide){
            this.npc = true;
        }

        if(this.fallY && this.position[1] > this.fallY + 50){
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

        // const width = this.renderables[0].subWidth;
        // const height = this.renderables[0].subHeight;
        ctx.save();
        // ctx.strokeRect(this.position[0], this.position[1], width, height);
        ctx.translate(this.position[0], + this.position[1]);

        this.renderables[this.character][this.facing].draw(ctx)

        ctx.restore();
    }
}

export default Player;

