$(document).ready(function () {
    $('#natura').hover(
        function () {
            $('#natura-dropdown', this).stop(true, true).slideDown(200);
        },
        function () {
            $('#natura-dropdown', this).stop(true, true).slideUp(200);
        });
});

$(document).ready(function () {
    $('#territorio').hover(
        function () {
            $('#territorio-dropdown', this).stop(true, true).slideDown(200);
        },
        function () {
            $('#territorio-dropdown', this).stop(true, true).slideUp(200);
        });
});

$(document).ready(function () {
    $('#ente').hover(
        function () {
            $('#ente-dropdown', this).stop(true, true).slideDown(200);
        },
        function () {
            $('#ente-dropdown', this).stop(true, true).slideUp(200);
        });
});

$(document).ready(function () {
    $('#logo').hover(
        function () {
            var logo = document.getElementById("logo");
            logo.style.cursor = 'pointer';
        });
    $('#logo').click(
        function () {
            window.location = 'index.html';
        });
});

$(document).ready(function () {
    $('#logo-mobile').hover(
        function () {
            var logo = document.getElementById("logo-mobile");
            logo.style.cursor = 'pointer';
        });
    $('#logo-mobile').click(
        function () {
            window.location = 'index.html';
        });
});

$(document).ready(function () {
    $('#nav-contatti').click(
        function () {
            window.location = 'contatti.html';
        });
});