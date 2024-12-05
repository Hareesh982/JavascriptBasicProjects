const min = 50
const max = 100
const randomNumber = Math.floor(Math.random() * (max-min) + 1)+min

let guess;
let attempts = 0
let running = true

while(running){
    guess = window.prompt(`Enter the number between ${min} and ${max}`)
    
    if(isNaN(guess) || guess<min || guess > max){
        alert("Enter a valid number")
    }
    else{
        if(randomNumber == guess){
            window.alert(`You have gussed the number ${guess} corretly! at ${attempts}th attempt`)
            running = false
        }
        else if(guess < randomNumber){
            window.alert("Too low, Try again")
        }
        else if(guess > randomNumber){
            window.alert("Too high, Try again")
        }
        attempts = attempts + 1
    }
    
}
