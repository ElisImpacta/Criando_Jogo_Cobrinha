////////////////Variáveis utilizadas
let canvas = document.getElementById("quadro");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
//Iniciando a direção da cobrinha para a direita
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
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

//Desenhando a comida e fazendo elas aparecerem
function criandoFood(){
    context.fillStyle = "pink"
    context.fillRect(food.x, food.x, box, box);
}

//Chamando os botões do teclado
document.addEventListener("keydown", tecla);

//Criando o evento de tecla = Direita, esquerda, cima e baixo
function tecla(event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "up") direction = "down";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "down") direction = "up";
}

//Função de inicializar e atualizar o jogo
function iniciandoGame(){
//Se a cobrinha passar da parede, aparecerá do outro lado, o mesmo ocorre cima e baixo;
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "up") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "down") snake[0].y = 16 * box;

    criandoBG();
    criandoSnake();
    criandoFood();
    
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