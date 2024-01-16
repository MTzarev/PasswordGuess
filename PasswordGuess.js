function passwordGuess (input){
let index = 0
let username = input[index];
index ++
let pass = input [index];
index ++
let data = input[index];
index ++
while (data !== pass){
    data = input[index];
    index ++
}
    console.log(`Welcome ${username}!`);
}
passwordGuess (["Tzarev", "Maiden", "123545", "adfadfa", "Maiden", "Maiden83"])