const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 2;

// draw circle 1
ctx.strokeStyle = randomColor();
ctx.beginPath();
ctx.arc(75, 50, 25, 0, 2 * Math.PI);
ctx.stroke();
// draw vector 1
ctx.beginPath();
ctx.moveTo(75,50);
ctx.lineTo(100, 75);
ctx.stroke();

// draw circle 2
ctx.strokeStyle = randomColor();
ctx.beginPath();
ctx.arc(175, 150, 25, 0, 2 * Math.PI);
ctx.stroke();
// draw vector 2
ctx.beginPath();
ctx.moveTo(175,150);
ctx.lineTo(125, 145);
ctx.stroke();

// draw circle 3
ctx.strokeStyle = randomColor();
ctx.beginPath();
ctx.arc(245, 250, 25, 0, 2 * Math.PI);
ctx.stroke();
// draw vector 3
ctx.beginPath();
ctx.moveTo(245,250);
ctx.lineTo(200, 235);
ctx.stroke();

function randomColor() {
    var letters = '0123456789ABCDEF';
    var hexColor = '#';
    for (var i = 0; i < 6; i++) {
      hexColor += letters[Math.floor(Math.random() * 16)];
    }
    
    return hexColor;
}

