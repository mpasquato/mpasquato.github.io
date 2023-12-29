var sonoGiu = false;
var sonoSu = true;

$(window).on("load", function () {
    headerTrasparente();
});

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 250) {
        if (sonoGiu == false) {
            $(".header").stop(true, false).slideUp();
            setTimeout(function () {
                $(".header").addClass("active");
                document.getElementById("logo").src = "../content/logo-piccolo-web-positivo.jpg";
                headerBianco();
            }, 500);
            setTimeout(function () {
                $(".header").stop(true, false).slideDown();
            }, 500);
            sonoGiu = true;
            sonoSu = true;
        }
        else { }
    } else {
        if (sonoSu == true) {
            $(".header").stop(true, false).slideUp();
            setTimeout(function () {
                $(".header").removeClass("active");
                document.getElementById("logo").src = "../content/logo-piccolo-web.png";
                headerTrasparente();
            }, 500);
            setTimeout(function () {
                $(".header").stop(true, false).slideDown();
            }, 500);
            sonoSu = false;
            sonoGiu = false;
        }
        else { }
    }
});

function headerTrasparente() {
    var bloccoSezione = document.getElementsByClassName('blocco-sezione');
    for (var i = 0; i < bloccoSezione.length; i++) {
        bloccoSezione[i].style.boxShadow = 'none';
    }

    var bloccoDropdown = document.getElementsByClassName('blocco-dropdown');
    for (var i = 0; i < bloccoDropdown.length; i++) {
        bloccoDropdown[i].style.border = 'none';
    }

    $('.blocco-dropdown').addClass('hidden');
}

function headerBianco() {
    var bloccoSezione = document.getElementsByClassName('blocco-sezione');

    var bloccoDropdown = document.getElementsByClassName('blocco-dropdown');
    for (var i = 0; i < bloccoDropdown.length; i++) {
        bloccoDropdown[i].style.borderLeft = '2px solid black';
        bloccoDropdown[i].style.borderRight = '2px solid black';
        bloccoDropdown[i].style.borderBottom = '2px solid black';
    }

    $('.blocco-dropdown').removeClass('hidden');

    // $('.blocco-sezione').hover(function() {
    //     $(this).css({'color': 'rgb(255,108,12)', 'cursor': 'pointer', 'box-shadow': 'inset 2px 0px 0px 0px black, inset -2px 0px 0px 0px black'});
    //   }, function() {
    //     $(this).css({'box-shadow': 'none'});
    //   });
    
}

