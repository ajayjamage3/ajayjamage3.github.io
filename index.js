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
document.querySelector("#nav-toggle").addEventListener("mouseover",()=>{

        document.querySelector(".nav__menu").style.display = "block"
    
})

document.querySelector("#nav-toggle").addEventListener("mouseout",()=>{

    document.querySelector(".nav__menu").style.display = "none"

})

document.querySelector(".nav__list").addEventListener("mouseover",()=>{

    document.querySelector(".nav__menu").style.display = "block"

})

document.querySelector(".nav__list").addEventListener("mouseout",()=>{

document.querySelector(".nav__menu").style.display = "none"

})

