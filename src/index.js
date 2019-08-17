import Game from './game/game';

window.addEventListener("DOMContentLoaded", () => {
    const welcome = new Welcome(document)
    welcome.playGame();
});

class Welcome {
    constructor(document) {
        this.document = document;
        this.playing = false;
    }

    playGame() {
        return new Game();
    }
}
