   
function moveRed()
{   
    var redSquare = document.getElementById("redSq");   
    var redPos = 0;
    // Calls a function at specified intervals (in milliseconds)
    var stepRedId = setInterval(stepRed, 10);

    function stepRed() {
        if (redPos == 350) {
            // Stops the time
            clearInterval(stepRedId);
        } else {
            redPos++; 
            redSquare.style.top = redPos + 'px'; 
            redSquare.style.left = redPos + 'px';
        }
    }
}

function moveBlue()
{   
    var blueSquare = document.getElementById("blueSq");   
    var bluePos = 350;
    // Calls a function at specified intervals (in milliseconds)
    var stepBlueId = setInterval(stepBlue, 10);

    function stepBlue() {
        if (bluePos == 0) {
            // Stops the time
            clearInterval(stepBlueId);
        } else {
            bluePos--; 
            blueSquare.style.top = bluePos + 'px'; 
            blueSquare.style.left = bluePos +'px';
        }
    }
}


