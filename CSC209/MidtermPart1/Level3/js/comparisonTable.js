let ROW = '<tr> <td>Sample text</td> <td><i class = "CHECKCROSSBASIC"></i></td> <td><i class ="CHECKCROSSPRO"></i></td> </tr>'
let newRow;

if (ROW.includes("CHECKCROSSBASIC") || ROW.includes("CHECKCROSSPRO")) {
    newRow = ROW.replace("CHECKCROSSBASIC", "fa fa-remove");
    newRow = newRow.replace("CHECKCROSSPRO", "fa fa-remove")
} 

comparisonTable = document.getElementById("comparisonTable").innerHTML += newRow;

// function myFunction() {
//     alert(ROW);
//     alert(newRow);
// }