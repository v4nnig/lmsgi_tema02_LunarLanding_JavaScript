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