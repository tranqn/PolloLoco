let canvasRef;
let world;
let keyboard = new Keyboard();

function init()
{
    canvasRef = document.getElementById("canvas");
    world = new World(canvasRef, keyboard);


    console.log('My Character is ', world.character);
}

window.addEventListener("keydown", (e) => {
    switch(e.key)
    {
        case "ArrowRight":
            keyboard.RIGHT = true;
            break;
        case "ArrowLeft":
            keyboard.LEFT = true;
            break;
        case "ArrowUp":
            keyboard.UP = true;
            break;
        case "ArrowDown":
            keyboard.DOWN = true;
            break;
        case " ":
            keyboard.SPACE = true;
            break;
    }
});

window.addEventListener("keyup", (e) => {
    switch(e.key)
    {
        case "ArrowRight":
            keyboard.RIGHT = false;
            break;
        case "ArrowLeft":
            keyboard.LEFT = false;
            break;
        case "ArrowUp":
            keyboard.UP = false;
            break;
        case "ArrowDown":
            keyboard.DOWN = false;
            break;
        case " ":
            keyboard.SPACE = false;
            break;
    }
});
