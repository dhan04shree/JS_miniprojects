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
         // inp[i].value = "";
      }
      var idate = document.querySelector("#idate");
      console.log(idate.value);
      document.querySelector("#idate").stepUp(15);
      var indate = idate.value;
      for(let i= 0;i< inp.length;i++){
         inp[i].value = "";
      }
      let newspan =  document.createElement("span");
      subdiv.appendChild(newspan);
      // newspan.classList.add("sbdate");
      // console.log(issueDate)
      newspan.innerText = indate;

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



