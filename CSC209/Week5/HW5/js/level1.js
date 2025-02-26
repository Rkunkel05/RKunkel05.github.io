const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "black";
ctx.lineWidth = 2;

// draw circle
ctx.beginPath();
ctx.arc(75, 50, 25, 0, 2 * Math.PI);
ctx.stroke();
// draw vector
ctx.beginPath();
ctx.moveTo(75,50);
ctx.lineTo(100, 75);
ctx.stroke();


