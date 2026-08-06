let optionBtn = document.querySelector(".nav-option");
let exitBtn = document.querySelector(".exit");
let navOptMobile = document.querySelector(".nav-option-moblie");

optionBtn.addEventListener("click",()=>{
    optionBtn.style.display = "none";
    navOptMobile.style.right = "0px";
})

exitBtn.addEventListener("click",()=>{
    navOptMobile.style.right = "-53%";
    optionBtn.style.display = "block";
})

let modeBtn =document.querySelectorAll(".btn-mode");
for(btn of modeBtn){
    btn.addEventListener("click",()=>{
    
    let body= document.querySelector("body");
    if(body.classList.contains("dark")){
        body.classList.remove("dark");
        btn.innerHTML = `<i class="fa-regular fa-moon"></i>`;
       
    }
    else{
        body.classList.add("dark");
         btn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    }
});

}
