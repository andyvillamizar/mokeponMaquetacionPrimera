
  //variable global de los ataques
  let ataqueJugador = '';

  let ataqueEnemigo = '';

  let vidasJugador = 3;
  let vidasEnemigo = 3;

function iniciarJuego(){
        //ocultar seccion de seleccionar ataque
        let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
        sectionSeleccionarAtaque.style.display = 'none';

        //boton reiniciar oculto
         let sectionReiniciar = document.getElementById('reiniciar');
         sectionReiniciar.style.display = 'none';

        let botonMascotaJugador= document.getElementById('boton-mascota');
        botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
        
        function seleccionarMascotaJugador(){
            //ocultar seccion
            let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
            sectionSeleccionarMascota.style.display = 'none';

            let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
        sectionSeleccionarAtaque.style.display = 'flex';

            let inputHipodoge = document.getElementById('hipodoge');

            let inputCapipepo = document.getElementById('capipepo');

            let inputRatigueya = document.getElementById('ratigueya');

            let spanMascotaJugador = document.getElementById('mascota-jugador');

            if(inputHipodoge.checked){
                spanMascotaJugador.innerHTML = 'Hipodoge';
            }

            else if(inputCapipepo.checked){
                spanMascotaJugador.innerHTML = 'Capipepo';
            }

            else if(inputRatigueya.checked){
                spanMascotaJugador.innerHTML = 'Ratigueya';
            }

            else{
                alert('Selecciona una Mascota');
            }

            seleccionarMascotaEnemigo()
        }

        function seleccionarMascotaEnemigo(){
            let mascotaAleatoria = aleatorio(1,3);

            let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

            if(mascotaAleatoria == 1){
                //Hipodoge
                spanMascotaEnemigo.innerHTML = 'Hipodoge';
            }
            else if(mascotaAleatoria == 2){
                //Capipepo
                spanMascotaEnemigo.innerHTML = 'Capipepo';
            }
            else {
                //Ratigueya
                spanMascotaEnemigo.innerHTML = 'Ratigueya';
            }
        }

        function aleatorio(min , max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        //seleccionando botones en el HTML
        let botonFuego = document.getElementById('boton-fuego');

        let botonAgua = document.getElementById('boton-agua');

        let botonTierra = document.getElementById('boton-tierra');

        //Llamando los Eventos de los botones del HTML

        botonFuego.addEventListener('click',ataqueFuego);
        botonAgua.addEventListener('click',ataqueAgua);
        botonTierra.addEventListener('click',ataqueTierra);

        let botonReiniciar = document.getElementById('boton-reiniciar');
        botonReiniciar.addEventListener('click', reiniciarJuego);
    

        //Funciones de los ataques de las mascotas

        function ataqueFuego(){
            ataqueJugador = 'FUEGO';
            ataqueAleatorioEnemigo();
        }

        function ataqueAgua(){
            ataqueJugador = 'AGUA';
            ataqueAleatorioEnemigo();
        }

        function ataqueTierra(){
            
            ataqueJugador = 'TIERRA';
            ataqueAleatorioEnemigo();
        }

        function ataqueAleatorioEnemigo(){
            let ataqueAleatorio = aleatorio(1,3);

            if(ataqueAleatorio == 1) {
                ataqueEnemigo = 'FUEGO';
            }
            else if(ataqueAleatorio == 2) {
                ataqueEnemigo = 'AGUA';
            }
            else {
                ataqueEnemigo = 'TIERRA';
            }

            combate()
        }

        function crearMensaje(resultado){
            let sectionResultados = document.getElementById('mensajes');
            sectionResultados.style.display = 'flex';
            let sectionMensajes = document.getElementById('resultado');
            let ataqueDelJugador = document.getElementById('ataque-del-jugador');
            let ataqueDelEnemigo = document.getElementById('ataque-del-enemigo');

            let nuevoAtaqueDelJugador = document.createElement('p')
            let nuevoAtaqueDelEnemigo = document.createElement('p')

            sectionMensajes.innerHTML = resultado;
            nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
            nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

            
            ataqueDelJugador.appendChild(nuevoAtaqueDelJugador);
            ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
        }

        function crearMensajeFinal(resultadoFinal){
            let sectionMensajes = document.getElementById('resultado');

            sectionMensajes.innerHTML = resultadoFinal;

            let botonFuego = document.getElementById('boton-fuego');

            let botonAgua = document.getElementById('boton-agua');
    
            let botonTierra = document.getElementById('boton-tierra');
    
            //Desabilitando botones despues del juego
    
            botonFuego.disabled = true;
            botonAgua.disabled = true;
            botonTierra.disabled = true;

            let botonMascotaJugador= document.getElementById('boton-mascota');
        botonMascotaJugador.disabled = true;

        let sectionReiniciar = document.getElementById('reiniciar');
         sectionReiniciar.style.display = 'flex';
        }

        function combate(){
            let spanVidasJugador = document.getElementById('vidas-jugador');
            let spanVidasEnemigo = document.getElementById('vidas-enemigo');

            if(ataqueEnemigo == ataqueJugador){
                crearMensaje('EMPATE 😬');
            }

            else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
                crearMensaje('GANASTE 😎🔥');
                vidasEnemigo --;
                spanVidasEnemigo.innerHTML = vidasEnemigo;
            }

            else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
                crearMensaje('GANASTE 😁💧');
                vidasEnemigo --;
                spanVidasEnemigo.innerHTML = vidasEnemigo;
            }

            else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
                crearMensaje('GANASTE 🤩🌱');
                vidasEnemigo --;
                spanVidasEnemigo.innerHTML = vidasEnemigo;
            }

            else{
                crearMensaje('PERDISTE 😭');
                vidasJugador --;
                spanVidasJugador.innerHTML = vidasJugador;
            }

            revisarVidas()
        }

        function revisarVidas(){

            

            if(vidasEnemigo == 0){
                //Ganamos
                crearMensajeFinal('GANASTE EL JUEGO 🏆🍾');
            }
            else if(vidasJugador == 0){
                //Perdiste
                crearMensajeFinal('PERDISTE EL JUEGO 😖😢');

            }
        }

        function reiniciarJuego(){
            location.reload();
        }
}
window.addEventListener('load', iniciarJuego)