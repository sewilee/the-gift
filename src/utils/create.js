import GameMap from '../map/map';


export function createNextStage(engine){
    let stageNum = Number(engine.map.id);
    let pX;

    if(engine.stage.id === "Prevstage"){
        stageNum -= 1;
        pX = 800;
    } else if (engine.stage.id === "Nextstage"){
        stageNum += 1;
        pX = 10;
    }

    const stage = require(`../../asset/sprites/maps/stage${stageNum}.json`);

    let map = new GameMap(stage, "asset/sprites/maps/stage-tileset.png", stageNum);
    engine.map = map;
    engine.addItems(map.getItems());
    engine.addColliders(map.getColliders());

    engine.stage = map.stage;
    const { position } = engine.player;
    const y = position[1];
    engine.player.position = [pX, y];
}