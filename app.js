const tosh = document.querySelector(".tosh"),
    qaychi = document.querySelector(".qaychi"),
    qogoz = document.querySelector(".qogoz");
const playerTosh = document.querySelector(".playerTosh"),
    playerQaychi = document.querySelector(".playerQaychi"),
    playerQogoz = document.querySelector(".playerQogoz");
const tosh1 = document.querySelector(".tosh1"),
    qaychi1 = document.querySelector(".qaychi1"),
    qogoz1 = document.querySelector(".qogoz1");
const natija = document.querySelector(".natija");
const yourResult = document.querySelector(".yourResult"),
    compyuterResult = document.querySelector(".compyuterResult");
const left = document.querySelector(".left"),
    right = document.querySelector(".right");
const restart = document.querySelector(".restart");
const computerDefaultImg = document.querySelector(".toshDefault");
const playerDefaultImg = document.querySelector(".qogozDefault");
const items = document.querySelectorAll(".item");
const images = document.querySelectorAll(".images");
const main = document.querySelector(".main");

function computerPlay() {
    let choices = [1, 2, 3];
    return choices[Math.floor(Math.random() * choices.length)];
}

function showResult(son) {
    return (son === 1) ? displayFlex(tosh1, qaychi1, qogoz1) : (son === 2) ? displayFlex(qaychi1, tosh1, qogoz1) : (son === 3) ? displayFlex(qogoz1, qaychi1, tosh1) : "Hechtima";
}

function removeDefaultImages() {
    computerDefaultImg.style.display = "none";
    playerDefaultImg.style.display = "none";
}

function natijaQiymati(qiymat) {
    right.style.background = (qiymat.textContent == "Yutqazdingiz") ? "red" : (qiymat.textContent == "Yutdingiz") ? "green" : "#fff";
    left.style.background = (qiymat.textContent == "Yutqazdingiz") ? "green" : (qiymat.textContent == "Yutdingiz") ? "red" : "#fff";
}

function scoreCalc(your, computer) {
    yourResult.textContent = your;
    compyuterResult.textContent = computer;
}

function displayFlex(player, none1, none2) {
    player.style.display = 'flex';
    none1.style.display = 'none';
    none2.style.display = 'none';
}

let yourScore = 0;
let compyuterScore = 0;
tosh.addEventListener('click', () => {
    let compyuterPlayer = computerPlay();
    let result;
    if (compyuterPlayer === 1) {
        result = "Durrang";
    } else if (compyuterPlayer === 2) {
        result = "Yutdingiz";
        yourScore++
    } else {
        result = "Yutqazdingiz";
        compyuterScore++;
    }
    displayFlex(playerTosh, playerQaychi, playerQogoz);
    natija.textContent = result;
    natijaQiymati(natija);
    showResult(compyuterPlayer);
    scoreCalc(yourScore, compyuterScore);
    removeDefaultImages();
})
qaychi.addEventListener('click', () => {
    let compyuterPlayer = computerPlay();
    let result;
    if (compyuterPlayer === 2) {
        result = "Durrang";
    } else if (compyuterPlayer === 3) {
        result = "Yutdingiz";
        yourScore++
    } else {
        result = "Yutqazdingiz";
        compyuterScore++
    }
    natija.textContent = result;
    displayFlex(playerQaychi, playerQogoz, playerTosh);
    natijaQiymati(natija);
    showResult(compyuterPlayer);
    scoreCalc(yourScore, compyuterScore);
    removeDefaultImages();
})
qogoz.addEventListener('click', () => {
    let compyuterPlayer = computerPlay();
    let result;
    if (compyuterPlayer === 3) {
        result = "Durrang";
    } else if (compyuterPlayer === 1) {
        result = "Yutdingiz";
        yourScore++
    } else {
        result = "Yutqazdingiz";
        compyuterScore++
    }
    natija.textContent = result;
    displayFlex(playerQogoz, playerTosh, playerQaychi);
    natijaQiymati(natija);
    showResult(compyuterPlayer);
    scoreCalc(yourScore, compyuterScore);
    removeDefaultImages();
})
restart.addEventListener('click', () => {
    yourScore = 0;
    compyuterScore = 0;
    scoreCalc(yourScore, compyuterScore);
    natija.textContent = "Natija";
    computerDefaultImg.style.display = "block";
    playerDefaultImg.style.display = "block";
    right.style.background = "#1e1e1e";
    left.style.background = "#1e1e1e";
    images.forEach(element => {
        element.style.display = "none";
    });
})