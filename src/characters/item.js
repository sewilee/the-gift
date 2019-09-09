import GameObject from '../game/game_object';
import Renderable from '../game/sprite';

class Item extends GameObject{
    constructor(position, offset, effect, id){
        super();
        this.position = position;
        this.offset = offset;
        this.effect = this.itemEffect(effect);
        this.used = false;
        this.id = id;
        const img = "asset/sprites/items/items.png";

        this.renderables = [
            new Renderable(img, 640, 640, 20, 20, 21, 1, 1) //cookies
        ];
    }

    itemEffect(effect){
        let effectObject = {};
        let effectSplit = effect.split("/");

        effectObject.name = effectSplit[0];
        effectObject.health = Number(effectSplit[1]);
        this.image = Number(effectSplit[2]);

        return effectObject;
    }


    draw(ctx){
        super.draw(ctx);
        ctx.save();
        
        // this.movement();

        // ctx.strokeStyle = "blue";
        // ctx.strokeRect(this.position[0] + this.offset[0], this.position[1] + this.offset[1], 64, 64);
        
        ctx.translate(this.position[0] + this.offset[0], this.position[1] + this.offset[1]);
        this.renderables[0].draw(ctx);


        ctx.restore();
    }
}

export default Item;  