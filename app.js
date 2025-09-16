let amigos = []
let juegoTerminado = false;
function agregarAmigo() {
    let input = document.querySelector('#amigo');
    let nombre = input.value.trim(); // trim sirve para sacar los espacios al comienzo y al final de la variable
    console.log(amigos)
    

    if (nombre === '') {
        alert('Ingresa un nombre válido');
    } else {
        console.log("Se agregó:", nombre);
        limpiarCaja();
        amigos.push(nombre)
        console.log(amigos)
        console.log(amigos.length)

    }
    vector();

}
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function vector() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for(let i=0;i<amigos.length;i++){
    let li = document.createElement('li')
    li.textContent= amigos[i]
    lista.appendChild(li)
}
}
function sortearAmigo() {
    if(juegoTerminado){
        alert('El juego ya terminó, reinicia para volver a jugar.')
        return;
    }
    if(amigos.length>=2){
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        let amigoGanador = amigos[indiceAleatorio];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo ganador es: ${amigoGanador}, felicidades!!!`
        document.getElementById('reiniciar').removeAttribute('disabled');
        juegoTerminado = true;

    }else{
        alert('Agrega al menos 2 amigos')
        return;
    }


}
function reiniciarJuego() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    juegoTerminado = false;
}