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
                // randomly decide fill color (if 1 or 0)
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

            console.log(squares);
        }
    }

    randomColor = function() {
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
        let black = 0;
        let white = 0;

        // check neighbor colors
        for (let i = 0; i < squares.length; i++) {
            let neighbor = squares[i];
            // only going through first square and failing to add to black or white counter
            console.log(neighbor);

            if ((neighbor.x === squares.x - neighbor.size && neighbor.y === squares.y) || // LEFT
            (neighbor.x === squares.x + neighbor.size && neighbor.y === squarse.y) || // RIGHT
            (neighbor.x === squares.x && neighbor.y === squares.y - neighbor.size)|| // UP
            (neighbor.x === squares.x && neighbor.y === squares.y + neighbor.size)) // DOWN 
            {
            if (neighbor.color === "#000000") {
                black++;
                console.log(black);
            } else {
                white++;
                console.log(white);
            }
            }

            // underpopulation, dies
            if (white < 2 || black > 3) {
                return "#000000";
            } else if (3 >= black || black >= 2) {
                return "#FFFFFF";
            } 

            let updatedSquare = {
                x: square.x,
                y: square.y,
                size: square.size,
                color: newColor
            }

            newSquares.push(updatedSquare);
        }

        squares = newSquares;
        updateSquares();
    }

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