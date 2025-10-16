class Character extends MovableObject
{
    //x, y, img, width, height, imageCache
    y = 220;
    height = 240;
    IMAGES_WALKING = [  '../img/2_character_pepe/2_walk/W-21.png',
                        '../img/2_character_pepe/2_walk/W-22.png',
                        '../img/2_character_pepe/2_walk/W-23.png',
                        '../img/2_character_pepe/2_walk/W-24.png',
                        '../img/2_character_pepe/2_walk/W-25.png',
                        '../img/2_character_pepe/2_walk/W-26.png'
                    ];

    world;

    constructor()
    {
        super();
        this.loadImage('../img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate()
    {
        console.log(this.world);
            setInterval(() => 
            {
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }, 100);
    }
}