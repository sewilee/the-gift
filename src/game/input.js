class Input{
    constructor(){
        this.keysPressed = [];

        document.onkeydown = (e) => {
            if(this.keysPressed[e.code]){
                this.keysPressed.repeat = e.code;
            }
            this.keysPressed[e.code] = true;
        }

        document.onkeyup = (e) => {
            if(e.code === this.keysPressed.repeat){
                this.keysPressed.repeat = null;
            }
            this.keysPressed[e.code] = false;
            
        }
    }

    isKeyPressed(keyCode){
        return this.keysPressed[keyCode];
    }
}

export default Input;