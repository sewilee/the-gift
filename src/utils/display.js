export const displayCookies = (cookieNum) => {
    const canvas = document.getElementById("canvas-items")
    const ctx = canvas.getContext('2d');

    const cookieIMG = new Image();
    cookieIMG.src = "asset/sprites/items/items.png";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(cookieIMG, 32, 0, 32, 32, 32, 0, 32, 32)
    ctx.font = "20px Georgia";
    ctx.fillText(cookieNum, 80, 20);
};