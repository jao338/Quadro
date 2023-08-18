//Initial data

let canDraw = false;
let currentColor = 'black'
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');
let mouseX = 0;
let mouseY = 0;

//Events

document.querySelectorAll('.color').forEach((item) => {
    item.addEventListener('click', colorClickEvent)
})

screen.addEventListener("mousedown", mouseDownEvent);
screen.addEventListener("mousemove", mouseMoveEvent);
screen.addEventListener("mouseup", mouseUpEvent);
document.querySelector('.clear').addEventListener('click', clearScreen)
document.querySelector('.save').addEventListener('click', saveScreen)

//Functions

function colorClickEvent(e){
    let color = e.target.getAttribute('data-color');

    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function mouseDownEvent(e){

    canDraw = true;

    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e){

    if(canDraw){
         
        draw(e.pageX, e.pageY);

    }
}

function mouseUpEvent(){


    canDraw = false;

}

function draw(x, y){

    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.strokeStyle = currentColor;
    ctx.stroke();


    mouseX = pointX;
    mouseY = pointY;
}

function clearScreen(){
    ctx.setTransform(1,0,0,1,0,0)
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
}

function saveScreen(event){

    const link = document.createElement('a');

    link.download = 'download';
    link.href = screen.toDataURL('image/jpeg', 1.0); 
    link.click();
    link.delete;
}

// Em "link.href = screen.toDataURL('image/jpeg', 1.0);", o segundo parâmetro define a qualidade da imagem, variando de 0 a 1 e caso o valor que foi passado não esteja entre 0 e 1, um valor padrão é 0.92 assumido.


// Em "link.href = screen.toDataURL('image/jpeg', 1.0);", o primeiro parâmetro define o tipo de dado e a extensão.
