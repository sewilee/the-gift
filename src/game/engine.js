import GameObject from './game_object';
import Input from './input';
import Box from './box';
import Item from '../characters/item';
import { displayCookies, displayKey } from '../utils/display';
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
        this.npc = {};
        this.pictures = {};

        //stores key inputs
        this.input = new Input;
        // this.gameStart = true;
        window.requestAnimationFrame(this.loop.bind(this));
    }

    showConversation(){
        const canvas = document.getElementById("canvas-conversation");
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const { pictures, player, npc, map } = this;

        let img = new Image();
        console.log(map.id);
        if(pictures[map.id]){
            img.src = pictures[map.id];
        } else {
            img.src = `asset/sprites/maps/stage${map.id}_trade.png`
        }
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };

        document.addEventListener('keypress', (e) => {
            e.preventDefault();
            if(this.map.id === 10){
                if(this.showNPC && e.code === "KeyY" && player.key === 3){
                    player.key -= 3;
                    npc[this.map.id].keys += 3;
                    img.src = `asset/sprites/maps/stage${this.map.id}_pic.png`;
                    pictures[this.map.id] = img.src;
    
                    img.onload = function () {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(img, 0, 0);
                    };
    
                    this.showNPC = false;
                }
                if (this.showNPC && e.code === "KeyY" && npc[this.map.id].keys === 0) {
                    img.src = `asset/sprites/maps/stage${this.map.id}_cry.png`;
                    img.onload = function () {
                        ctx.drawImage(img, 0, 0);
                    };
                    this.showNPC = false;
                }
            }
            if (this.showNPC && e.code === "KeyY" && player.cookies >= 30){
                player.cookies -= 30;
                player.key += 1;
                npc[this.map.id].cookies += 30;
                img.src = `asset/sprites/maps/stage${this.map.id}_pic.png`;
                pictures[this.map.id] = img.src;
                
                img.onload = function () {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0);
                };
                
                if(this.map.id === 3){
                    player.character = "banker";
                } else if (this.map.id === 7){
                    player.character = "fireFighter";
                }
                npc[this.map.id].facing = 0;

                this.showNPC = false;
            }

            if (this.showNPC && e.code === "KeyY" && npc[this.map.id].cookies === 0){
                img.src = `asset/sprites/maps/stage${this.map.id}_cry.png`;
                img.onload = function () {
                    ctx.drawImage(img, 0, 0);
                };
                this.showNPC = false;
            }

            if (e.code !== "KeyY"){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        });
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
    }

    addObject(obj) {
        if (obj instanceof GameObject) {
            this.objs.push(obj);
        }
    }

    addNPC(npc){
        if(npc){
            if(this.npc[this.map.id]){
                this.objs.push(this.npc[this.map.id]);
            } else {
                this.objs.push(npc);
                this.npc[this.map.id] = npc;
            }
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

    getNPC(x, y, w, h){
        let value = false;
        const npc = this.npc[this.map.id];
        if(npc){
            const npcBox = new Box(npc.position[0], npc.position[1], 32, 64);
            const result = npcBox.isInside(x + 10, y, w - 20, h);
            if(result === true){
                value = npc;
            }
        }

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

        if (this.player.npc && this.input.isKeyPressed("ArrowUp")){
                this.showNPC = true;
                this.showConversation();
            }

            if(this.player.nextStage){
                this.stage = this.player.nextStage;
                if(this.stage.id === "Death"){
                    this.resetStage();
                } else {
                    this.newStage();
                }
            }

            displayCookies(this.player.cookies, this.player.key);
            // displayKey(this.player.key);

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