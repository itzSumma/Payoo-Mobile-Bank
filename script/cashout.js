
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
    // const balanceElement = document.getElementById("balance");
    // const balance = balanceElement.innerText;
    // console.log(balance);
    const currentBalance =getBalance ();
    //calculate balance
    // const newBalance = Number(balance) - Number(cashoutAmount);
    const newBalance =currentBalance - Number(cashoutAmount);
console.log(newBalance);

if(newBalance <0){
    alert("Invalid Amount");
return;
}
const pin =getValueFromInput("cashout-pin");
if (pin === "2525"){
    alert("Cashout Successfull");
    // document.balanceElement.innerText = newBalance
    // document.getElementById("balance").innerText = newBalance
    setBalance(newBalance)
} else{
    alert("Invalid Pin");
    return;
}
 });
