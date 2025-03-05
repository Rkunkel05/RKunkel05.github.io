function drawGrid() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 2;

    let squares = [];

    this.drawSquare = function() {
        ctx.clearRect(0, 0, 400, 400);
        squares = [];
        
        // spacing is too narrow; need to somehow expand for size of canvas
        for (let i = 0; i < 5; i++) {
            let x = canvas.width / (0+i);
            let y = canvas.height / (0+i);
 
            console.log(x, y); // debugging, checking coords
            
            squares.push({
                x: x,
                y: y,

                draw: function() {
                    ctx.strokeStyle = "#000000";
                    ctx.beginPath();
                    ctx.rect(x,y, canvas.width / 5, canvas.height / 5);
                    ctx.stroke();
                }
            })

            console.log(squares); // debugging, checking array

        } squares.forEach(square => {
            square.draw();
        })


    }
}

let game;

function initGame() {
    game = new drawGrid();
    game.drawSquare();
}