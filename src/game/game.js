import Engine from './engine.js';
import Player from '../characters/player.js';

class Game {
    constructor() {
        this.run();
    }

    run() {
        let engine = new Engine();

        let player = new Player(0, 0, engine, [0,0]);
        engine.addObject(player);

        engine.update = (dt) => {
            // if (engine.input.isKeyPressed("ArrowUp")) {
            //     console.log("up")
            // }
            // if (engine.input.isKeyPressed("ArrowDown")) {
            //     console.log("down")
            // }
            if (engine.input.isKeyPressed("ArrowLeft")) {
                console.log("left")
                player.facing = 0;
            }
            if (engine.input.isKeyPressed("ArrowRight")) {
                console.log("right")
                player.facing = 1;
            }
        };
    }
}

export default Game;