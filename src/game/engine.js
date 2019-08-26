import GameObject from './game_object';
import Player from '../characters/player';
import Input from './input';
import Box from './box';

class Engine {
    constructor() {
        //grabs canvas by id
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');

        //determines whether scaled images are smoothed
        this.ctx.imageSmoothingEnabled = false;

        //clears canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.phyDebug = false;

        this.lastTime = new Date().getTime();

        //
        this.objs = [];
        this.colliders = [];

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

    addColliders(colliders) {
        colliders.forEach(collider => {
            if (collider instanceof Box) {
                this.colliders.push(collider);
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