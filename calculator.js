document.getElementById("tipAmount").style.display = "none";
document.getElementById("tip").style.display = "none";
document.getElementById("totalPerson").style.display = "none";

function calculateTip (){
    var totalTip  = document.getElementById("tipAmount").value;

    document.getElementById("tipAmount").style.display = "block";
}

document.getElementById("five").onclick = function () {
    calculateTip();
}

