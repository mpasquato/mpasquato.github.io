function mostraNatura() {
    $("#nav-natura-dropdown").stop(true, false).slideToggle();
    $("#nav-territorio-dropdown").stop(true, false).slideUp();
    $("#nav-ente-dropdown").stop(true, false).slideUp();

    $('#freccia-natura').toggleClass('rotate');
    $('#freccia-territorio').removeClass('rotate');
    $('#freccia-ente').removeClass('rotate');
}

function mostraTerritorio() {
    $("#nav-natura-dropdown").stop(true, false).slideUp();
    $("#nav-territorio-dropdown").stop(true, false).slideToggle();
    $("#nav-ente-dropdown").stop(true, false).slideUp();

    $('#freccia-territorio').toggleClass('rotate');
    $('#freccia-natura').removeClass('rotate');
    $('#freccia-ente').removeClass('rotate');
}

function mostraEnte() {
    $("#nav-natura-dropdown").stop(true, false).slideUp();
    $("#nav-territorio-dropdown").stop(true, false).slideUp();
    $("#nav-ente-dropdown").stop(true, false).slideToggle();

    $('#freccia-ente').toggleClass('rotate');
    $('#freccia-natura').removeClass('rotate');
    $('#freccia-territorio').removeClass('rotate');
}
