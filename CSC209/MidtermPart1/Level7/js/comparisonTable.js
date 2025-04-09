// I know this looks like Level 8, but it made the most sense to me to just adapt the list into a for loop! 
let NRROWS = 2;
let FEATURES = ["Mary", "Alice"];
let BASIC = ["fa-check", "fa-remove"];
let PRO = ["fa-remove", "fa-check"];

function addRow() {
    for (i=0; i<NRROWS; i++) {
        let ROW = '<tr> <td>' + FEATURES[i] + '</td> <td><i class = "fa ' + BASIC[i] + '"></i></td> <td><i class ="fa ' + PRO[i] + '"></i></td> </tr>';
        let newRow = ROW;

        comparisonTable = document.getElementById("comparisonTable").innerHTML += newRow;
    }
}