class Input{
    constructor(){
        this.keysPressed = [];

        document.onkeydown = (e) => {
            this.keysPressed[e.code] = true;
        }

        document.onkeyup = (e) => {
            this.keysPressed[e.code] = false;
        }
    }

    isKeyPressed(keyCode){
        return this.keysPressed[keyCode];
    }
}

export default Input;