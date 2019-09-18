import Engine from './engine.js';
import Player from '../characters/player.js';
// import Camera from './camera';
import GameMap from '../map/map';

const mapJson = require('../../asset/sprites/maps/stage4.json');

class Game {
    constructor() {
        this.run();
    }

    run() {
        let engine = new Engine();
        // let camera = new Camera([document.getElementById("canvas").width, document.getElementById("canvas").height]);

        // engine.phyDebug = true;
        let map = new GameMap(mapJson, "asset/sprites/maps/stage-tileset.png", 4);
        engine.map = map;
        engine.addItems(map.getItems());
        engine.addColliders(map.getColliders());
        engine.addObject(map.getText());
        engine.stage = map.stage;

        // engine.offset = camera.offset;

        let player = new Player(10, 0, engine);
        player.character = "bunny";
        engine.resetPos = [10, 0];
        engine.addObject(player);
        engine.player = player;

        engine.update = (dt) => {
            if (engine.input.isKeyPressed("ArrowLeft")) {
                player.translate(-150 * dt, 0);
                player.facing = 0;
                player.lastFace = 3;
            }
            if (engine.input.isKeyPressed("ArrowRight")) {
                player.translate(150 * dt, 0);
                player.facing = 1;
                player.lastFace = 4;
            }
            if (engine.input.keysPressed.repeat !== "Space" && engine.input.isKeyPressed("Space")){
                player.jump();
            }
            if (player.falling){
                player.facing = 5;
            }
            else if (!engine.input.isKeyPressed("ArrowLeft") && 
            !engine.input.isKeyPressed("ArrowRight")){
                player.facing = 2;
                player.lastFace = 2;
            }
        };
    }
}

export default Game;