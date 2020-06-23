////////////////Variáveis utilizadas
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

//////////////Funções utilizadas

//Criando o corpo do joguinho
function criandoBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

//Criando a cobrinha
function criandoSnake() {
    for (let index = 0; index < snake.length; index++) {
        context.fillStyle = "black";
        context.fillRect(snake[index].x, snake[index].y, box, box);
        
    }
}
criandoBG();
criandoSnake();
