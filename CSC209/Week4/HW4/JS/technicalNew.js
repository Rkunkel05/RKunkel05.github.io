const squaresData = [
    {color: "#FF0000", x: 0, y: 0, speedId: "redSpeed"},
    {color: "#0000FF", x: 350, y: 350, speedId: "blueSpeed"},
    {color: "#008000", x:0, y:350, speedId: "greenSpeed"},
    {color:"#FFA500",x:350,y:0, speedId: "orangeSpeed"}
];

function squareAnimation() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 2;

    let id = null;
    let squares = [];

    
this.drawSquare = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (squares.length === 0) {
        for (let i = 0; i < squaresData.length; i++) {
            let x = squaresData[i].x;
            let y = squaresData[i].y;
            let color = squaresData[i].color;
            let speedInput = document.getElementById(squaresData[i].speedId);

            let speed = Number(speedInput.value);

        // create new object
        squares.push({
            newX: x,
            newY: y,
            color: color,
            speed:speed,

            update: function() {
                if (this.color === "#FF0000") { // red
                    this.newX += this.speed;
                } else if (this.color === "#0000FF") { // blue
                    this.newX -= this.speed;
                } else if (this.color === "#008000") { // green
                    this.newY -= this.speed;
                } else if (this.color === "#FFA500") { // orange
                    this.newY += this.speed;
                }
            },

            draw: function() {
                ctx.fillStyle = this.color;
                ctx.fillRect(this.newX,this.newY,50,50);
            }
        });
    }

    squares.forEach(square => {
        square.draw();
    });
};

    this.animateSquares = function() {
        clearInterval(id);
        id = setInterval(function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        squares.forEach(square => {
            square.update();
            square.draw();
        });
    }, 10);
    }; 
}
}

let animation;

function initializeAnimation() {
    animation = new squareAnimation();
    animation.drawSquare();
}
