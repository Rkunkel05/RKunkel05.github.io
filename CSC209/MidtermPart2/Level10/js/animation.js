const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 2;
var id = null;
// make an array of the created circles w/ coordinates + velociites stored
let circles = [];

// store data for x and y
function drawCircle() {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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
                this.newX -= this.vx;
                this.newY -= this.vy;

                //reverse velocity if collision
                if (this.newX >= 400 || this.newX <= 0) this.vx = -this.vx;
                if (this.newY >= 400 || this.newY <= 0) this.vy = -this.vy;
            },

            draw: function() {
                let radius = 25;
                let bodyLength = 118;
                let bodyHeight = 74;
                let tailWidth = bodyLength / 4;
                let tailHeight = bodyHeight / 2;

                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.ellipse(this.newX, this.newY, bodyLength / 2, bodyHeight / 2, 0, 0, 2 * Math.PI);
                ctx.fill();

                ctx.beginPath();
                ctx.moveTo(this.newX - bodyLength / 2, this.newY);
                ctx.lineTo(this.newX - bodyLength / 2 - tailWidth, this.newY - tailHeight);
                ctx.lineTo(this.newX - bodyLength / 2 - tailWidth, this.newY + tailHeight);
                ctx.closePath();
                ctx.fill();
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
            ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
        } 

            circles.forEach(circle => {
                circle.update();
                circle.draw();
    
            }, 10) // 10ms
    })
}

function resetCircles() {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // clear interval to stop animation
    circles.forEach(circle => {
        clearInterval(id);

        circle.newX = circle.origX;
        circle.newY = circle.origY;

        let radius = 25;
        let bodyLength = 118;
        let bodyHeight = 74;
        let tailWidth = bodyLength / 4;
        let tailHeight = bodyHeight / 2;

        ctx.fillStyle = circle.color;
        ctx.beginPath();
        ctx.ellipse(circle.origX, circle.origY, bodyLength / 2, bodyHeight / 2, 0, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(circle.origX - bodyLength / 2, circle.origY);
        ctx.lineTo(circle.origX - bodyLength / 2 - tailWidth, circle.origY - tailHeight);
        ctx.lineTo(circle.origX - bodyLength / 2 - tailWidth, circle.origY + tailHeight);
        ctx.closePath();
        ctx.fill();
    });
}