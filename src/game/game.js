import Engine from './engine.js';
import Player from '../characters/player.js';
// import Box from './box.js';
// import Camera from './camera';
import GameMap from '../map/map';

const mapJson = require('../../asset/sprites/maps/stage_01.json');

class Game {
    constructor() {
        this.run();
    }

    run() {
        let engine = new Engine();
        // let camera = new Camera([document.getElementById("canvas").width, document.getElementById("canvas").height]);

        // engine.phyDebug = true;
        let map = new GameMap(mapJson, "asset/sprites/maps/gift_tileset.png");
        engine.addObject(map);
        engine.addColliders(map.getColliders());

        // engine.offset = camera.offset;

        let player = new Player(0, 0, engine);
        engine.addObject(player);

        engine.update = (dt) => {
            if (engine.input.isKeyPressed("ArrowLeft")) {
                player.translate(-150 * dt, 0);
                player.facing = 0;
                player.lastFace = 0;
            }
            if (engine.input.isKeyPressed("ArrowRight")) {
                player.translate(150 * dt, 0);
                player.facing = 1;
                player.lastFace = 1;
            }
            if (engine.input.isKeyPressed("Space")){
                player.jump();
            }
            if (player.falling){
                player.facing = 3;
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