import GameObject from './game_object';
import Input from './input';
import Box from './box';
import Item from '../characters/item';
import { displayCookies } from '../utils/display';
import { createNextStage } from '../utils/create';

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
        this.map;
        this.player;

        this.resetPos;

        this.colliders = [];
        this.items = {};

        //stores key inputs
        this.input = new Input;
        // this.gameStart = true;
        window.requestAnimationFrame(this.loop.bind(this));
    }

    newStage(){
        this.colliders = [];
        this.items = {};
        this.objs = [];
        this.addObject(this.player);
        this.player.nextStage = false;

       return createNextStage(this);
    }

    resetStage(){

        this.player.position = [this.resetPos[0], this.resetPos[1]];
        this.player.cookies = 0;
        this.player.nextStage = false;
        this.stage = this.map.stage;

        return;
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

    getNextStage(x, y, w, h){
        let value = false;
        if(this.stage){
            const { stage } = this;
            for(let i = 0; i < stage.length; i++){
                const result = stage[i].isInside(x, y, w, h);
                if (result === true){
                    value = stage[i];
                    return value;
                }
            }
        }
        return value;

        // if(this.prevStage){
        //     let result = this.prevStage.isInside(x, y, w, h);
        //     if (result === true) {
        //         value = true;
        //     }
        // }
        
        // return value;
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

        return value;
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

            if(this.player.nextStage){
                this.stage = this.player.nextStage;
                if(this.stage.id === "Death"){
                    this.resetStage();
                } else {
                    this.newStage();
                }
            }

            displayCookies(this.player.cookies);

            //do drawing here
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.map.draw(this.ctx, this.canvas);
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