var y = 60; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer = null;
var timerFuel = null;
var fuel = 100;

//al cargar por completo la página...
window.onload = function () {
	//definición de eventos
	//mostrar menú móvil

	document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("menu")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("menu")[0].style.display = "none";
		start();
	}

	//encender/apagar el motor al hacer click en la pantalla

	document.onclick = function () {
		if (a == g) {
			motorOn();
		} else {
			motorOff();
		}
	}
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;

	//Empezar a mover nave
	start();
}

// Definición de funciones
function start() {
	timer = setInterval(function () { moverNave(); }, dt * 1000);
}
function stop() {
	clearInterval(timer);
}
function moverNave() {
	v -= a * dt;
	document.getElementsByClassName("speed")[0].childNodes[3].innerHTML = Math.round(v) < 0 ? Math.round(v) * -1 : Math.round(v);
	if (window.matchMedia("(min-width: 600px)").matches) {
		document.getElementsByClassName("speed")[0].childNodes[3].style.width = Math.round(v) < 0 ? Math.round(v) * -1 + "%" : Math.round(v) + "%";
	} else {
		document.getElementsByClassName("speed")[0].childNodes[3].style.width = 100 + "%";
		document.getElementsByClassName("speed")[0].childNodes[3].style.height = Math.round(v) < 0 ? Math.round(v) * -1 + "%" : Math.round(v) + "%";
	}


	y += v * dt;
	document.getElementsByClassName("height")[0].childNodes[3].innerHTML = Math.round(y);	//mover hasta que top sea un 70% de la pantalla
	if (window.matchMedia("(min-width: 600px)").matches) {
		document.getElementsByClassName("height")[0].childNodes[3].style.width = Math.round(y) + "%";	
	} else {
		document.getElementsByClassName("height")[0].childNodes[3].style.width = 100 + "%";
		document.getElementsByClassName("height")[0].childNodes[3].style.height = Math.round(y) + "%";
	}
		
	if (y > 0) { // alturas minimas y máximas
		document.getElementById("nave").style.bottom = y + "%";
		if (y > 100) {
			stop();
			alert(":( NO HAS CUMPLIDO LA MISION..\nHAZ CLICK EN LA PANTALLA PARA VOLVER A INICIAR");
			document.onclick = function() { window.location.reload(); }
		}
	} else {
		stop();
		if (v < -2 || v > 2) {  //valor humbral he elegido 2 mt/s porque es de una dificultad intermedia
			document.onkeydown = null;
			document.onkeyup = null;
			shipExplode();
		} else {
			document.onkeydown = null;
			document.onkeyup = null;
			alert(":) FELICIDADES HAZ ATERRIZADO A SALVO!!!\nHAZ CLICK EN LA PANTALLA PARA REINICIAR...");
			document.onclick = function() { window.location.reload(); }
		}
	}
}
function motorOn() {
	a = -g;
	if (timerFuel == null)
		timerFuel = setInterval(function () { actualizarAltura(); }, 10);
	// document.getElementById("nave").style.backgroundImage = "url('../img/cohetesp.png')";
	document.getElementById("nave").style.backgroundPosition = "-72px 0px";
}
function motorOff() {
	a = g;
	clearInterval(timerFuel);
	timerFuel = null;
	// document.getElementById("nave").style.backgroundImage = "url('../img/cohetesp.png')";
	document.getElementById("nave").style.backgroundPosition = "0px 0px";
}

function actualizarAltura() {
	//Aquí hay que cambiar el valor del marcador de Fuel...

	document.getElementsByClassName("fuel")[0].childNodes[3].innerHTML = Math.round(fuel);
	if (window.matchMedia("(min-width: 600px)").matches) {
		document.getElementsByClassName("fuel")[0].childNodes[3].style.width = Math.round(fuel) + "%";
	} else {
		document.getElementsByClassName("fuel")[0].childNodes[3].style.width = 100 + "%";
		document.getElementsByClassName("fuel")[0].childNodes[3].style.height = Math.round(fuel) + "%";
	}

	if (fuel <= 0) { //Evaluamos si queda combustible y si no detenemos el motor.
		motorOff();
		fuelDeposit = 0;
	} else {
		fuel -= 0.1;
	}
}

function shipExplode() {

	// document.getElementById("nave").style.backgroundImage = "url('../img/cohetesp.png')";
	document.getElementById("nave").style.backgroundPosition = "-144px 0px";
	setTimeout(function () { 
		alert("LA NAVE HA EXPLOTADO, HAS FALLADO!!\nHAZ CLICK EN LA PANTALLA PARA REINICIAR...")
	}, 100);	
	document.onclick = function() { window.location.reload(); }
}
