const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 2;
let circles = [];
const NRSTEPS = 100;

function drawCircle() {
    ctx.clearRect(0,0,400,400);
    let NRPTS = document.getElementById("NRPTS").value;

    circles = [];
    
    for (i=0; i < NRPTS; i++) {
        let x = randomX();
        let y = randomY();
        let vX = randomVelocity();
        let vY = randomVelocity();

        // create new object
        circles.push({
            x: x,
            y: y,
            vx: vX,
            vy: vY, 

            // update position depending on vx and vy
            // function inside object! \/
            update: function() {
                this.x += this.vx;
                this.y += this.vy;

                //reverse velocity if collision
                if (this.x >= 400 || this.x <= 0) this.vx = -this.vx;
                if (this.y >= 400 || this.y <= 0) this.vy = -this.vy;
            },

            draw: function() {
                //circle 
                ctx.strokeStyle = randomColor();
                ctx.beginPath();
                ctx.arc(this.x, this.y, 25, 0, 2 * Math.PI);
                ctx.stroke();

                //velocity
                ctx.beginPath();
                ctx.moveTo(this.x, this.y); // start at circle
                ctx.lineTo(this.x + this.vx * 10, this.y + this.vy * 10); // line length depends on velocity
                ctx.stroke();
            }

        });
    }

    circles.forEach(circle => {
        circle.update();
        circle.draw();
    });
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

function randomX() {
    return Math.random() * 400;
}
function randomY() {
    return Math.random() * 400;
}
// between 1 - 3
function randomVelocity() {
    return Math.random() * 2 + 1;
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