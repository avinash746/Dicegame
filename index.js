let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector("#reload").addEventListener("click", reload, false);

function reload() {
    reload = location.reload();
}


document.querySelector("img.img1").setAttribute("src", "images/dice" + String(randomNumber1) + ".png");
document.querySelector("img.img2").setAttribute("src", "images/dice" + String(randomNumber2) + ".png");
if (randomNumber1 > randomNumber2)
    document.querySelector("h1.heading").innerHTML = "Player1 Wins 🚩";
else if (randomNumber2 > randomNumber1)
    document.querySelector("h1.heading").innerHTML = " Player2 Wins 🚩";
else
    document.querySelector("h1.heading").innerHTML = " Tie - breaker 🏳";