let canvas = document.getElementById("fundo");
let context = canvas.getcontext("2d");
let box = 32;

function criandoBG(){
    context.fillstyle = "green";
    context.fillRect(0, 0, 16 * box, 16 * box);
}
criandoBG();
