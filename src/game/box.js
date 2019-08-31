class Box{
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
    }

    isInside(cX, cY, cW, cH) {
        let inX = (cX + cW >= this.x) && (cX <= this.x + this.w);
        let inY = (cY + cH >= this.y) && (cY <= this.y + this.h);
        // debugger
        return inX && inY;
    }

    draw(ctx) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    }

}

export default Box;