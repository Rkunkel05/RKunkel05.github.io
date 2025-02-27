const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 2;
let circles = [];
const NRSTEPS = 100;

// create a class for the cirlces
class Circle {
    constructor(x, y, vx, vy, color) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
    }

     draw() {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 25, 0, 2*Math.PI);
        ctx.stroke();
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy
    
        // bounce
        if (this.x <= 25 || this.x >= 375) this.vx *= -1;
        if (this.y <= 25 || this.y >= 375) this.vy *= -1;
    }
}

function drawCircle() {
    // clear canvas
    ctx.clearRect(0,0, 400, 400);
    // reset array 
    circles = [];

    let NRPTS = document.getElementById("NRPTS").value;

    for (i=0; i < NRPTS; i++) {
        // define x & y so they're inside bounds
        let x = Math.random() * 350 + 25;
        let y = Math.random() * 350 + 25;
        // velocity between -2 and 2
        let vx = (Math.random()  - 0.5) * 4;
        let vy = (Math.random()  - 0.5) * 4;

        let color = randomColor();

        // add new circle to array
        circles.push(new Circle(x, y, vx, vy, color));
    }

    animateCircles();
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

function animateCircles() {
    let step = 0;

    let intervalId = setInterval(() => {
        // stop after NRSTEPS 
        if (step >= NRSTEPS) {
            clearInterval(intervalId);
            return;
        }
    
        // clear canvas
    ctx.clearRect(0, 0, 400,400);

    // update & redraw each circle in array 
    circles.forEach(circle => {
        circle.update();
        circle.draw();
    })

    step++;
    })
}