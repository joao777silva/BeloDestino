function menu(){
    var menu = document.getElementById("menu-header");
    var icone = document.getElementById("icone-menu");
    if(getComputedStyle(menu).display == 'none'){
        menu.style.display = "flex";
        icone.classList.remove("fa-bars");
        icone.classList.add("fa-times");
        // mudando para fa-time(icone X)
    } else{
        menu.style.display = "none";
        icone.classList.remove("fa-times");
        icone.classList.add("fa-bars");
    }


}

/* arquivo das automaçoes do menu hamburger*/
const btnMobile = document.getElementById ('btn-mobile');
// declarando a variavel com CONST

function toggleMenu(event) {
    if (event.type === 'touchstart') Event.preventDefault ();
    const nav = document.getElementById('nav');    
    nav.classList.toggle ('active');
    const  active = nav.classList.contains(active);
    event.currentTarget.setAttribute('aria-Expanded', active);
        if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu');
    }   else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }

    
}


    

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)