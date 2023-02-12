var typing=new Typed(".text", {
    strings: ["FULL-STACK", "WEB", "DEVELOPER"],
    typeSpeed: 200,
    backSpeed: 100  ,
    loop: true,
});

document.querySelector("#nav-toggle").addEventListener("click",()=>{
    if( document.querySelector(".nav__menu").style.display == "block"){
        document.querySelector(".nav__menu").style.display = "none"
    }else{
        document.querySelector(".nav__menu").style.display = "block"
    }
   
})



