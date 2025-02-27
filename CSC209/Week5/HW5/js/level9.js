// levels 6-7 sort of already condensed into the previous levels

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 2;
var id = null;
// make an array of the created circles w/ coordinates + velociites stored
let circles = [];

// store data for x and y
function drawCircle() {
    ctx.clearRect(0,0,400,400);
    let NRPTS = document.getElementById("NRPTS").value;

    circles = [];
    
    for (i=0; i < NRPTS; i++) {
        clearInterval(id);
        let x = randomX();
        let y = randomY();
        let vX = randomVelocity();
        let vY = randomVelocity();
        let color = randomColor();

        // create new object
        circles.push({
            origX: x,
            origY: y,
            newX: x,
            newY: y,
            vx: vX,
            vy: vY, 
            color: color,

            // update position depending on vx and vy
            // function inside object! \/
            update: function() {
                this.newX += this.vx;
                this.newY += this.vy;

                //reverse velocity if collision
                if (this.newX >= 400 || this.newX <= 0) this.vx = -this.vx;
                if (this.newY >= 400 || this.newY <= 0) this.vy = -this.vy;
            },

            draw: function() {
                //circle 
                ctx.strokeStyle = color;
                ctx.beginPath();
                ctx.arc(this.newX, this.newY, 25, 0, 2 * Math.PI);
                ctx.stroke();

                //velocity
                ctx.beginPath();
                ctx.moveTo(this.newX, this.newY); // start at circle
                ctx.lineTo(this.newX + this.vx * 10, this.newY + this.vy * 10); // line length depends on velocity
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

// Animate circles
function animateCircles() {
    clearInterval(id);

    id = setInterval(function() {
        if (!showTrace.checked==true) {
            ctx.clearRect(0, 0, 400, 400);
        } 

            circles.forEach(circle => {
                circle.update();
                circle.draw();
    
            }, 10) // 10ms
    })
}

function resetCircles() {
    ctx.clearRect(0, 0, 400, 400);
    // clear interval to stop animation
    circles.forEach(circle => {
        clearInterval(id);
        circle.newX = circle.origX;
        circle.newY = circle.origY;

        // circle
        ctx.strokeStyle = randomColor();
        ctx.beginPath();
        ctx.arc(circle.origX, circle.origY, 25, 0, 2 * Math.PI);
        ctx.stroke();

        //velocity
        ctx.beginPath();
        ctx.moveTo(circle.origX, circle.origY); // start at circle
        ctx.lineTo(circle.origX + circle.vx * 10, circle.origY + circle.vy * 10); // line length depends on velocity
        ctx.stroke();
    });
}