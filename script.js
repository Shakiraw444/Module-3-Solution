function toggleMenu() {
    let menu=document.getElementById("navbar-menu");
    if(menu.style.display==="block"){
        menu.style.display="none"
    }else{
        menu.style.display="block"
    }
}
let toggle=document.getElementById("toggle");
toggle.addEventListener("click", toggleMenu)