class Box{
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
    }

    isInside(x, y, w = 0, h = 0) {
        let inX = ((this.x + this.w) > x) && (this.x < (x + w));
        let inY = ((this.y + this.h) > y) && (this.y < (y + h));
        // let inX = (this.x < x && x < (this.x + this.w));
        // let inY = (this.y < y && y < (this.y + this.h));

        return inX && inY;
    }

    draw(ctx) {
        ctx.strokeStyle = "red";
        // ctx.strokeRect(20, 20, 150, 100);
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    }
}

export default Box;