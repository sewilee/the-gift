import Engine from './engine.js';
import Player from '../characters/player.js';
import Box from './box.js';

class Game {
    constructor() {
        this.run();
    }

    run() {
        let engine = new Engine();

        let floor = new Box(0, 475, engine.canvas.width, 25)
        // debugger
        engine.addObject(floor);

        let player = new Player(0, 400, engine, [0,0]);
        engine.addObject(player);

        engine.update = (dt) => {
            // if (engine.input.isKeyPressed("ArrowUp")) {
            //     console.log("up")
            // }
            // if (engine.input.isKeyPressed("ArrowDown")) {
            //     console.log("down")
            // }
            if (engine.input.isKeyPressed("ArrowLeft")) {
                player.translate(-150 * dt, 0);
                player.facing = 0;
                player.lastFace = 0;
            }
            if (engine.input.isKeyPressed("ArrowRight")) {
                player.translate(150 * dt, 0);
                player.facing = 2;
                player.lastFace = 2;
            }
            if (engine.input.isKeyPressed("Space")){
                player.jump();
            }
            if (!engine.input.isKeyPressed("ArrowLeft") && 
            !engine.input.isKeyPressed("ArrowRight")){
                player.facing = player.lastFace + 1;
            }
        };
    }
}

export default Game;