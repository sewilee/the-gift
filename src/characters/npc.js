import Sprite from '../game/sprite';
import GameObject from '../game/game_object';

class NPC extends GameObject {
    constructor(x, y, facing) {
        super();
        this.position = [x, y];
        // this.engine = engine;
        // this.offset = offset;

        this.facing = facing;
        this.lastFace = this.facing;

        this.cookies = 0;

        this.createSprites();
    }
    
    createSprites(){
        const moveImg = "asset/sprites/characters/npc.png";
        const scale = 1;

        const moveW = 320;
        const moveH = 196;
        const moveCol = 8;
        const moveRow = 3;
    
        this.renderables = {
            0: new Sprite(moveImg, moveW, moveH, moveCol, moveRow, 16, 1, 2, scale), //cookie
            3: new Sprite(moveImg, moveW, moveH, moveCol, moveRow, 8, 7, 5, scale), //waving
            7: new Sprite(moveImg, moveW, moveH, moveCol, moveRow, 8, 7, 5, scale), //waving
        }
    }

    translate(x, y) {

        let pX = x + this.position[0];
        let pY = y + this.position[1];

        let subWidth = this.renderables[0].subWidth;
        let subHeight = this.renderables[0].subHeight;

        super.translate(x, y);
    }

    draw(ctx) {
        super.draw(ctx);

        ctx.save();
        // ctx.strokeRect(this.position[0], this.position[1], width, height);
        ctx.translate(this.position[0], + this.position[1]);

        this.renderables[this.facing].draw(ctx)

        ctx.restore();
    }
}

export default NPC;

