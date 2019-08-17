import Engine from './engine.js';

class Game {
    constructor() {
        this.run();
    }

    run() {
        let engine = new Engine();

        engine.update = (dt) => {
            if (engine.input.isKeyPressed("ArrowUp")) {
                console.log("up")
            }
            if (engine.input.isKeyPressed("ArrowDown")) {
                console.log("down")
            }
            if (engine.input.isKeyPressed("ArrowLeft")) {
                console.log("left")
            }
            if (engine.input.isKeyPressed("ArrowRight")) {
                console.log("right")
            }
        };
    }
}

export default Game;