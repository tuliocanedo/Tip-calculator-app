document.getElementById("calculated");
const customButton = document.querySelector('#tip-amount6');
const resetButton = document.querySelector('#reset');

function calculateDinner(){
    var totalBill = document.getElementById("total-bill").value;
    var numberPeople = document.getElementById("number-people").value;
    var tipAmount = document.getElementById("tip-amount1").value;
    
    if(totalBill === "" || totalBill <= 0 || numberPeople <= 0){
        alert("Please, insert a valid value!");
        return;
    }

    var totalTipAmount = (totalBill * tipAmount) / numberPeople;
    var total = totalTipAmount + (totalBill / numberPeople);

    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    totalTipAmount = Math.round(totalTipAmount * 100) / 100;
    totalTipAmount = totalTipAmount.toFixed(2);

    document.getElementById("calculated").style.display = "block";
    document.getElementById("tip-amount").innerHTML = totalTipAmount;
    document.getElementById("total-person").innerHTML = total;
    
}

function calculateDinner2(){
    var totalBill = document.getElementById("total-bill").value;
    var numberPeople = document.getElementById("number-people").value;
    var tipAmount = document.getElementById("tip-amount2").value;
    
    if(totalBill === "" || totalBill <= 0 || numberPeople <= 0){
        alert("Please, insert a valid value!");
        return;
    }

    var totalTipAmount = (totalBill * tipAmount) / numberPeople;
    var total = totalTipAmount + (totalBill / numberPeople);

    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    totalTipAmount = Math.round(totalTipAmount * 100) / 100;
    totalTipAmount = totalTipAmount.toFixed(2);

    document.getElementById("calculated").style.display = "block";
    document.getElementById("tip-amount").innerHTML = totalTipAmount;
    document.getElementById("total-person").innerHTML = total;
    
}

function calculateDinner3(){
    var totalBill = document.getElementById("total-bill").value;
    var numberPeople = document.getElementById("number-people").value;
    var tipAmount = document.getElementById("tip-amount3").value;
    
    if(totalBill === "" || totalBill <= 0 || numberPeople <= 0){
        alert("Please, insert a valid value!");
        return;
    }

    var totalTipAmount = (totalBill * tipAmount) / numberPeople;
    var total = totalTipAmount + (totalBill / numberPeople);

    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    totalTipAmount = Math.round(totalTipAmount * 100) / 100;
    totalTipAmount = totalTipAmount.toFixed(2);

    document.getElementById("calculated").style.display = "block";
    document.getElementById("tip-amount").innerHTML = totalTipAmount;
    document.getElementById("total-person").innerHTML = total;
    
}

function calculateDinner4(){
    var totalBill = document.getElementById("total-bill").value;
    var numberPeople = document.getElementById("number-people").value;
    var tipAmount = document.getElementById("tip-amount4").value;
    
    if(totalBill === "" || totalBill <= 0 || numberPeople <= 0){
        alert("Please, insert a valid value!");
        return;
    }

    var totalTipAmount = (totalBill * tipAmount) / numberPeople;
    var total = totalTipAmount + (totalBill / numberPeople);

    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    totalTipAmount = Math.round(totalTipAmount * 100) / 100;
    totalTipAmount = totalTipAmount.toFixed(2);

    document.getElementById("calculated").style.display = "block";
    document.getElementById("tip-amount").innerHTML = totalTipAmount;
    document.getElementById("total-person").innerHTML = total;
    
}

function calculateDinner5(){
    var totalBill = document.getElementById("total-bill").value;
    var numberPeople = document.getElementById("number-people").value;
    var tipAmount = document.getElementById("tip-amount5").value;
    
    if(totalBill === "" || totalBill <= 0 || numberPeople <= 0){
        alert("Please, insert a valid value!");
        return;
    }

    var totalTipAmount = (totalBill * tipAmount) / numberPeople;
    var total = totalTipAmount + (totalBill / numberPeople);

    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    totalTipAmount = Math.round(totalTipAmount * 100) / 100;
    totalTipAmount = totalTipAmount.toFixed(2);

    document.getElementById("calculated").style.display = "block";
    document.getElementById("tip-amount").innerHTML = totalTipAmount;
    document.getElementById("total-person").innerHTML = total;
    
}

customButton.addEventListener("input", function(){
    var totalBill = document.getElementById("total-bill").value;
    var numberPeople = document.getElementById("number-people").value;
    var tipAmount = document.getElementById("tip-amount6").value;
    
    if(totalBill === "" || totalBill <= 0 || numberPeople <= 0){
        alert("Please, insert a valid value!");
        return;
    }

    var totalTipAmount = (totalBill * tipAmount) / numberPeople;
    var total = totalTipAmount + (totalBill / numberPeople);

    total = Math.round(total * 100) / 1000;
    total = total.toFixed(2);
    totalTipAmount = Math.round(totalTipAmount) / 100;
    totalTipAmount = totalTipAmount.toFixed(2);
    
    document.getElementById("calculated").style.display = "block";
    document.getElementById("tip-amount").innerHTML = totalTipAmount;
    document.getElementById("total-person").innerHTML = total;
    
})

document.getElementById("tip-amount1").onclick = function(){
    calculateDinner();
}

document.getElementById("tip-amount2").onclick = function(){
    calculateDinner2();
}

document.getElementById("tip-amount3").onclick = function(){
    calculateDinner3();
}

document.getElementById("tip-amount4").onclick = function(){
    calculateDinner4();
}

document.getElementById("tip-amount5").onclick = function(){
    calculateDinner5();
}

document.getElementById("reset").onclick = function(){
    resetButton();
}