console.log("machine connected")

// machine id => Input value
function getValueFromInput (id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id , value);
    return value ;

}

//machine==> balance
function getBalance (){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
console.log("Current Balance", Number(balance));
    return Number(balance);
}
// machine value => set balance
function setBalance (value){
      const balanceElement = document.getElementById("balance");
      balanceElement.innerText = value;
}


//maachine id => hide all => show all
function showOnly (id) {
    const addMoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    // console.log("showOnly clicked")
    //  console.log(`Add Money - ${addMoney}, Cashout - $(cashout)`)
  // Hide all
  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");

//   Show only id element
  const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}






 // machine id => Input value
// function getValueFromInput (id){
//     const input = document.getElementById(id);
//     const value = input.value;
//     console.log(id , value);
//     return value ;

// }

 //machine==> balance
// function getBalance (){
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
// console.log("Current Balance", Number(balance));
//     return Number(balance);
// }
 // machine value => set balance
// function setBalance (value){
//       const balanceElement = document.getElementById("balance");
//       balanceElement.innerText = value;
// }