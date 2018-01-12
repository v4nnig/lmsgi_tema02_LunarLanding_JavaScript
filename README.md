TO-DO:

* hacer botón a pause
    * buscar la forma de interrumpir setInterval sin que se reinicie el juego, usar esto para abrir y cerrar menú movil y para poner un botón de pause general.

* optional, crear una leyenda flotable en el cuerpo de la app cuaando la nave aterrie o cuando explote en vez de el alert.

* crear repo github

* subir archivos a github

* validar archivos html, css, js y comprobar optimización de las imagenes.

* completar texto del README.
























# Proyecto Lunar Landing parte 2 "JavaScript" correspondiente al tema 2 de LMSGI.

En este proyecto he decidido cambiar varios aspectos del trabajo anterior, incluido parte del HTML para que fuese funcional con JavaScript.

También he modificado los iconos para hacerlos mas esteticamente atractivos y he cambiado la visualización del menú y del panel de instrumentos en el modo movil, de modo que ahora el menú se muestra oculto y solo es visualizable haciendo clic en el icono de la nave.

En cambio los paneles ya no tienen iconos, en vez he creado un efecto de indicadores en forma de barra que crecen o reducen su tamaño en función de los valores del panel.



Para crear el trabajo he usado los siguientes recursos he imagenes:

* [rocket.svg](img\borradores\rocket.svg)
    * Obtenida desde [Wikimedia](https://commons.wikimedia.org/wiki/File:Emojione_1F680.svg)

En cuanto al resto de imagenes son de creación propia utilizando *Adobe illustrator*.

* Quisiera explicar que también que la carpeta `img\drafts` guardan los borradores originales de las imagenes que he creado.

## Uso de Sprites
---

Para el trabajo he usado dos archivos de sprites los cuales he usado para el menú de navegación y panel de instrumentos de la nave.

los archivos se encuentran en `img\estados.png` e `img\botones.png`.

Durante el desarrollo del proyecto me he encontrado con un problema que no he sabido resolver aún, mi intención era la de utilizar las imagenes de fondo también como sprites, pero me no he encontrado forma posible de hacerlo, debido a que por ejemplo en el caso del archivo del fondo de la página que corresponde al [cielo de estrellas](img/cieloestrellado.png), si uso un sprite de algúna forma se repiten el resto de imagenes y solo he podido resumirlo usando solo una imagen como textura que repito en el fondo.


## Información final de validación y previsualización.
---

Validación HTML en [validator.w3.org](https://validator.w3.org/nu/?doc=https%3A%2F%2Frawgit.com%2Fv4nnig%2Flmsgi_tema02_LunarLanding_HTMLyCSS%2Fmaster%2Findex.html) y CSS en [jigsaw.w3.org](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Frawgit.com%252Fv4nnig%252Flmsgi_tema02_LunarLanding_HTMLyCSS%252Fmaster%252Findex.html&profile=css3&usermedium=all&warning=1&vextwarning=&lang=es).

Proyecto visible en [rawgit](https://rawgit.com/v4nnig/lmsgi_tema02_LunarLanding_HTMLyCSS/master/index.html).

Para ir a la rama con los css minificados ir a: [https://github.com/v4nnig/lmsgi_tema02_LunarLanding_HTMLyCSS/tree/minificando](https://github.com/v4nnig/lmsgi_tema02_LunarLanding_HTMLyCSS/tree/minificando)





# Lunar lander con html, css y javascript
Versión esqueleto del juego Lunar Landing que incluye:

* Html con los elementos básicos del juego
* Css: d.css y m.css dos versiones que cargan mediante media query dependiendo del tamaño de pantalla.
* Js: programación realista básica necesaria para dejar caer la nave y parar cuando llega a un límite. Actualiza la velocidad y la altura en %/s y % (1% de pantalla = 1 metro).
* No dispone de imágenes.

Previsualización: https://rawgit.com/urbinapro/lunar-landing-javascript/master/index.html

Tareas a desarrollar:
* Ponerlo bonito según vuestro diseño anterior. No te olvides de optimizar las imágenes. Recuerda que se pueden cargar diferentes tamaños y formas de fondos en función del dispositivo usando css.

* Poner los menús (móvil y escritorio) según vuestro diseño anterior.

* Al pulsar una tecla, hacer click en el botón de power o bien hacer click en la pantalla la nave debe cambiar de aspecto a *nave con motor encendido* y debe cambiar la aceleración de g a -g (ejecutar motorOn).

* Opcionalmente se pueden disponer de menores o mayores tanques de combustible para aumentar o disminuir la dificultad del juego.

* Al tocar fondo debe mirarse si la velocidad de impacto es inferior a un valor umbral, en caso afirmativo mostrar mensaje de felicitación, en caso negativo explotar la nave. En ambos casos el juego finaliza y puede reiniciarse con la opción del menú *reiniciar*

* Debes poder elegir diferentes valores umbrales: 1m/s en modo difícil, 5m/s en modo muy fácil.

* Debe haber una página de *How to play* y una página de *About* accesibles desde el menú (vas a otras páginas saliendo del juego con un avisador o mensaje de comfirmación de que sales de la partida).

Cualquier otra funcionalidad o cambio debe quedar debidamente documentado.

**Este repositorio es susceptible de sufrir modificaciones sin previo aviso**