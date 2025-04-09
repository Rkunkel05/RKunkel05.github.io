let NRROWS = 10;

function addRow(basic, pro) {
    for (i=0; i<NRROWS; i++) {
        let ROW = '<tr> <td>Sample text</td> <td><i class = "fa CHECKCROSSBASIC"></i></td> <td><i class ="fa CHECKCROSSPRO"></i></td> </tr>';
        let newRow = ROW;

        if (basic === "fa-remove") {
            newRow = ROW.replace("CHECKCROSSBASIC", "fa-remove");
            console.log('basic fa-remove check');
        } if (pro === "fa-remove") {
            newRow = newRow.replace("CHECKCROSSPRO", "fa-remove");
            console.log('pro fa-remove check');
        } if (basic === "fa-check") {
            newRow = ROW.replace("CHECKCROSSBASIC", "fa-check");
            console.log('basic fa-check check');
        } if (pro === "fa-check") {
            newRow = newRow.replace("CHECKCROSSPRO", "fa-check");
            console.log('pro fa-check check');
        }

        comparisonTable = document.getElementById("comparisonTable").innerHTML += newRow;
    }
}