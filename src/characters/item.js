import GameObject from '../game/game_object';
import Renderable from '../game/sprite';

class Item extends GameObject{
    constructor(position, offset, effect, id, frame){
        super();
        this.position = position;
        this.offset = offset;
        this.effect = this.itemEffect(effect);
        this.used = false;
        this.id = id;
        this.frame = frame;
        const img = "asset/sprites/items/items.png";

        this.renderables = [
            new Renderable(img, 640, 640, 20, 20, this.frame, 2, 2) //cookies
        ];

    } 

    itemEffect(effect){
        let effectObject = {};
        let effectSplit = effect.split("/");
        
        effectObject.name = effectSplit[0];
        // effectObject.health = Number(effectSplit[1]);
        this.image = Number(effectSplit[1]);

        return effectObject;
    }


    draw(ctx){
        super.draw(ctx);
        ctx.save();
        
        // this.movement();

        // ctx.strokeStyle = "blue";
        // ctx.strokeRect(this.position[0] + this.offset[0], this.position[1] + this.offset[1], 64, 64);
        
        ctx.translate(this.position[0] + this.offset[0], this.position[1] + this.offset[1]);
        this.renderables[this.image].draw(ctx);


        ctx.restore();
    }
}

export default Item;  