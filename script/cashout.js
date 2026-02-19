  

document.getElementById("cashout-btn").addEventListener("click",function(){
    //get agent number
   const cashoutNumberInput = document.getElementById("cashout-number");
   const cashoutNumber = cashoutNumberInput.value;
   console.log(cashoutNumber);

    //get amount , validate , convert number

    const cashoutAmountInput = document.getElementById("cashout-amount");
    const  cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);
    //get current balance , validate , convert number
    
    //calculate new balance
    //get the pin verify
    //if true show alert > set new balance
    //if false show alert >return

});