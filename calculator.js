document.getElementById("calculated");
const customButton = document.querySelector('#tip-amount6');
const clearFields = document.querySelector('#reset');
const tipBill = document.getElementById("total-bill");
const numberPeople = document.getElementById("number-people");
const resetCustom = document.getElementById("tip-amount6");

var tipAmountPerPerson = document.querySelector("#tip-amount");
var totalPerPerson = document.querySelector("#total-person");
var customButtonReset = document.querySelector("#tip-amount6");

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

    total = Math.round(total * 100 ) / 100;
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

    var totalTipAmount = (totalBill * (tipAmount/100)) / numberPeople;
    var total = totalTipAmount + (totalBill / numberPeople);

    total = Math.round(total * 100 ) / 100;
    total = total.toFixed(2);
    totalTipAmount = Math.round(totalTipAmount * 100) / 100;
    totalTipAmount = totalTipAmount.toFixed(2);

    document.getElementById("calculated").style.display = "block";
    document.getElementById("tip-amount").innerHTML = totalTipAmount;
    document.getElementById("total-person").innerHTML = total;
    
})

function resetButton (){
    
    var resetButton = clearFields.addEventListener('click', function(){
        var resetTip = tipBill.value='';
        var resetPeople = numberPeople.value='';
        var resetCustomButton = resetCustom.value='';
    
        tipAmountPerPerson.innerHTML = 0;

        
        totalPerPerson.innerHTML = 0;
        
        customButtonReset.innerHTML = 0;
    });
}

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