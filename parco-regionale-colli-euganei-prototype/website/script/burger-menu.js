//SCRIPT PER NAVIGAZIONE LATERALE BURGER MENU
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    setTimeout(makeItAppear, 350);
    // setTimeout(makeItAppear, 250);
}

function closeNav() {
    // document.getElementById("nav-bandiere").style.display = "none";
    // document.getElementById("nav-sezioni").style.display = "none";
    // document.getElementById("bottone-chiudi").style.display = "none";

    $("#nav-bandiere").fadeOut();
    $("#nav-sezioni").fadeOut();
    $("#bottone-chiudi").fadeOut();
    
    setTimeout(function () { document.getElementById("mySidenav").style.width = "0"; }, 550);
}

//Questo serve per far rientrare la navigazione laterale nel caso in cui si ingrandisse troppo la finestra
window.addEventListener("resize", function () {
    if (document.documentElement.clientWidth > 992) {
        closeNav();
    }
}, true);

function makeItAppear() {
    // document.getElementById("nav-bandiere").style.display = "initial";
    // document.getElementById("nav-sezioni").style.display = "initial";
    // document.getElementById("bottone-chiudi").style.display = "initial";
    $("#nav-bandiere").fadeIn().css("display","initial");
    $("#nav-sezioni").fadeIn().css("display","initial");
    $("#bottone-chiudi").fadeIn().css("display","initial");
}