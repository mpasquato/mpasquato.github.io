window.addEventListener("load", function () { correggiAltezzaImgElSing() });
window.addEventListener("resize", function () { correggiAltezzaImgElSing() });

// window.addEventListener("load", function () { correggiAltezzaMap() });
// window.addEventListener("resize", function () { correggiAltezzaMap() });

window.addEventListener("load", function () { correggiAltezzaImgElDoppio() });
window.addEventListener("resize", function () { correggiAltezzaImgElDoppio() });

// function correggiAltezzaImgElSing() {
//     var descrizioni = document.getElementsByClassName('immagine-elemento-singolo');
//     var altezza = descrizioni[0].width;
//     for (var i = 0; i < descrizioni.length; i++) {
//         descrizioni[i].height = altezza;
//     }
// }

function correggiAltezzaImgElSing() {
    var immagini = document.getElementsByClassName('immagine-elemento-singolo');
    var imgSingola = document.getElementsByClassName('immagine-elemento-singolo')[0];
    var larghezza = window.getComputedStyle(imgSingola).width;
    for (var i = 0; i < immagini.length; i++) {
        immagini[i].style.height = larghezza;
    }
}

// function correggiAltezzaImgElDoppio() {
//     var immagini = document.getElementsByClassName('immagine-elemento-singolo');
//     var imgSingola = document.getElementsByClassName('immagine-elemento-singolo')[0];
//     var larghezza = window.getComputedStyle(imgSingola).width;

//     var imgDoppie = document.getElementsByClassName('immagine-elemento-doppio');
//     for (var i = 0; i < immagini.length; i++) {
//         imgDoppie[i].style.height = larghezza;
//     }

    // function correggiAltezzaImgElDoppio() {
    //     var immagini = document.getElementsByClassName('immagine-elemento-singolo');
    //     var imgSingola = document.getElementsByClassName('immagine-elemento-singolo')[0];
    //     var larghezza = window.getComputedStyle(imgSingola).width;

    //     var imgDoppie = document.getElementsByClassName('immagine-elemento-doppio');
    //     for (var i = 0; i < immagini.length; i++) {
    //         imgDoppie[i].style.height = larghezza;
    //     }
    //}

// function correggiAltezzaMap() {
//     var mappa = document.getElementById('map');
//     var larghezza = window.getComputedStyle(mappa).width;
//     var meteo = document.getElementById('meteo');
//     var altMeteo = window.getComputedStyle(meteo).height;
//     if (altMeteo > larghezza) {
//         mappa.style.height = altMeteo;
//     }
//     else {
//         mappa.style.height = larghezza;
//     }

// function correggiAltezzaMap() {
//     var mappa = document.getElementById('map');
//     var larghezza = window.getComputedStyle(mappa).width;
//     var meteo = document.getElementById('meteo');
//     var altMeteo = window.getComputedStyle(meteo).height;
//     if (altMeteo > larghezza) {
//         mappa.style.height = altMeteo;
//     }
//     else {
//         mappa.style.height = larghezza;
//     }
// }