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
        for(btn of modeBtn){
             btn.innerHTML = `<span class="material-symbols-outlined">
light_mode
</span>`;
        }
       
       
    }
    else{
        body.classList.add("dark");
        for(btn of modeBtn){
             btn.innerHTML = `<i class="fa-regular fa-moon"></i>`;
        }
       
    }
});

}

const header = document.querySelector("header");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 70) {
    // Scrolling down
    header.classList.add("hide");
  } else {
    // Scrolling up
    header.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});


const copyBox = document.getElementById("copy-mail");

copyBox.addEventListener("click", () => {
  const textToCopy = document.getElementById("mail").innerText;

  const textarea = document.createElement("textarea");

  textarea.value = textToCopy;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";

  document.body.appendChild(textarea);

  textarea.focus();
  textarea.select();

  const copied = document.execCommand("copy");

  textarea.remove();

  if (copied) {
    copyBox.innerHTML = `<i class="fa-solid fa-check copy"></i>`;

    setTimeout(() => {
      copyBox.innerHTML = `<i class="fa-regular fa-copy copy"></i>`;
    }, 1500);
  }
});

const phoneCopy = document.getElementById("phone");

phoneCopy.addEventListener("click", () => {
    console.log("he");
  const textToCopy = document.getElementById("phone-copy").innerText;

  const textarea = document.createElement("textarea");

  textarea.value = textToCopy;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";

  document.body.appendChild(textarea);

  textarea.focus();
  textarea.select();

  const copied = document.execCommand("copy");

  textarea.remove();

  if (copied) {
    copyBox.innerHTML = `<i class="fa-solid fa-check copy"></i>`;

    setTimeout(() => {
      copyBox.innerHTML = `<i class="fa-regular fa-copy copy"></i>`;
    }, 1500);
  }
});