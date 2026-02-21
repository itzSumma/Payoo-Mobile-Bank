// console.log(" file initialized")
document.getElementById("login-btn").addEventListener("click", function(){
    //  Get Number
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
 console.log(contactNumber);
//   Get Pin 
const inputPin = document.getElementById("input-pin");
const pin = inputPin.value;
console.log(pin)

//  Match number & pin
if(contactNumber == "01746965351" && pin == "2525")
{
    // true===> alert>homepage
    alert("Login Successful");

    // window.location.replace("/home.html");
    window.location.assign("home.html");
   
    }
     else{
        // False==> alert>return
        alert("Login Failed");
        return;
}
})