
const display = document.getElementById("display")

function DisplayButton(input){
    display.value += input
}
function ClearDisplay(){
    display.value = ""
}
function DisplayOutput(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }
    
}