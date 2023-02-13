var typing=new Typed(".text", {
    strings: ["","Full-Stack", "Web", "Deveolper"],
    typeSpeed: 200,
    backSpeed: 200  ,
    loop: true,
});

document.querySelector("#nav-toggle").addEventListener("click",()=>{
    if( document.querySelector(".nav__menu").style.display == "block"){
        document.querySelector(".nav__menu").style.display = "none"
    }else{
        document.querySelector(".nav__menu").style.display = "block"
    }
   
})



