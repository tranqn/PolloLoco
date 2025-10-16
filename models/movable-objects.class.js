class MovableObject
{
    x = 120;
    y = 300;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;

    loadImage(path)
    {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr)
    {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight()
    {
        setInterval(() =>
        {
            this.x += 0.15;
        }, 1000 / 60);
    }

    moveLeft()
    {
        setInterval(() =>
        {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    jump()
    {
        console.log('jump');
    }
}