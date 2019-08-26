class Camera{
    constructor(screen = [0, 0]){
        this.screen = screen;
        this.offset = [0, 0];
    }

    update(pX, pY){
        
        this.offset[0] = Math.floor((this.screen[0] / 2) - pX);
        this.offset[1] = Math.floor((this.screen[1] / 2) - pY);
    }
}

export default Camera;