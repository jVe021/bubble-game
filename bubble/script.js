var hitRN = 0;
var score = 0;

function makeBubble() {
    let cluster = "";
    for (let a = 0; a < 168; a++) {
        cluster += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    document.querySelector('.body').innerHTML = cluster;
}

function runTimer() {
    let timer = 6;
    let timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
        } else {
            clearInterval(timerInt);
            document.querySelector('.body').innerHTML = `<div class="result"><h1> Game Over!!!</h1><h3> Your Score is <span>${score}</span></h3><button id="continue" class="myBtn" onClick="reload()"> Continue </button></div>`;
        }
        document.querySelector('#timerVal').innerHTML = timer;
    }, 1000);
}

function newHit() {
    hitRN = Math.floor(Math.random() * 10);
    document.querySelector('#hit').innerHTML = `${hitRN}`;
}
function increaseScore() {
    score += 10;
    document.querySelector('#score').innerHTML = score;
}

document.querySelector('.body').addEventListener('click', (dets) => {
    let selectedNum = Number(dets.target.textContent);
    if (selectedNum === hitRN) {
        increaseScore();
        makeBubble();
        newHit();
    }
})

function reload() {
    location.reload();
}

newHit();
makeBubble();
runTimer();

