const myCheckBox = document.getElementById("myCheckBox")
const visaBtn = document.getElementById("visaBtn")
const materCardBtn = document.getElementById("materCardBtn")
const payPalBtn = document.getElementById("payPalBtn")
const mySubmit = document.getElementById("mySubmit")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = "you are subscribed"
    }
    else{
        subResult.textContent = "you are not subscribed"
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You are paying with Visa"
    }
    else if(materCardBtn.checked){
        paymentResult.textContent = "You are paying with Mater card"
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = "You are paying with Paypal"
    }
    else{
        paymentResult.textContent = "You must select a payment type" 
    }
}