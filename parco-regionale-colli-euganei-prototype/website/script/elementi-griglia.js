
function onOverSingolo(blocco) {
    const anchor = blocco.querySelector("a");
    anchor.style.color = 'rgb(255, 108, 12)';
    blocco.style.cursor = 'pointer';
}

function onOutSingolo(blocco) {
    const anchor = blocco.querySelector("a");
    anchor.style.color = 'black';
}

var active1 = false;
var active2 = false;
var active3 = false;
var active4 = false;

function onClickFiltro1(blocco) {
    if (active1 == false) {
        blocco.style.backgroundColor = 'rgb(255, 108, 12)';
        blocco.style.color = 'white';
        active1 = true;
    }
    else {
        blocco.style.backgroundColor = 'white';
        blocco.style.color = 'black';
        active1 = false;
    }
}

function onClickFiltro2(blocco) {
    if (active2 == false) {
        blocco.style.backgroundColor = 'rgb(255, 108, 12)';
        blocco.style.color = 'white';
        active2 = true;
    }
    else {
        blocco.style.backgroundColor = 'white';
        blocco.style.color = 'black';
        active2 = false;
    }
}

function onClickFiltro3(blocco) {
    if (active3 == false) {
        blocco.style.backgroundColor = 'rgb(255, 108, 12)';
        blocco.style.color = 'white';
        active3 = true;
    }
    else {
        blocco.style.backgroundColor = 'white';
        blocco.style.color = 'black';
        active3 = false;
    }
}

function onClickFiltro4(blocco) {
    if (active4 == false) {
        blocco.style.backgroundColor = 'rgb(255, 108, 12)';
        blocco.style.color = 'white';
        active4 = true;
    }
    else {
        blocco.style.backgroundColor = 'white';
        blocco.style.color = 'black';
        active4 = false;
    }
}

window.addEventListener("load", function () {
    document.getElementById('bot1').style.color = 'white';
    document.getElementById('bot1').style.backgroundColor = 'rgb(255, 108, 12)';
    active1 = true;
});

function displaySegnaposto(elemento){
    var segnaposto = elemento.nextElementSibling;
    // segnaposto.style.display = "initial";
    $(segnaposto).css("display", "flex")
    $(segnaposto).hide()
    $(segnaposto).stop(true, false).fadeIn();
}

function hideSegnaposto(elemento){
    var segnaposto = elemento.nextElementSibling;
    $(segnaposto).stop(true, false).fadeOut();
}

function cambioMappa1(){
    document.getElementById('map').src = "https://www.google.com/maps/d/u/0/embed?mid=17kZpaCEoFbOwHPM74JBjNJScXrWSTq2M&ehbc=2E312F&z=13";
    $('html, body').animate({
        scrollTop: $("#titolo-slide").offset().top
    }, 2000);   
}

function cambioMappa2(){
    document.getElementById('map').src = "https://www.google.com/maps/d/u/0/embed?mid=17kZpaCEoFbOwHPM74JBjNJScXrWSTq2M&ehbc=2E312F&z=13";
    $('html, body').animate({
        scrollTop: $("#titolo-slide").offset().top
    }, 2000);   
}

function cambioMangiare(){
    document.getElementById('map').src = "https://www.google.com/maps/d/u/0/embed?mid=1PG0fujYMZ-V5sSZ3swr7uzjTMT_4obY8&ehbc=2E312F";
}

function cambioDormire(){
    document.getElementById('map').src = "https://www.google.com/maps/d/u/0/embed?mid=170rhFGPklhJxxx8udEsoTS7u4drhq49Q&ehbc=2E312F";
}

function cambioSentieri(){
    document.getElementById('map').src = "https://www.google.com/maps/d/u/0/embed?mid=17kZpaCEoFbOwHPM74JBjNJScXrWSTq2M&ehbc=2E312F&z=13";
}