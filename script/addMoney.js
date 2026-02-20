console.log("addMoney connected")

document.getElementById("add-money-btn").addEventListener("click", function() {

    // console.log("add money btn clicked")
       // get bank account
    const bankAccount = getValueFromInput("add-money-bank");
    // console.log(bankAccount)
    if(bankAccount === "Select a Bank"){
        alert("Please Select a Bank");
        return;
    }

    // get bank account  number
    const accountNumber = getValueFromInput("add-money-number");
    if(accountNumber.length !==11){
        alert("Invalid account number");
        return;
    }
    //get the amount
    const amount = getValueFromInput("add-money-amount");
    if(amount <= 0){
alert ("Please Enter Valid Amount");
return;
    }
    
    const pin = getValueFromInput("add-money-pin");
    if(pin !== "2525"){
        alert("Please enter valid Pin");
        return;
       
    }  alert( `Add money successfully from
          ${bankAccount}
          at ${new Date()}`)

const currentBalance = getBalance()
    const newBalance = currentBalance + Number(amount);
        setBalance (newBalance)


/// Get history-container
 const history = document.getElementById("history-container")

     // Create a new div
     const newHistory = document.createElement("div")
     // add innerHTML to new div
     newHistory.innerHTML =  `  <div class="py-5 transaction-card bg-base-100">
     
         Add money successfully from ${bankAccount},  accountNumber ${accountNumber}
          at ${new Date()}
                </div>
     `;
     // new drive append to history container
     history.append(newHistory);
});