canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2D");

var mouseEvent = "empty";
var last_position_of_x,last_position_of_y = 0;
color = "black";
width_of_line = 1;

canvas.addEventListener("mouseDown",my_mouseDown);

function my_mouseDown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent= "mouseDown";
};

canvas.addEventListener("mouseUp",my_mouseUp);
 
function my_mouseUp(e){
    mouseEvent = "mouseUp";
};

canvas.addEventListener("mouseLeave",my_mouseLeave);

function my_mouseLeave(e){
    mouseEvent = "mouseLeave";
};

canvas.addEventListener("mouseMove", my_mouseMove);

function my_mouseMove(e){
    current_position_of_mouse_x= e.clientX-canvas.offsetleft;
    current_position_of_mouse_y = e.clientY-canvas.offsettop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width_of_line;

        console.log("Last position of X and Y coordinates =");
        console.log("X = "+last_position_of_x+" Y = "+last_position_of_y);

        ctx.moveTo(last_position_of_x,last_position_of_y);
         
        console.log("Current position of X and Y coordinates =");
        console.log("X = "+current_position_of_mouse_x+" Y = "+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke()
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}