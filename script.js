let randomNumber1 = generateRandomIntegerInRange(1, 6);
let randomNumber2 = generateRandomIntegerInRange(1, 6);
// Generate a random number between 1 and 6, including both 1 and 6
function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector(".img1").setAttribute("src",`./images/dice${randomNumber1}.png`)
document.querySelector(".img2").setAttribute("src",`./images/dice${randomNumber2}.png`)


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins!"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player2 Wins!"
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}