// document.getElementById("dove-mangiare").addEventListener("click", function(){
//     document.getElementById("dove-mangiare").style.backgroundColor = "violet";
//   });
var mangiare = document.getElementById("dove-mangiare");
$(window).on("load", function () { doveMangiare(); })
mangiare.addEventListener("click", function () { doveMangiare(); });

var dormire = document.getElementById("dove-dormire");
dormire.addEventListener("click", function () { doveDormire(); });

var sentieri = document.getElementById("sentieri");
sentieri.addEventListener("click", function () { qualiSentieri(); });

function doveMangiare(){
    var bottone = document.getElementById('dove-mangiare');
    bottone.style.backgroundColor = 'rgb(255,108,12)';
    bottone.style.color = 'white';

    bottone = document.getElementById('dove-dormire');
    bottone.style.backgroundColor = 'white';
    bottone.style.color = 'black';

    bottone = document.getElementById('sentieri');
    bottone.style.backgroundColor = 'white';
    bottone.style.color = 'black';
}

function doveDormire(){
    var bottone = document.getElementById('dove-dormire');
    bottone.style.backgroundColor = 'rgb(255,108,12)';
    bottone.style.color = 'white';

    bottone = document.getElementById('dove-mangiare');
    bottone.style.backgroundColor = 'white';
    bottone.style.color = 'black';

    bottone = document.getElementById('sentieri');
    bottone.style.backgroundColor = 'white';
    bottone.style.color = 'black';
}

function qualiSentieri(){
    var bottone = document.getElementById('sentieri');
    bottone.style.backgroundColor = 'rgb(255,108,12)';
    bottone.style.color = 'white';

    bottone = document.getElementById('dove-mangiare');
    bottone.style.backgroundColor = 'white';
    bottone.style.color = 'black';

    bottone = document.getElementById('dove-dormire');
    bottone.style.backgroundColor = 'white';
    bottone.style.color = 'black';
}