
let r ,g,b;
function getrandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    r = red;
    g = green;
    b = blue;
    return color;
}
function gethexcode(){
    //conversion of rgb to hex 
    let r1 = Math.trunc(r / 16);
    let n1 = Math.abs(r / 16) - Math.trunc(r / 16);
    let r2 = n1 * 16 ;

    let g1 = Math.trunc(g / 16);
    let n2 = Math.abs(g / 16) - Math.trunc(g / 16);
    let g2 = n2 * 16 ;

    let b1 = Math.trunc(b / 16);
    let n3 = Math.abs(b / 16) - Math.trunc(b / 16);
    let b2 = n3 * 16 ;
    let hex = `#${r1.toString(16)}${r2.toString(16)}${g1.toString(16)}${g2.toString(16)}${b1.toString(16)}${b2.toString(16)}`;
    return hex;
}
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let h2 = document.querySelector("h2");
    h2.innerText = getrandomColor();
    let h1 = document.querySelector("h1");
    h1.innerText = gethexcode();
});
btn.addEventListener("click",function(){
    let div = document.querySelector("div");
    div.style.backgroundColor = gethexcode();
    console.log("Color Updated");
});
