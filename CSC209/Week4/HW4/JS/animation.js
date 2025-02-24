// still trying to figure out how to condense this all into one function with arrays ):

function moveRed()
{   
    var redShape = document.getElementById("redSq");   
    var redPos = 0;
    var redSpeed = document.getElementById("redSpeed").value;
    // Calls a function at specified intervals (in milliseconds)
    var stepRedId = setInterval(stepRed, redSpeed);

    function stepRed() {
        if (redPos == 350) {
            // Stops the time
            clearInterval(stepRedId);
        } else {
            redPos++; 
            redSq.style.top = redPos + 'px'; 
            redSq.style.left = redPos + 'px';
        }
    }
}

function moveBlue()
{   
    var blueSquare = document.getElementById("blueSq");   
    var bluePos = 350;
    var blueSpeed = document.getElementById("blueSpeed").value;
    // Calls a function at specified intervals (in milliseconds)
    var stepBlueId = setInterval(stepBlue, blueSpeed);

    function stepBlue() {
        if (bluePos == 0) {
            // Stops the time
            clearInterval(stepBlueId);
        } else {
            bluePos--; 
            blueSq.style.top = bluePos + 'px'; 
            blueSq.style.left = bluePos +'px';
        }
    }
}


var shapes = [ 
    {
        id: document.getElementById("redSq"), pos: 0, speed: document.getElementById("redSpeed").value,
    },
    {
        id: document.getElementById("blueSq"), pos: 350, speed: document.getElementById("blueSpeed").value,
    }
]
// let noShapes = [1,2];
// let shapeName = [document.getElementById("redSq"), document.getElementById("blueSq")];
// let shapeId = [document.getElementById("redSq"), document.getElementById("blueSq")];
// let shapePos = [0, 350];
// let shapeSpeed = [document.getElementById("redSpeed").value, document.getElementById("blueSpeed").value]
// let stepShapeId = [setInterval(stepRed, shapeSpeed[0]), setInterval(stepBlue, shapeSpeed[1])];
// let shapeEnd = [350, 0]

// function stepShape(i) {

//         let crtShapePos = shapePos[i];
//         let crtShapeName = shapeName[i];
//         let crtShapeSpeed = shapeSpeed[i];
//         let crtStepShapeId = stepShapeId[i];
//         let crtShapeEnd = shapeEnd[i];

//         if (crtShapePos >= crtShapeEnd) {
//             clearInterval(crtStepShapeId);
//         } else {
//             shapePos[i]++;
//             crtShapeName.style.top = shapePos[i] + "px";
//             crtShapeName.style.left = shapePos[i] + "px";
//         }
//     }

// function stepRed() {
//     stepShape(0);
// }

// function stepBlue() {
//     stepShape(1)
// }

