import GameObject from "../game/game_object";
import Sprite from "../game/sprite";
import Box from "../game/box";

class GameMap extends GameObject {
    constructor(mapJSON, mapImg) {
        super();
        this.scale = 1;
        this.renderable = new Sprite(mapImg, 640, 640, 20, 20, 0, 400, 0, this.scale);
        this.data = mapJSON;
        this.colliders = [];
        this.safeZone = null;
        this.position = [0, 0];
        this.camera = {offset: [0, 0]};

        if (this.data) {
            this.data.layers.forEach(layer => {
                if (layer.name === "collisions") {
                    layer.objects.forEach(obj => {
                        this.colliders.push(
                            new Box(obj.x * this.scale, obj.y * this.scale, obj.width * this.scale, obj.height * this.scale));
                    });
                }
            });
        }
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