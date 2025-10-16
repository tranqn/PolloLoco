class World
{
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];

    clouds = [
        new Clouds()
    ];

    backgroundObjects = [
        new BackgroundObject('../img/5_background/layers/air.png',0),
        new BackgroundObject('../img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('../img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('../img/5_background/layers/1_first_layer/1.png', 0),
    ];

    canvas;
    ctx;
    keyboard;

    constructor(canvasRef, keyboard)
    {
        this.ctx = canvasRef.getContext('2d');
        this.canvas = canvasRef;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld()
    {
        this.character.world = this;
    }
    draw()
    {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);

        let self = this;
        requestAnimationFrame
        (  
            () =>
            {
                self.draw();
            }
        );
    }

    addObjectsToMap(objects)
    {
        objects.forEach(element => 
        {
            this.addToMap(element);
        });
    }

    addToMap(element)
    {
        this.ctx.drawImage(element.img, element.x, element.y, element.width, element.height);
    }
}