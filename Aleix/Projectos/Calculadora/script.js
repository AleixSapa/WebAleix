var Numero1;
var Numero2;
var Simbol;


function onclickNumbers(Num) {

    if (Simbol == undefined) {
        if (Numero1 == undefined) {
            Numero1 = Num;
        } else {
            Numero1 = Numero1 + Num;
        }
        var botonPantalla = document.getElementById("pantalla");
        botonPantalla.innerHTML = Numero1;
    } else {
        if (Numero2 == undefined) {
            Numero2 = Num;
        } else {
            Numero2 = Numero2 + Num;
        }
        var botonPantalla = document.getElementById("pantalla");
        botonPantalla.innerHTML = Numero2;
    }
}

function onclickSimbol(NouSimbol) {
    Simbol = NouSimbol;
}
function onclickSimbolComa(Coma) {
    if (Simbol == undefined) {

        if (Numero1.indexOf(Coma) == -1) {
            Numero1 = Numero1 + Coma;
        }

        var botonPantalla = document.getElementById("pantalla");
        botonPantalla.innerHTML = Numero1;
    } else {
        if (Numero2.indexOf(Coma) == -1) {
            Numero2 = Numero2 + Coma;
        }

        var botonPantalla = document.getElementById("pantalla");
        botonPantalla.innerHTML = Numero2;
    }
}
function onclickPantalla() {
    var N1 = Number(Numero1);
    var N2 = Number(Numero2);
    var Resultat;

    if (Simbol == '+') {
        Resultat = N1 + N2;
    }
    if (Simbol == '-') {
        Resultat = N1 - N2;
    }
    if (Simbol == '*') {
        Resultat = N1 * N2;
    }
    if (Simbol == '/') {
        Resultat = N1 / N2;
    }
    if (Numero2 == undefined) {
        Resultat = Numero1;
    }
    var botonPantalla = document.getElementById("pantalla");
    botonPantalla.innerHTML = Resultat;

    Numero1 = undefined;
    Numero2 = undefined;
    Simbol = undefined;
}