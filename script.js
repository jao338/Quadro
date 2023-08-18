//Initial data

let canDraw = false;
let currentColor = 'black'
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');

//Events

document.querySelectorAll('.color').forEach((item) => {
    item.addEventListener('click', colorClickEvent)
})

screen.addEventListener("mousedown", mouseDownEvent);
screen.addEventListener("mousemove", mouseMoveEvent);
screen.addEventListener("mouseup", mouseUpEvent);

//Functions

function colorClickEvent(e){
    let color = e.target.getAttribute('data-color');

    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function mouseDownEvent(){

    canDraw = true;

}

function mouseMoveEvent(e){

    if(canDraw){
         
        //canDraw();

    }
}

function mouseUpEvent(){

    canDraw = false;

}