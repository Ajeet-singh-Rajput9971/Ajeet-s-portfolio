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