let NRROWS = 2;
let FEATURES = ["Mary", "Alice"];
let BASIC = ["fa-check", "fa-remove"];
let PRO = ["fa-remove", "fa-check"];

function addRow() {
    let table = document.getElementById("comparisonTable");

    for (i=0; i<NRROWS; i++) {
        var row = table.insertRow(i+1);

        var cell = row.insertCell(0);
        cell.innerHTML = FEATURES[i];

        var cell1 = row.insertCell(1);
        cell1.innerHTML = "<i class='fa " + BASIC[i] + "'</i>";

        var cell2 = row.insertCell(2);
        cell2.innerHTML = "<i class='fa " + PRO[i] + "'</i>";
    }
}