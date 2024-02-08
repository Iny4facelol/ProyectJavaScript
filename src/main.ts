


let puntuacion = 0;

function saltarNumero () {
    let generarNumero;
    
    do {
        generarNumero = Math.floor(Math.random() * 13);
    } while (generarNumero === 8 || generarNumero === 9);
    if(generarNumero === 0){
        ++generarNumero
    }
    if(generarNumero >= 10) {
        return 0.5;
    }
    console.log(generarNumero);
    return generarNumero;
    
    
}

let muestraPuntuacion = (numero:number) => {
    puntuacion = puntuacion + numero;
    let puntuacionElement = document.getElementById("puntuacion");
    if(puntuacionElement) {
        puntuacionElement.innerHTML = `Tu puntación es: ${puntuacion}`;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    muestraPuntuacion(puntuacion);
});

function dameCarta (){
    let numero = saltarNumero();
    muestraPuntuacion(numero)
    if(puntuacion > 7.5) {
        deshabilitarBotonesYMostrarNuevaPartida();
        mostrarMensaje("¡GAME OVER MÁQUINA!")
        
    }
    let imagen = mostrarCarta(numero);
    let cartaElement = document.getElementById("carta") as HTMLImageElement;
    if(cartaElement && imagen) {
        cartaElement.src = imagen;
    
}
}
const mostrarMensaje = (mensaje: string) => {
    const mensajePlantarElement = document.getElementById("mensajePlantar") as HTMLButtonElement;
    if (mensajePlantarElement) {
      mensajePlantarElement.innerHTML = mensaje;
    }
  }




const botonDameElement  = document.getElementById("botonDame") as HTMLButtonElement;
const botonDame = botonDameElement;
botonDame.addEventListener("click", dameCarta);







const mostrarCarta = (numero:number) => {
    let imagen;
    switch(numero){
        case 1:
            imagen = '1_as-copas.jpg';
            break;
        case 2:
            imagen = '2_dos-copas.jpg';
            break;
        case 3:
            imagen = '3_tres-copas.jpg';
            break;
        case 4:
            imagen = '4_cuatro-copas.jpg';
            break;
        case 5:
            imagen = '5_cinco-copas.jpg';
            break;
        case 6:
            imagen = '6_seis-copas.jpg';
            break;
        case 7:
            imagen = '7_siete-copas.jpg';
            break;
        case 0.5:
            let randomImgGenerator = Math.floor(Math.random( ) * 3) + 10 ; 
            switch(randomImgGenerator){
                case 10:
                    imagen = '10_sota-copas.jpg';
                    break;
                case 11:
                    imagen = '11_caballo-copas.jpg';
                    break;
                case 12:
                    imagen = '12_rey-copas.jpg';
                    break;
            }
        }
        return imagen;
    }
    

    
const deshabilitarBotonesYMostrarNuevaPartida = () => {
    botonPlantoElement.disabled=true;
    botonDameElement.disabled=true;
    const botonNuevaPartidaElement = document.getElementById( "nuevaPartida" );
    if(botonNuevaPartidaElement && botonNuevaPartidaElement instanceof HTMLButtonElement) {
        botonNuevaPartidaElement.style.display = "block";
    }

    
    botonNuevaPartidaElement?.addEventListener("click", () => {
        location.reload();
    } );
    
}

const mePlanto = () => {
    let mensaje = "";
    const mensajePlantarElement = document.getElementById( "mensajePlantar" );
    if(mensajePlantarElement && mensajePlantarElement instanceof HTMLButtonElement) {
        mensajePlantarElement.innerHTML = mensaje;
    }
    if(puntuacion < 4 ){
        mensaje = "Has sido muy conservador";
    } else if ( puntuacion  <= 5 ) {
        mensaje = "¿Te has hecho caquita eh?";
    }  else if ( puntuacion === 6  || puntuacion === 7 ) {
        mensaje = "Casi, casi...";
    } else if(puntuacion === 7.5) {
        mensaje = "Lo has clavado, ¡Enhorabuena!";
    } 
    const botonFuturoElement = document.getElementById("botonFuturo");
    if(botonFuturoElement && botonFuturoElement instanceof HTMLButtonElement) {
        botonFuturoElement.style.display = "block";
    }
    botonFuturoElement?.addEventListener("click", dameCarta);
    deshabilitarBotonesYMostrarNuevaPartida();
    mensajePlantarElement!.innerHTML = mensaje;

}





const botonPlantoElement  = document.getElementById("botonPlanto") as HTMLButtonElement;
const botonPlanto = botonPlantoElement;
botonPlanto.addEventListener("click", mePlanto);
