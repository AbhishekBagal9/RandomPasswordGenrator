const passwordbox = document.getElementById('passwordbox')
const copyMessage = document.getElementById('copy');

const length = 12;

function GenratePassword(){
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~";
let allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~";

let password="";

password +=upperCase[Math.floor(Math.random()*upperCase.length)];
password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
password +=numbers[Math.floor(Math.random()*numbers.length)];
password +=symbols[Math.floor(Math.random()*symbols.length)];

while(password.length < length){
password +=allCharacters[Math.floor(Math.random()*allCharacters.length)];
}
passwordbox.value = password;
}

function copypassword(){

    passwordbox.select();
    document.execCommand("copy");
    
}

copyMessage.addEventListener('click', function() {
    copyMessage.classList.toggle("fa-solid");
    
});
