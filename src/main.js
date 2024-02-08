"use strict";

var puntuacion = 0;
function saltarNumero() {
    var generarNumero;
    do {
        generarNumero = Math.floor(Math.random() * 13);
    } while (generarNumero === 8 || generarNumero === 9);
    if (generarNumero === 0) {
        ++generarNumero;
    }
    if (generarNumero >= 10) {
        return 0.5;
    }
    console.log(generarNumero);
    return generarNumero;
}
var muestraPuntuacion = function (numero) {
    puntuacion = puntuacion + numero;
    var puntuacionElement = document.getElementById("puntuacion");
    if (puntuacionElement) {
        puntuacionElement.innerHTML = "Tu puntaci\u00F3n es: ".concat(puntuacion);
    }
};
document.addEventListener('DOMContentLoaded', function () {
    muestraPuntuacion(puntuacion);
});
function dameCarta() {
    var numero = saltarNumero();
    muestraPuntuacion(numero);
    if (puntuacion > 7.5) {
        deshabilitarBotonesYMostrarNuevaPartida();
        mostrarMensaje("¡GAME OVER MÁQUINA!");
    }
    var imagen = mostrarCarta(numero);
    var cartaElement = document.getElementById("carta");
    if (cartaElement && imagen) {
        cartaElement.src = imagen;
    }
}
var mostrarMensaje = function (mensaje) {
    var mensajePlantarElement = document.getElementById("mensajePlantar");
    if (mensajePlantarElement) {
        mensajePlantarElement.innerHTML = mensaje;
    }
};
var botonDameElement = document.getElementById("botonDame");
var botonDame = botonDameElement;
botonDame.addEventListener("click", dameCarta);
var mostrarCarta = function (numero) {
    var imagen;
    switch (numero) {
        case 1:
            imagen = '../public/1_as-copas.jpg';
            break;
        case 2:
            imagen = '../public/2_dos-copas.jpg';
            break;
        case 3:
            imagen = '../public/3_tres-copas.jpg';
            break;
        case 4:
            imagen = '../public/4_cuatro-copas.jpg';
            break;
        case 5:
            imagen = '../public/5_cinco-copas.jpg';
            break;
        case 6:
            imagen = '../public/6_seis-copas.jpg';
            break;
        case 7:
            imagen = '../public/7_siete-copas.jpg';
            break;
        case 0.5:
            var randomImgGenerator = Math.floor(Math.random() * 3) + 10;
            switch (randomImgGenerator) {
                case 10:
                    imagen = '../public/10_sota-copas.jpg';
                    break;
                case 11:
                    imagen = '../public/11_caballo-copas.jpg';
                    break;
                case 12:
                    imagen = '../public/12_rey-copas.jpg';
                    break;
            }
    }
    return imagen;
};
var deshabilitarBotonesYMostrarNuevaPartida = function () {
    botonPlantoElement.disabled = true;
    botonDameElement.disabled = true;
    var botonNuevaPartidaElement = document.getElementById("nuevaPartida");
    if (botonNuevaPartidaElement && botonNuevaPartidaElement instanceof HTMLButtonElement) {
        botonNuevaPartidaElement.style.display = "block";
    }
    botonNuevaPartidaElement === null || botonNuevaPartidaElement === void 0 ? void 0 : botonNuevaPartidaElement.addEventListener("click", function () {
        location.reload();
    });
};
var mePlanto = function () {
    var mensaje = "";
    var mensajePlantarElement = document.getElementById("mensajePlantar");
    if (mensajePlantarElement && mensajePlantarElement instanceof HTMLButtonElement) {
        mensajePlantarElement.innerHTML = mensaje;
    }
    if (puntuacion < 4) {
        mensaje = "Has sido muy conservador";
    }
    else if (puntuacion <= 5) {
        mensaje = "¿Te has hecho caquita eh?";
    }
    else if (puntuacion === 6 || puntuacion === 7) {
        mensaje = "Casi, casi...";
    }
    else if (puntuacion === 7.5) {
        mensaje = "Lo has clavado, ¡Enhorabuena!";
    }
    var botonFuturoElement = document.getElementById("botonFuturo");
    if (botonFuturoElement && botonFuturoElement instanceof HTMLButtonElement) {
        botonFuturoElement.style.display = "block";
    }
    botonFuturoElement === null || botonFuturoElement === void 0 ? void 0 : botonFuturoElement.addEventListener("click", dameCarta);
    deshabilitarBotonesYMostrarNuevaPartida();
    mensajePlantarElement.innerHTML = mensaje;
};
var botonPlantoElement = document.getElementById("botonPlanto");
var botonPlanto = botonPlantoElement;
botonPlanto.addEventListener("click", mePlanto);
