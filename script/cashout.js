
 document.getElementById("cashout-btn").addEventListener("click", function(){
        //get agent Number
        const cashoutNumber = getValueFromInput("cashout-number");
        if(cashoutNumber.length !== 11)
        {alert("Invalid Number")
            return;
        }
        //get amount
        const cashoutAmount = getValueFromInput("cashout-amount");
        
        //get current balance
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);
    
    //calculate balance
    const newBalance = Number(balance) - Number(cashoutAmount);
console.log(newBalance);

if(newBalance < 0){
    alert("Invalid Amount");
return;
}
const pin =getValueFromInput("cashout-pin");
if (pin  === "2525"){
    alert("Cashout Successfull");
    balance.innerText = newBalance
} else{
    alert("Invalid Pin");
    return;
}
 });
