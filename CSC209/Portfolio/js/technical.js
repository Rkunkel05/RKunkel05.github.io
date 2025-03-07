function drawGrid() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 2;

    let squares = [];

    this.drawSquare = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let squareSize = 50;

        for (let x = 0; x < canvas.width; x+= squareSize) {
            for (let y = 0; y < canvas.height; y+= squareSize) {
                // randomly decide fill color (if dead or alive)
                let color = randomColor();
                ctx.fillStyle = color;
                ctx.fillRect(x,y,squareSize,squareSize);
                ctx.strokeStyle = "#000000";
                ctx.strokeRect(x,y,squareSize,squareSize);

                squares.push({
                    x: x,
                    y: y,
                    size: squareSize,
                    color: color
                })
            }
        }
    };

    function randomColor() {
        num = Math.random(); // between 0 and 1
        if (num >= 0.5) {
            return "#000000";
        } else {
            return "#FFFFFF";
        }
    }

    // check the squares around to see if they are black or white and keep a counter
    this.checkNext = function() {
        let newSquares = [];

        // iterate over each square
        for (let i = 0; i < squares.length; i++) {
            let square = squares[i];
            let black = 0;
            let white = 0;

            // check neighbors
            for (let j = 0; j < squares.length; j++) {
                let neighbor = squares[j];

                // skip over self
                if (square === neighbor) continue;

                if ((neighbor.x === square.x - neighbor.size && neighbor.y === square.y) || // LEFT
                (neighbor.x === square.x + neighbor.size && neighbor.y === square.y) || // RIGHT
                (neighbor.x === square.x && neighbor.y === square.y - neighbor.size)|| // UP
                (neighbor.x === square.x && neighbor.y === square.y + neighbor.size) || // DOWN 
                (neighbor.x === square.x - square.size && neighbor.y === square.y - square.size) || // TOP LEFT DIAGONAL
                (neighbor.x === square.x + square.size && neighbor.y === square.y - square.size) || // TOP RIGHT DIAGONAL
                (neighbor.x === square.x - square.size && neighbor.y === square.y + square.size) || // BOTTOM LEFT DIAGONAL
                (neighbor.x === square.x + square.size && neighbor.y === square.y + square.size)) // BOTTOM RIGHT DIAGONAL
                {
                    if (neighbor.color === "#000000") {
                        black++;
                    } else {
                        white++;
                    }
                }
            }

            let newColor = square.color;
            if (square.color === "#FFFFFF") { // alive
                if (white < 2 || white > 3) {
                    newColor = "#000000"; // dies
                }
            } else if (square.color === "#000000") { // dead
                if (white === 3) {
                    newColor = "#FFFFFF"; // alive
                }
            }

            newSquares.push({
                x: square.x,
                y: square.y,
                size: square.size,
                color: newColor
            });
        }

        squares = newSquares;
        updateSquares();
    };

    function updateSquares() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for (let square of squares) {
            ctx.fillStyle = square.color;
            ctx.fillRect(square.x,square.y,square.size,square.size);
            ctx.strokeStyle = "#000000";
            ctx.strokeRect(square.x,square.y,square.size,square.size);
        }
    }
}

let game;

function initGame() {
    game = new drawGrid();
    game.drawSquare();
}