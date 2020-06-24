////////////////Variáveis utilizadas
let canvas = document.getElementById("quadro");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

//////////////Funções utilizadas

//Criando o corpo do joguinho / quadro
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

//Função de inicializar e atualizar o jogo
function iniciandoGame(){
    criandoBG();
    criandoSnake();
    
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY += box;
    if(direction == "down") snakeY -= box;

    snake.pop();

    let novaCabeca = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(novaCabeca);

}

let jogo = setInterval(iniciandoGame, 100);