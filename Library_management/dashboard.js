let dashb = document.querySelector(".dashboard");
let inp = document.querySelectorAll("input");

let btn = document.querySelector(".bookinp > button");
function add(success){
   btn.addEventListener("click",function(){
      let subdiv =  document.createElement("div");
      dashb.appendChild(subdiv);
      for(let i= 0;i< inp.length;i++){
         let span =  document.createElement("span");
         span.innerText = inp[i].value ;
         subdiv.appendChild(span);
         inp[i].value = "";
      }
      let delbtn =  document.createElement("button");
      subdiv.appendChild(delbtn);
      delbtn.innerText = "delete";
      delbtn.classList.add("delete");
      success();
   });
}
add(
   ()=>{
      let delbtns = document.querySelectorAll(".dashboard button");
for(i of delbtns){
      i.addEventListener("click",function(){
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
}
   }
)
