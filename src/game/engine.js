// import GameObject from './game_object';
import Input from './input';

class Engine {
    constructor() {
        //grabs canvas by id
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');

        //determines whether scaled images are smoothed
        this.ctx.imageSmoothingEnabled = false;

        //clears canvas
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // this.phyDebug = false;

        this.lastTime = new Date().getTime();

        //
        this.objs = [];

        //stores key inputs
        this.input = new Input;
        // this.gameStart = true;

        window.requestAnimationFrame(this.loop.bind(this));
    }

    addObject(obj) {
        this.objs.push(obj);
        // if (obj instanceof GameObject) {
        //     this.objs.push(obj);
        // }
        // else {
        //     console.error("Invalid object added")
        // }
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
            this.objs.forEach((obj, idx) => {
                    obj.update(this, dt);
                    obj.draw(this.ctx, this.canvas);
            });

            this.lastTime = time;
            window.requestAnimationFrame(this.loop.bind(this));
    }
}

export default Engine;