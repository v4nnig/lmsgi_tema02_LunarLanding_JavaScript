window.onload = function () {
	//definición de eventos
	//mostrar menú móvil

	document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("menu")[0].style.display = "block";
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("menu")[0].style.display = "none";
	}
}