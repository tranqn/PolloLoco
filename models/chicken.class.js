class Chicken extends MovableObject
{
    //x, y, img, width, height, imageCache
    y = 390;
    height = 60;
    width = 50;
    IMAGES_WALKING = [   '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
                          '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
                          '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
                      ];
    speed = 0.05 + Math.random() * 0.05;
    constructor()
    {
        super();
        this.loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
        this.x = 200 + Math.random() * 500;
    }

    animate()
    {
        setInterval(() => 
        {
            this.moveLeft();
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);

    }


}