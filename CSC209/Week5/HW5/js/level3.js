const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 2;
var x;
var y;

// draw circles
function drawCircle() {
    ctx.clearRect(0,0,400,400);
    for (i=0; i < 3; i++) {
        ctx.strokeStyle = randomColor();
        ctx.beginPath();
        randomLocation();
        ctx.arc(x, y, 25, 0, 2 * Math.PI);
        ctx.stroke();
    
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+Math.random()*50, y+Math.random()*50);
        ctx.stroke(); 
    }
}

// Generate random color
function randomColor() {
    var letters = '0123456789ABCDEF';
    var hexColor = '#';
    for (var i = 0; i < 6; i++) {
      hexColor += letters[Math.floor(Math.random() * 16)];
    }
    
    return hexColor;
}

// Generate random location
function randomLocation() {
    randomX();
    randomY();
}
function randomX() {
    x = Math.random() * 400;

    return x;
}
function randomY() {
    y = Math.random() * 400;

    return y;
}