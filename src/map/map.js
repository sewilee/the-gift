import GameObject from "../game/game_object";
import Sprite from "../game/sprite";
import Box from "../game/box";
import Item from "../characters/item";
import NPC from "../characters/npc";
import Text from '../characters/text';

class GameMap extends GameObject {
    constructor(mapJSON, mapImg, id) {
        super();
        this.scale = 1;
        this.renderable = new Sprite(mapImg, 1280, 1280, 40, 40, 0, 1600, 0, this.scale);
        this.data = mapJSON;
        this.colliders = [];
        this.cookies = [];
        this.position = [0, 0];
        this.stage = [];
        this.id = id;
        this.camera = {offset: [0, 0]};

        this.drawMap();
    }

    drawMap(){
        if (this.data) {
            this.data.layers.forEach(layer => {
                if (layer.name === "Collisions") {
                    layer.objects.forEach(obj => {
                        this.colliders.push(
                            new Box(obj.x * this.scale, obj.y * this.scale, obj.width * this.scale, obj.height * this.scale));
                    });
                }
                if (layer.name === "Cookies"){
                    layer.objects.forEach((obj, idx) => {
                        let frame = idx % 3;
                        const item = new Item([obj.x, obj.y], [0, 0], "cookie/0", `cookie_${idx}`, frame);
                        this.cookies.push(item);
                    });
                }
                if (layer.name === "Nextstage" || layer.name === "Prevstage" || layer.name === "Death"){
                    layer.objects.forEach(obj => {
                        const box = new Box(obj.x * this.scale, obj.y * this.scale, obj.width * this.scale, obj.height * this.scale);
                        box.id = layer.name;
                        this.stage.push(box);
                    });
                }
                if (layer.name === "NPC"){
                    layer.objects.forEach(obj => {
                        const npc = new NPC(obj.x, obj.y, this.id)
                        this.npc = npc;
                    });
                }
                if (layer.name === "text"){
                    layer.objects.forEach(obj => {
                        const text = new Text([obj.x, obj.y]);
                        this.text = text;
                        // debugger
                    });
                }
            });
        }
    }

    getText(){
        return this.text;
    }

    getNPC(){
        return this.npc;
    }

    getStage(){
        return this.stage;
    }

    getItems(){
        return this.cookies;
    }

    getColliders() {
        return this.colliders;
    }

    draw(ctx) {
        const { offset } = this.camera
        this.data.layers.forEach(layer => {
            if (layer.type === "tilelayer") {
                for (let y = 0; y < this.data.height; y++) {
                    for (let x = 0; x < this.data.width; x++) {
                        this.renderable.frame = layer.data[(y * this.data.width) + x] - 1;
                        ctx.save();
                        ctx.translate(
                            offset[0] + this.position[0] + x * this.renderable.subWidth * this.renderable.scale,
                            offset[1] + this.position[1] + y * this.renderable.subHeight * this.renderable.scale
                        );

                        this.renderable.draw(ctx);
                        ctx.restore();
                    }
                }
            }

        });
        super.draw(ctx);
    }
}

export default GameMap;