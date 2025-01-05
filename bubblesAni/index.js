let body = document.querySelector("#container");

function getrandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}
body.addEventListener("click",(event)=>{
    let circle = document.createElement("div");
    circle.classList.add("circle");
        console.log(event.x);
        circle.style.left = event.x- 50 + "px";
        circle.style.top = event.y- 50 + "px";
        circle.style.backgroundColor = getrandomColor();
        body.appendChild(circle);
    setTimeout(()=>{
        circle.remove();
    },2000);
});
