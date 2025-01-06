let gameSeq= [];
let userSeq = [];

let started = false ;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["red","yellow","green","purple"];
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});
function gameFlash(btn){
    // let text = document.createElement("h2");
    // text.innerText = "Flash";
    btn.classList.add("gameflash");
    // btn.append(text);
    setTimeout(function(){
        // btn.remove(text);
        btn.classList.remove("gameflash");
    },250);
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    h2.classList.add("level");
    //random btn choose
    let randIdx = Math.floor(Math.random() *3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`); 

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    } else{
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b><br>Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "black";
        }, 150);
        reset();
    }
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}
function btnPress(){
    
    let btn = this ;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}