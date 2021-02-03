var mouseEvent = "empty";
var last_position_of_mouse_y, last_position_of_mouse_x;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var color = "black";
var line_Width = 1;

canvas.addEventListener("mousedown", myMousedown);
function myMousedown(e){
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", myMousemove);
function myMousemove(e){
    var current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;

if(mouseEvent == "mouseDown"){

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_Width;

    console.log("This is the last X and Y poisition = ");
    console.log("x ="+ last_position_of_mouse_x + "y ="+ last_position_of_mouse_y);
    ctx.moveTo(last_position_of_mouse_x, last_position_of_mouse_y);

    console.log("This is the current X and Y position = ");
    console.log("x ="+ current_position_of_mouse_x +"y ="+ current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
}
last_position_of_mouse_x = current_position_of_mouse_x;
last_position_of_mouse_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", myMouseup);
function myMouseup(e){
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", myMouseleave);
function myMouseleave(e){
    mouseEvent = "mouseLeave";
}