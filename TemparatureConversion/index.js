let TemperatureInput = document.getElementById("TemperatureInput")
let CelToFar = document.getElementById("CelToFar")
let FarToCel = document.getElementById("FarToCel")
let Result = document.getElementById("Result")
function TemperatureFunction(){
    if(CelToFar.checked && TemperatureInput.value){
        let f = TemperatureInput.value * (9/5) +32
        Result.innerHTML = `${f} °F`
    }
    else if(FarToCel.checked && TemperatureInput.value){
        let c = (TemperatureInput.value-32)*(5/9)
        Result.innerHTML = `${c} °C`
    }
    else{
        Result.innerHTML = 'Enter the Temperature and </br> Select the Conversion Type'
    }

}
function Reset(){
    TemperatureInput.value = ""
    Result.innerHTML = ""
}