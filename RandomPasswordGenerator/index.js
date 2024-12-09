const MyButton = document.querySelector('button')
const password = document.getElementById("password")

let password_string = ''

const special_characters = "~!@#$%^&*()_+?,."
const letters_lower = "abcdefghijklmnopqrstuvwxyz"
const letters_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

MyButton.addEventListener('click', () =>{
    for(let i=1;i<=3;i++){
        let random_special_characters = Math.floor(Math.random()*16)
        let  random_number = Math.floor(Math.random()*10+1)
        let random_letters_lower = Math.floor(Math.random()*26)
        let random_letters_higher = Math.floor(Math.random()*26)
        password_string = password_string + special_characters[random_special_characters] + letters_lower[random_letters_lower] + letters_upper[random_letters_higher] + random_number
    }
    password.innerHTML = password_string
})








