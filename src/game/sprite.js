class Sprite {
    constructor(
        image = "assets/images/blue-slime-png-2.png",
        sheetWidth = 64,
        sheetHeight = 64,
        cols = 1,
        rows = 1,
        startFrame = 0,
        frameCount = 0,
        speed = 1,
        scale = 1) {
        
        //create new image and assign it a source
        this.img = new Image();
        this.img.src = image;

        //frame = which sprite index is it at currently
        this.frame = startFrame;
        
        //startFrame = sprite index it starts with (in grid system)
        this.startFrame = startFrame;

        //frameCount = count of frames you want to loop over
        this.frameCount = frameCount;

        //columns and rows of sprite sheet
        this.cols = cols;
        this.rows = rows;

        //sheet size
        this.sheetWidth = sheetWidth;
        this.sheetHeight = sheetHeight;

        //size of each sprite
        this.subWidth = this.sheetWidth / this.cols;
        this.subHeight = this.sheetHeight / this.rows;

        //speed of next frame per 1000ms
        this.speed = speed;
        this.animeTime = new Date().getTime();
        
        //scale of sprite
        this.scale = scale;
    }

    draw(ctx) {
        let t = new Date().getTime();

        //if current time is greater than animated time, increase frame index, reassign animated time for delay
        if (t > this.animeTime) {
            this.frame++;
            this.animeTime = t + 1000 / this.speed;
        }

        //if frame index is greater than start frame + frame count, reassign current frame index to start frame
        if (this.frame > this.startFrame + this.frameCount) {
            this.frame = this.startFrame;
        }

        //position of sprite in sheet
        let posX = (this.frame % this.cols) * this.subWidth;
        let posY = Math.floor(this.frame / this.cols) * this.subHeight;

        //draw 
        ctx.drawImage(this.img, posX, posY, this.subWidth, this.subHeight, 0, 0, this.subWidth * this.scale, this.subHeight * this.scale);
    }

}

export default Sprite;