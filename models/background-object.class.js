class BackgroundObject extends MovableObject
{
    //x, y, img, width, height, imageCache
    width = 720;
    height = 480;
    
    constructor(imagePath, x)
    {
        super();
        this.loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}