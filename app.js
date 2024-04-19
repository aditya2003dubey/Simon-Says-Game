let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let btn = document.querySelectorAll('.box');
let level = 0;
let started = false;
let colorIdx = ["purple", "orange", "blue", "green"];
let userIdx = [];
let randIdx = [];
let highScr = 0;
let score = document.querySelector('.score');

document.addEventListener("keypress", function () {
    if (started == false) {
        h2.innerText = ("Game Started...");
        started = true;

        levelup();
    }
});

function btnflash(btne) {
    btne.classList.add("white");
    setTimeout(function () {
        btne.classList.remove("white");
    }, 250);

};

function levelup() {
    userIdx = [];
    level++;
    h3.innerText = (`level ${level}`);
    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = colorIdx[randomIdx];
 let randombtn = document.querySelector(`.${randomColor}`);
    console.log(randomColor);
    randIdx.push(randomColor);
    console.log(randIdx);
    btnflash(randombtn);
};



function btnClick() {
    let userBtn = this;
    btnflash(userBtn);
    let userColor = userBtn.getAttribute("id");
    userIdx.push(userColor);
    console.log(userIdx);
    matchIdx(userIdx.length - 1);
};

function matchIdx(idx) {
    if (randIdx[idx] == userIdx[idx]) {
        if (randIdx.length == userIdx.length) {
            setTimeout(levelup, 800)
        }
    }
    else {
        h2.innerText = "Game-Over!, Press any key to start";
        h3.innerHTML = (`your score is: <b> ${level} </b>`);
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        if(level >= highScr){
        highScr = level;}
        score.innerText = (`Higest Score : ${highScr}`);
                reset();
    };
};
for (allBtn of btn) {
    allBtn.addEventListener("click", btnClick);
};

function reset() {
    level = 0;
    userIdx = [];
    randIdx = [];
    started = false;
    // h3.innerText = ".."
};