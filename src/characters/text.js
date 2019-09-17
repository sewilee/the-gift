import GameObject from '../game/game_object';
import Renderable from '../game/sprite';

class Text extends GameObject{
    constructor(position){
        super();
        this.position = position;
        this.image = 0;
        const img = "asset/sprites/items/text.png";

        this.renderables = [
            new Renderable(img, 320, 196, 4, 3, 0, 0, 1, 1),
        ];

    } 


    draw(ctx){
        super.draw(ctx);
        ctx.save();
        
        // this.movement();

        // ctx.strokeStyle = "blue";
        // ctx.strokeRect(this.position[0] + this.offset[0], this.position[1] + this.offset[1], 64, 64);
        
        ctx.translate(this.position[0], this.position[1]);
        this.renderables[this.image].draw(ctx);


        ctx.restore();
    }
}

export default Text;  