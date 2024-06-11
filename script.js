
// Selecciona un numero al azar por parte del programa
let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0;


// Esta accion se va a ejecutar cuando se toque el boton

function chequearResultado(){
    intentos++;
    if(intentos <= 1){
        intento.textContent = `Intentaste: ${intentos} vez`;
    }else{
        intento.textContent = `Intentaste: ${intentos} veces`;
    }
    

    let numeroIngresado = parseInt(numeroEntrada.value);

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor introduce un numero valido entre 1 y 100';
        mensaje.style.color = 'black';
        return
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = 'Felicitaciones, has adivinado el numero';
        mensaje.style.color = "green";
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'Mas alto, el numero es mayor al que dijiste';
        mensaje.style.color = "red";
    }else{
        mensaje.textContent = 'Mas bajo, el numero es menor al que colocaste';
        mensaje.style.color = "red";
    }



}