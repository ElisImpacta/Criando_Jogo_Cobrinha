//Variáveis utilizadas
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;


//Funções utilizadas
function criandoBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criandoBG();

