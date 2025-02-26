function moveRed()
{    
    var redDot = document.getElementById("redDot"); 
    var redPos = 0;
    var redSpeed = document.getElementById("redSpeed").value;
    // Calls a function at specified intervals (in milliseconds)
    var stepRedId = setInterval(stepRed, redSpeed);
    var loop = document.getElementById("loopAnimation").checked;

    function stepRed() {
        if (redPos == 350) {
            // Stops the time
            clearInterval(stepRedId);
            if (loop) moveRed();
        } else {
            redPos++; 
            redDot.style.top = redPos + 'px'; 
            redDot.style.left = redPos + 'px';
        }
    }
}

function moveBlue()
{   
    var blueDot = document.getElementById("blueDot"); 
    var bluePos = 350;
    var blueSpeed = document.getElementById("blueSpeed").value;
    // Calls a function at specified intervals (in milliseconds)
    var stepBlueId = setInterval(stepBlue, blueSpeed);
    var loop = document.getElementById("loopAnimation").checked;

    function stepBlue() {
        if (bluePos == 0) {
            // Stops the time
            clearInterval(stepBlueId);
            if (loop) moveBlue();
        } else {
            bluePos--; 
            blueDot.style.top = bluePos + 'px'; 
            blueDot.style.left = bluePos +'px';
        }
    }
}

function moveGreen()
{   
    var greenDot = document.getElementById("greenDot");  
    var greenPos = 350;
    var greenSpeed = document.getElementById("greenSpeed").value;
    // Calls a function at specified intervals (in milliseconds)
    var stepGreenId = setInterval(stepGreen, greenSpeed);
    var loop = document.getElementById("loopAnimation").checked;

    function stepGreen() {
        if (greenPos == 0) {
            // Stops the time
            clearInterval(stepGreenId);
            if (loop) moveGreen();
        } else {
            greenPos--; 
            greenDot.style.left = greenPos +'px';
            // greenSquare.style.top = greenPos + 'px'; 
        }
    }
}

function moveOrange()
{    
    var orangeDot = document.getElementById("orangeDot"); 
    var orangePos = 0;
    var orangeSpeed = document.getElementById("orangeSpeed").value;
    // Calls a function at specified intervals (in milliseconds)
    var stepOrangeId = setInterval(stepOrange, orangeSpeed);
    var loop = document.getElementById("loopAnimation").checked;

    function stepOrange() {
        if (orangePos == 350) {
            // Stops the time
            clearInterval(stepOrangeId);
            if (loop) moveOrange();
        } else {
            orangePos++; 
            orangeDot.style.left = orangePos +'px';
        }
    }
}

let shapes = [{
    id: "redDot", posX: 0, posY:0, speed: document.getElementById("redSpeed").value, directionX: 1, directionY: 1
}, {
    id: "blueDot", posX: 350, posY: 350, speed: document.getElementById("blueSpeed").value, directionX: -1, directionY: -1
}, {
    id: "greenDot", posX: 0, posY: 350, speed: document.getElementById("greenSpeed").value, directionX: 1, directionY: -1
}, {
    id: "orangeDot", posX: 350, posY: 0, speed: document.getElementById("greenSpeed").value, directionX: -1, directionY: 1
}]

// some way to call function at interval specified by unique button
// some way to check if the button is looped 
// some way to properly update the position (check if we need ++ or ---?) + properly update the proper direction (.left, .top, etc.)



function stepRed() {
    moveRed();
}

function stepBlue() {
    moveBlue();
}

function stepGreen() {
    moveGreen();
}

function stepOrange() {
    moveOrange();
}

// let noShapes = [1,2,3,4];
// let shapeName = [document.getElementById("redDot"), document.getElementById("blueDot"), document.getElementById("greenDot"), document.getElementById("orangeDot")];
// let shapePos = [0, 350, 350, 0];
// let shapeSpeed = [document.getElementById("redSpeed").value, document.getElementById("blueSpeed").value, document.getElementById("greenSpeed").value, document.getElementById("orangeSpeed").value]
// let stepShapeId = [setInterval(stepRed, shapeSpeed[0]), setInterval(stepBlue, shapeSpeed[1])];
// let shapeEnd = [350, 0, 0, 350]