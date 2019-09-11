import GameObject from './game_object';
import Player from '../characters/player';
import Input from './input';
import Box from './box';
import Item from '../characters/item';

class Engine {
    constructor() {
        //grabs canvas by id
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');

        //determines whether scaled images are smoothed
        this.ctx.imageSmoothingEnabled = false;

        //clears canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //showing collisions
        // this.phyDebug = false;

        this.lastTime = new Date().getTime();

        //
        this.objs = [];
        this.colliders = [];
        this.items = {};

        //stores key inputs
        this.input = new Input;
        // this.gameStart = true;

        window.requestAnimationFrame(this.loop.bind(this));
    }

    addObject(obj) {
        if (obj instanceof GameObject) {
            this.objs.push(obj);
        }
    }

    addItems(items){
        items.forEach(item => {
            this.objs.push(item);
            this.items[item.id] = item;
        });
    }

    addColliders(colliders) {
        colliders.forEach(collider => {
            if (collider instanceof Box) {
                this.colliders.push(collider);
            }
        });
    }

    getItems(x, y, w, h){
        let value = false;
        const items = Object.values(this.items);
        items.forEach(item => {
            let itemBox = new Box(item.position[0], item.position[1], 32, 32);
            let result = itemBox.isInside(x, y, w, h);
            if (result === true){
                value = item;
                item.used = true;
            }
        });
    }

    getCollision(x, y, w, h) {
        let value = false;
        this.colliders.forEach(collider => {
            let result = collider.isInside(x, y, w, h);
            if (result === true) {
                value = collider;
            }
        });
        return value;
    }

    loop() {
            let time = new Date().getTime();
            let dt = (time - this.lastTime) / 1000;

            //do update here
            if (this.update) {
                this.update(dt);
            }

            //do drawing here
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            // debugger
            this.objs.forEach((obj, idx) => {
                if (obj instanceof Item && obj.used === true) {
                    this.objs.splice(idx, 1);
                    delete this.items[obj.id];
                }
                    obj.update(this, dt);
                    obj.draw(this.ctx, this.canvas);
            });

            this.colliders.forEach((obj, idx) => {
                obj.draw(this.ctx, this.canvas);
            });

            this.lastTime = time;
            window.requestAnimationFrame(this.loop.bind(this));
    }
}

export default Engine;